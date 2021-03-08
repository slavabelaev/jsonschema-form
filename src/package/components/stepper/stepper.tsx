import React, {useState} from "react";
import {Step, StepProps} from "./step";

export type StepperItemProps = Omit<StepProps, 'icon' | 'isCompleted' | 'isLast' | 'isFirst' | 'isActive'>

export type StepperProps = {
    className?: string;
    items: StepperItemProps[];
};

export function Stepper({
    className,
    items,
}: StepperProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderStep = (props: StepperItemProps, index: number) => {
        const isActive = activeIndex === index;
        const number = index + 1;
        const isFirst = index === 0;
        const isLast = items.length === number;
        const isCompleted = index < activeIndex;

        const handleBack = () => {
            setActiveIndex(index - 1);
            props?.backButtonProps?.onClick?.();
        }

        const handleNext = () => {
            setActiveIndex(index + 1);
            props?.nextButtonProps?.onClick?.();
        }

        return (
            <Step
                key={index}
                {...props}
                children={isActive ? props.children : null}
                icon={number}
                isCompleted={isCompleted}
                isActive={isActive}
                backButtonProps={{
                    disabled: isFirst,
                    ...props?.backButtonProps,
                    onClick: handleBack
                }}
                nextButtonProps={{
                    disabled: isLast,
                    ...props?.nextButtonProps,
                    onClick: handleNext
                }}
            />
        )
    }

    return (
        <div className={className}>
            {items?.map(renderStep)}
        </div>
    );
}
