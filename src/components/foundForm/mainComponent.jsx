import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FoundData from "./Form1_DataFound";
import ProgressMultiStepsBar from "./ProgressMultiStepsBar";

export default function FoundForm() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit } = useForm();
  const OnSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h3 className="text-center mt-4 mb-4">Make a finding announcement</h3>
      <div className="container">
      <ProgressMultiStepsBar step={step} setStep={setStep} />
    <form onSubmit={handleSubmit(OnSubmit)} className="multi-step-finding-form">
        {/* Form No. 1 */}
        <FoundData />
      <input type="submit" />
    </form>
    </div>
    </>
  );
}
