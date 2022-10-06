import React, { useState } from 'react'
import { StepperContext } from '../contexts/StepperContext';
import Stepper from './Stepper';
import StepperControl from './StepperControl';
import BasicDetails from './BasicDetails';
import CandidateRequriments from './CandidateRequriments';
import InterViewerInfromation from './InterViewerInfromation';
import SelectPlan from './SelectPlan';
import Final from './Final';

const MultiStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);

    const steps = [
        "Basic Details ",
        "Candidate Requirments",
        "Interviewer information",
        "final",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <BasicDetails />
            case 2:
                return <CandidateRequriments />
            case 3:
                return <InterViewerInfromation />
            case 4:
                return <Final />
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;
        direction === "next" ? newStep++ : newStep--;

        //check if step are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }

    return (
        <>
            <div className='w-full mx-auto shadow-xl rounded-2xl pb-2 bg-white' >
                {/* Stepper */}
                <div className='w-full horizontal mt-5' >
                    <Stepper
                        steps={steps}
                        currentStep={currentStep}
                    />

                    {/* Display Component */}
                    <div className='my-10 p-10' >
                        <StepperContext.Provider value={{
                            userData,
                            setUserData,
                            finalData,
                            setFinalData
                        }}>
                            {displayStep(currentStep)}
                        </StepperContext.Provider>
                    </div>

                </div>

                {/* Navigation Control */}

                {currentStep != steps.length &&
                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                }
            </div>


        </>
    )
}

export default MultiStepper