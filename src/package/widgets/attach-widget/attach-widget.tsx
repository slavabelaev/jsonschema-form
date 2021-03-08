import React from "react";
import {createCn} from "bem-react-classname";
import {JSONSchema7} from "json-schema";
import {Attach, AttachProps} from "arui-feather/attach";
import FormatTXTIcon from "arui-feather/icon/file/format-txt";
import Format1cIcon from "arui-feather/icon/file/format-1c";
import FormatSketchIcon from "arui-feather/icon/file/format-sketch";
import FormatCSVIcon from "arui-feather/icon/file/format-csv";
import FormatDOCIcon from "arui-feather/icon/file/format-doc";
import FormatWordIcon from "arui-feather/icon/file/format-word";
import FormatPDFIcon from "arui-feather/icon/file/format-pdf";
import FormatPNGIcon from "arui-feather/icon/file/format-png";
import FormatJPGIcon from "arui-feather/icon/file/format-jpg";
import FormatPPTIcon from "arui-feather/icon/file/format-ppt";
import FormatSVGIcon from "arui-feather/icon/file/format-svg";
import FormatXLSIcon from "arui-feather/icon/file/format-xls";
import FormatXMLIcon from "arui-feather/icon/file/format-xml";
import FormatZIPIcon from "arui-feather/icon/file/format-zip";
import FormatRARIcon from "arui-feather/icon/file/format-rar";
import GalleryInCameraIcon from "arui-feather/icon/action/gallery-in-camera";
import FormatTIFIcon from "arui-feather/icon/file/format-tif";
import AttachmentIcon from "arui-feather/icon/action/attachment";
import {WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import {Helper} from "../../components/helper";
import {mapHelperProps} from "../../utils/map-helper-props";
import "./attach-widget.scss";

const cn = createCn('attach-widget');

export type AttachUiOptions = Omit<AttachProps,
    'name' |
    'value' |
    'accept' |
    'className' |
    'disabled' |
    'id' |
    'multiple' |
    'size' |
    'theme' |
    'tabIndex' |
    'onChange' |
    'onBlur' |
    'onFocus' |
    'icon'
>;

const getIconByContentMediaType = (contentMediaType: JSONSchema7['contentMediaType']) => {
    switch (contentMediaType) {
        case 'text/plain': return FormatTXTIcon;
        case 'text/x-1c': return Format1cIcon;
        case 'text/x-sketch': return FormatSketchIcon;
        case 'text/csv': return FormatCSVIcon;
        case 'application/msword': return FormatDOCIcon;
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': return FormatWordIcon;
        case 'application/pdf': return FormatPDFIcon;
        case 'application/vnd.ms-powerpoint': return FormatPPTIcon;
        case 'image/svg+xml': return FormatSVGIcon;
        case 'application/vnd.ms-excel': return FormatXLSIcon;
        case 'application/xml': return FormatXMLIcon;
        case 'application/zip': return FormatZIPIcon;
        case 'application/vnd.rar': return FormatRARIcon;
        case 'image/png': return FormatPNGIcon;
        case 'image/jpeg': return FormatJPGIcon;
        case 'image/webp':
        case 'image/bmp':
        case 'image/gif':
        case 'image/vnd.microsoft.icon':
        case 'image/*': return GalleryInCameraIcon;
        case 'image/tiff': return FormatTIFIcon;
        default: return AttachmentIcon;
    }
}

const mapAttachIcon = (props: WidgetProps): AttachProps['icon'] => {
    const { schema, formContext } = props;
    const { theme, size } = formContext || {};
    const { contentMediaType } = (schema?.items as JSONSchema7) || schema || {};
    const Icon = getIconByContentMediaType(contentMediaType);

    return (
        <Icon
            theme={theme}
            size={size}
        />
    );
}

const generateId = () => Math.random().toString(16).substring(2);

const toDataURL = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const content = (reader.result as string)?.replace(/(data:.*?;)/, `$1name=${file.name};lastModified=${file.lastModified};`);
        resolve(content);
    }
    reader.onerror = reject;
});

const fromDataURL = (dataURLString: string): File => {
    const blob = new Blob([dataURLString]);
    const [, originName] = dataURLString?.match(/;name=(.*?);/) || [];
    const [, lastModified] = dataURLString?.match(/;lastModified=(.*?);/) || [];
    const fileName = originName || generateId();
    return new File([blob], fileName, {
        lastModified: lastModified
            ? Number(lastModified)
            : undefined
    });
}

const notEmptyString = (value: any) => typeof value === 'string' && value;

export function mapAttachProps(props: WidgetProps): AttachProps {
    const {
        value,
        schema,
        tabIndex,
        disabled,
        readonly,
        multiple,
        id,
        formContext: {
            size,
            theme
        } = {},
        onChange,
        onBlur,
        onFocus,
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as AttachUiOptions;
    const items = schema.items as JSONSchema7;
    const title = multiple
        ? items?.title
        : schema.title;
    const accept = multiple
        ? items?.contentMediaType
        : schema?.contentMediaType;

    const toInput = (value?: any): AttachProps['value'] => {
        if (value instanceof Array) {
            return value.map(fromDataURL);
        }

        switch(typeof value) {
            case 'undefined': return [];
            case 'string': return value ? [fromDataURL(value)] : [];
            default: return [];
        }
    }

    const handleChange: AttachProps['onChange'] = async (newValue) => {
        const fileList = (newValue as File[])?.map?.(toDataURL) || [];
        const filesAsDataURLs = await Promise.all(fileList);
        const dataURLFiles = filesAsDataURLs.filter(notEmptyString);
        switch (schema.type) {
            case 'string':
                onChange(dataURLFiles?.[0]);
                break;
            case 'array':
                onChange(dataURLFiles);
                break;
            default:
                const output = toType(dataURLFiles, schema.type);
                onChange(output);
        }
    }

    return {
        "data-test-id": undefined,
        id: undefined,
        name: undefined,
        maxFilenameLength: undefined,
        progressBarPercent: undefined,
        onClick: undefined,
        onMouseEnter: undefined,
        onMouseLeave: undefined,
        buttonProps: undefined,
        ...uiOptions,
        icon: mapAttachIcon(props),
        noFileText: uiOptions?.noFileText,
        buttonContent: uiOptions?.buttonContent || title,
        // props
        value: toInput(value),
        accept,
        className,
        disabled: disabled || readonly,
        multiple,
        size,
        theme,
        tabIndex,
        onChange: handleChange,
        onBlur: () => onBlur(id, value),
        onFocus: () => onFocus(id, value),
    }
}

export function AttachWidget(props: WidgetProps) {
    return (
        <div className='attach-widget'>
            <Attach {...mapAttachProps(props)} />
            <Helper {...mapHelperProps(props)} />
        </div>
    )
}
