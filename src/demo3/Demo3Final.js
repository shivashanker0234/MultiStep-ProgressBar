import React, { useState } from 'react';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
    step4: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const progressWidth = `${(step - 1) * 33}%`;

  return (
    <div>
      <div className="step-titles">
        <div className={`step-title ${step >= 1 ? 'active' : ''}`}>Step 1</div>
        <div className={`step-title ${step >= 2 ? 'active' : ''}`}>Step 2</div>
        <div className={`step-title ${step >= 3 ? 'active' : ''}`}>Step 3</div>
        <div className={`step-title ${step >= 4 ? 'active' : ''}`}>Step 4</div>
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: progressWidth }}></div>
        <div className="circles">
          <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
          <div className={`circle ${step >= 4 ? 'active' : ''}`}>4</div>
        </div>
      </div>

      {step === 1 && (
        <div>
          <input type="text" name="step1" value={formData.step1} onChange={handleChange} />
        </div>
      )}
      {step === 2 && (
        <div>
          <input type="text" name="step2" value={formData.step2} onChange={handleChange} />
        </div>
      )}
      {step === 3 && (
        <div>
          <input type="text" name="step3" value={formData.step3} onChange={handleChange} />
        </div>
      )}
      {step === 4 && (
        <div>
          <input type="text" name="step4" value={formData.step4} onChange={handleChange} />
        </div>
      )}

      <div className="button-container">
        {step > 1 && <button onClick={handlePrev}>Previous</button>}
        {step < 4 ? <button onClick={handleNext}>Next</button> : <button>Submit</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
