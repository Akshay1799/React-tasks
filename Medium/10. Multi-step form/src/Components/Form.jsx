import React, { useState } from "react";

function Form() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepContent = [
    "Step 1: Enter your name",
    "Step 2: Enter your email",
    "Step 3: Confirm your details",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <div className="bg-white border border-gray-200 rounded-xl p-8 w-[400px] flex flex-col items-center gap-6 transition-all duration-300">
        
        <p className="text-gray-600 font-medium">Step {step} of {totalSteps}</p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-2">{stepContent[step - 1]}</h2>

        <div className="text-center text-gray-600">
          {step === 1 && <p>Please enter your name in the form below.</p>}
          {step === 2 && <p>Now, please provide your email address.</p>}
          {step === 3 && <p>Review your information before submitting.</p>}
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={prevStep} disabled={step === 1}className="hover:cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700 font-medium disabled:opacity-50">Previous</button>
          <button onClick={nextStep} disabled={step === totalSteps} className="hover:cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
