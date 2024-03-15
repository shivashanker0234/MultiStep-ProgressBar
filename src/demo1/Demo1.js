import React, { useState } from 'react';
import './MultiStepForm.css'; // Import CSS file for styling

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here, you can send formData to backend or perform any other action
    console.log(formData);
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="step-container">
          <div className={`step ${step === 1 ? 'active' : ''}`}>1</div>
          <div className={`circle ${step >= 1 ? 'active' : ''}`}></div>
        </div>
        <div className="step-container">
          <div className={`step ${step === 2 ? 'active' : ''}`}>2</div>
          <div className={`circle ${step >= 2 ? 'active' : ''}`}></div>
        </div>
        <div className="step-container">
          <div className={`step ${step === 3 ? 'active' : ''}`}>3</div>
          <div className={`circle ${step >= 3 ? 'active' : ''}`}></div>
        </div>
        <div className="step-container">
          <div className={`step ${step === 4 ? 'active' : ''}`}>4</div>
          <div className={`circle ${step >= 4 ? 'active' : ''}`}></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2>Step 1</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <button onClick={() => setStep(step + 1)}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Step 2</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <button onClick={() => setStep(step + 1)}>Next</button>
            <button onClick={() => setStep(step - 1)}>Back</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Step 3</h2>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button onClick={() => setStep(step + 1)}>Next</button>
            <button onClick={() => setStep(step - 1)}>Back</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Step 4</h2>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <button onClick={() => setStep(step - 1)}>Back</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
