import React, {useEffect, useState} from 'react';
import {createCn} from "bem-react-classname";
import {FormProps} from "arui-feather/form";
import {ProgressStep, ProgressStepProps} from "./progress-step";
import './progress-stepper.scss';

const cn = createCn('progress-stepper');

export type ProgressStepperProps = {
    className?: string;
    items: ProgressStepProps[];
    theme?: FormProps['theme'];
    size?: FormProps['size'];
}

export function ProgressStepper(props: ProgressStepperProps) {
    const { items, theme, size } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [initialErrorsNumber, setInitialErrorsNumber] = useState(0);
    const activeStep = items?.[activeIndex];
    const { errorsNumber = 0 } = activeStep || {};
    const stepNumber = activeIndex + 1;
    const totalSteps = items?.length;
    const stepPercent = 100 / totalSteps;
    const minPercent = stepPercent * (stepNumber - 1);
    const maxPercent = stepPercent * stepNumber;
    const errorPercent = initialErrorsNumber ? (stepPercent / initialErrorsNumber) : 0;
    const percent = maxPercent - errorPercent * errorsNumber;

    useEffect(() => {
        if (errorsNumber && !initialErrorsNumber) {
            setInitialErrorsNumber(errorsNumber)
        }
    }, [errorsNumber]);

    useEffect(() => {
        setInitialErrorsNumber(errorsNumber);
    }, [activeIndex]);

    const navigateNext = () => setActiveIndex(activeIndex + 1);
    const navigateBack = () => setActiveIndex(activeIndex - 1);

    return (
        <div className={cn()}>
            <ProgressStep
                onBack={navigateBack}
                onNext={navigateNext}
                theme={theme}
                size={size}
                stepNumber={stepNumber}
                totalSteps={totalSteps}
                minPercent={minPercent}
                percent={percent}
                maxPercent={maxPercent}
                canBack={stepNumber > 1}
                {...activeStep}
            />
        </div>
    );
}
