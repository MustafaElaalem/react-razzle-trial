import React from "react";
import "./style.css";

export default function ProgressMultiStepsBar(props) {
const {step, setStep} = props;
  const arrayProgress = [
    {
      title: "Step 1",
      description: "Enter General Information",
    },
    {
      title: "Step 2",
      description: "Description of Step 2",
    },
    {
      title: "Step 3",
      description: "Description of Step 3",
    },
    {
      title: "Step 4",
      description: "Description of Step 4",
    },
    {
      title: "Step 5",
      description: "Description of Step 5",
    },
  ];
  const handleChangeSteps = (stepNo) => {
    if (stepNo >= 1 && stepNo <= 5) setStep(stepNo);
  };
  return (
    <>
    <div className="multi-form-content">
      <div className="progressbar-wrapper">
        <ol className="progressbar">
          {arrayProgress.map((item, index) => {
            return (
              <li key={index} className={1 ? "active" : ""}>
                <div>
                  <span
                    onClick={() => handleChangeSteps(index + 1)}
                    className={step === index + 1 ? (
                      "step-counter active"
                    ) : (
                      "step-counter")}
                  >
                    {step === index + 1 ? (
                      index + 1
                    ) : (
                      <i className="fas fa-check-circle"></i>
                    )}
                  </span>
                  <h2>{item.title}</h2>
                </div>
                <p className="text--size-small">{item.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
      </div>
    </>
  );
}
