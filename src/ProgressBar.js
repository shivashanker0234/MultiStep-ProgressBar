import React from 'react';
import './MultiStepForm.css'; // CSS file for styling

const ProgressBar = ({ currentStep }) => {
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`step ${index <= currentStep ? 'completed' : ''}`}>
            <div className="step-circle">{index + 1}</div>
            <div className="step-label">{step}</div>
          </div>
          {index < steps.length - 1 && <div className="bar-line" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
