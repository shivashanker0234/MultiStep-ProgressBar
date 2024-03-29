import React, { useState } from 'react';
import './MultiStepForm.css';
import {
  FaAddressBook,
  FaBuilding,
  FaCertificate,
  FaCity,
  FaCode,
  FaCodeBranch,
  FaIdBadge,
  FaIdCard,
  FaIdCardAlt,
  FaMailBulk,
  FaMobile,
  FaPassport,
  FaSortNumericDownAlt,
  FaUser,
} from "react-icons/fa";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      maritalStatus: "",
      gender: "",
      dependents: "",
    },
    step2: {
      mobileNumber: "",
      email: "",
      education: "",
      workStatus: "",
      applicantIncome: "",
      coapplicantIncome: "",
    },
    step3: {
      loanAmount: "",
      loanAmountPurpose: "",
      loanAmountTerm: "",
      // creditHistory:'',
      // propertyArea:'',
      // loanStatus:'',
      address: "",
      pincode: "",
      // district: "",
      state: "",
    },
    step4: {
      aadharID: "",
      panID: "",
      drivingLicence: "",
      incomeID: "",
      bankStatement: "",
    },
  });
  function PreviewStep({ formData }) {
    return (
      <div className="loan-application-container">
        <h2>Preview</h2>
        <div>
          <strong>Personal Information:</strong>
          <p>First Name: {formData.step1.firstName}</p>
          <p>Last Name: {formData.step1.lastName}</p>
          <p>Date of Birth: {formData.step1.dateOfBirth}</p>
          <p>Marital Status: {formData.step1.maritalStatus}</p>
          <p>Gender: {formData.step1.gender}</p>
          <p>Dependents: {formData.step1.dependents}</p>
        </div>
        <div>
          <strong>Contact Information:</strong>
          <p>Mobile Number: {formData.step2.mobileNumber}</p>
          <p>Email Address: {formData.step2.email}</p>
          <p>Highest Education: {formData.step2.education}</p>
          <p>Working Status: {formData.step2.workStatus}</p>
          <p>Applicant Income: {formData.step2.applicantIncome}</p>
          <p>Family Income: {formData.step2.coapplicantIncome}</p>
        </div>
        <div>
          <strong>Loan Information:</strong>
          <p>Loan Amount: {formData.step3.loanAmount}</p>
          <p>Loan Purpose: {formData.step3.loanAmountPurpose}</p>
          <p>Loan Amount Term: {formData.step3.loanAmountTerm}</p>
          <p>Address: {formData.step3.address}</p>
          <p>Pin Code: {formData.step3.pincode}</p>
          <p>State: {formData.step3.state}</p>
        </div>
        <div>
          <strong>Document Upload:</strong>
          <p>Aadhar ID: {formData.step4.aadharID.name}</p>
          <p>PAN ID: {formData.step4.panID.name}</p>
          <p>Driving Licence: {formData.step4.drivingLicence.name}</p>
          <p>Income ID: {formData.step4.incomeID.name}</p>
          <p>Bank Statement: {formData.step4.bankStatement.name}</p>
        </div>
      </div>
    );
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };
  const handleStepChange = (step, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const progressWidth = `${(step - 1) * (100 / 4)}%`;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="step-titles">
          <div className={`step-title ${step >= 1 ? 'active' : ''}`}>Step 1</div>
          <div className={`step-title ${step >= 2 ? 'active' : ''}`}>Step 2</div>
          <div className={`step-title ${step >= 3 ? 'active' : ''}`}>Step 3</div>
          <div className={`step-title ${step >= 4 ? 'active' : ''}`}>Step 4</div>
          <div className={`step-title ${step >= 5 ? 'active' : ''}`}>Step 5</div>
        </div>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: progressWidth }}></div>
          <div className="circles">
            {[1, 2, 3, 4, 5].map((circleStep) => (
              <div key={circleStep} className={`circle ${step >= circleStep ? 'active' : ''}`}>{circleStep}</div>
            ))}
          </div>
        </div>

        {step === 1 && (
         <div className="loan-application-container">
         {/* <div className="input-row"> */}
         <label className="loan-application-label">First Name: </label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="text"
             // value={formDataStep1.firstName}
             value={formData.step1.firstName}
             // required
             // onChange={(e) => handleStep1Change("firstName", e.target.value)}
             onChange={(e) =>
               handleStepChange("step1", "firstName", e.target.value)
             }
           />
           <span className="loan-application-form-span">
             <FaUser style={{ marginTop: "8px" }} />
           </span>
         </div>
         <label className="loan-application-label">Last Name: </label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="text"
             value={formData.step1.lastName}
             // onChange={(e) => handleStep1Change("lastName", e.target.value)}
             onChange={(e) =>
               handleStepChange("step1", "lastName", e.target.value)
             }
           />{" "}
           <span className="loan-application-form-span">
             <FaUser style={{ marginTop: "8px" }} />
           </span>
         </div>
        
         <label className="loan-application-label">Date of Birth:</label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="date"
             value={formData.step1.dateOfBirth}
             // onChange={(e) => handleStep1Change("email", e.target.value)}
             onChange={(e) =>
               handleStepChange("step1", "dateOfBirth", e.target.value)
             }
             max={new Date().toISOString().split("T")[0]}
           />
           <span className="loan-application-form-span">
             <FaMailBulk style={{ marginTop: "8px" }} />
           </span>
         </div>
         <label className="loan-application-label">Marital Status:</label>
         <div
           className="loan-application-form"
           style={{ marginTop: "10px" }}
         >
           <input
             type="radio"
             id="married"
             name="marital_status"
             value="married"
             onChange={(e) =>
               handleStepChange("step1", "maritalStatus", e.target.value)
             }
           />
           <label for="married" style={{ marginRight: "15px" }}>
             Married
           </label>
           <br />
           <input
             type="radio"
             id="unmarried"
             name="marital_status"
             value="unmarried"
             onChange={(e) =>
               handleStepChange("step1", "maritalStatus", e.target.value)
             }
           />
           <label for="unmarried">Unmarried</label>
          
         </div>
         <label className="loan-application-label">Gender:</label>
         <div
           className="loan-application-form"
           style={{ marginTop: "10px" }}
         >
           <input
             type="radio"
             id="male"
             value="male"
             onChange={(e) =>
               handleStepChange("step1", "gender", e.target.value)
             }
           />
           <label for="married" style={{ marginRight: "15px" }}>
             Male
           </label>
           <br />
           <input
             type="radio"
             id="female"
             value="female"
             onChange={(e) =>
               handleStepChange("step1", "gender", e.target.value)
             }
           />
           <label for="unmarried">Female</label>
         </div>
        
         <label className="loan-application-label">Dependents:</label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="text"
             value={formData.step1.dependents}
             // onChange={(e) =>
             // handleStep1Change("mobileNumber", e.target.value)}
             onChange={(e) =>
               handleStepChange("step1", "dependents", e.target.value)
             }
           />
           <span className="loan-application-form-span">
             <FaMobile style={{ marginTop: "8px" }} />
           </span>
         </div>
         <div className="nav-buttons-footer">
           <button
             className="loan-application-backButton"
             onClick={() => setStep(step - 1)}
           >
             Back
           </button>
           <button
             className="loan-application-nextButton"
             onClick={() => setStep(step + 1)}
           >
             Next
           </button>
         </div>
         {/* <button onClick={()=>handleNext()}>Next Button</button> */}
       </div>
        
        )}
        {step === 2 && (
         <div className="loan-application-container">
         {/* <div className="input-row"> */}
         <label className="loan-application-label">Mobile Number: </label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="text"
             // value={formDataStep2.aadharID}
             value={formData.step2.mobileNumber}
             // onChange={(e) => handleStep2Change("aadharID", e.target.value)}
             onChange={(e) =>
               handleStepChange("step2", "mobileNumber", e.target.value)
             }
           />{" "}
           <span className="loan-application-form-span">
             <FaIdCard style={{ marginTop: "8px" }} />
           </span>
         </div>
         <label className="loan-application-label">Email Address: </label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="text"
             // value={formDataStep2.panID}
             value={formData.step2.email}
             // onChange={(e) => handleStep2Change("panID", e.target.value)}
             onChange={(e) =>
               handleStepChange("step2", "email", e.target.value)
             }
           />{" "}
           <span className="loan-application-form-span">
             <FaIdCardAlt style={{ marginTop: "8px" }} />
           </span>
         </div>
         {/* </div> */}
         {/* <div className="input-row"> */}
         <label className="loan-application-label">
           Highest Education:{" "}
         </label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="email"
             // value={formDataStep2.incomeID}
             value={formData.step2.education}
             // onChange={(e) => handleStep2Change("incomeID", e.target.value)}
             onChange={(e) =>
               handleStepChange("step2", "education", e.target.value)
             }
           />{" "}
           <span className="loan-application-form-span">
             <FaCertificate style={{ marginTop: "8px" }} />
           </span>
         </div>
         <label className="loan-application-label">Working Status: </label>
         <div className="loan-application-form">
           <select
             className="loan-application-input"
             type="text"
             // value={formDataStep2.voterID}
             value={formData.step2.workStatus}
             // onChange={(e) => handleStep2Change("voterID", e.target.value)}
             onChange={(e) =>
               handleStepChange("step2", "workStatus", e.target.value)
             }
           >
             <option value="working"> Working </option>
             <option value="notWorking">Not Working</option>
           </select>
           <span className="loan-application-form-span">
             <FaIdBadge style={{ marginTop: "8px" }} />
           </span>
         </div>
         <label className="loan-application-label">Applicant Income: </label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="text"
             // value={formDataStep2.voterID}
             value={formData.step2.applicantIncome}
             // onChange={(e) => handleStep2Change("voterID", e.target.value)}
             onChange={(e) =>
               handleStepChange("step2", "applicantIncome", e.target.value)
             }
           />
           <span className="loan-application-form-span">
             <FaIdBadge style={{ marginTop: "8px" }} />
           </span>
         </div>
         <label className="loan-application-label">Family Income: </label>
         <div className="loan-application-form">
           <input
             className="loan-application-input"
             type="text"
             // value={formDataStep2.voterID}
             value={formData.step2.coapplicantIncome}
             // onChange={(e) => handleStep2Change("voterID", e.target.value)}
             onChange={(e) =>
               handleStepChange("step2", "coapplicantIncome", e.target.value)
             }
           />
           <span className="loan-application-form-span">
             <FaIdBadge style={{ marginTop: "8px" }} />
           </span>
         </div>
         {/* </div> */}
         <div className="nav-buttons-footer">
           <button
             className="loan-application-backButton"
             onClick={() => setStep(step - 1)}
           >
             Back
           </button>
           <button
             className="loan-application-nextButton"
             onClick={() => setStep(step + 1)}
           >
             Next
           </button>
         </div>
       </div>
        )}
        {step === 3 && (
          <div className="loan-application-container">
          {/* <div className="input-row"> */}
          <label className="loan-application-label">Loan Amount : </label>
          <div className="loan-application-form">
            <input
              className="loan-application-input"
              type="text"
              // value={formDataStep3.address}
              value={formData.step3.loanAmount}
              // onChange={(e) => handleStep3Change("address", e.target.value)}
              onChange={(e) =>
                handleStepChange("step3", "loanAmount", e.target.value)
              }
            />
            <span className="loan-application-form-span">
              <FaAddressBook style={{ marginTop: "8px" }} />
            </span>
          </div>
          <label className="loan-application-label">Loan Purpose : </label>
          <div className="loan-application-form">
            <input
              className="loan-application-input"
              type="text"
              // value={formDataStep3.state}
              value={formData.step3.loanAmountPurpose}
              // onChange={(e) => handleStep3Change("state", e.target.value)}
              onChange={(e) =>
                handleStepChange("step3", "loanAmountPurpose", e.target.value)
              }
            />{" "}
            <span className="loan-application-form-span">
              <FaBuilding style={{ marginTop: "8px" }} />
            </span>
          </div>
          <label className="loan-application-label">
            Loan Amount Term :{" "}
          </label>
          <div className="loan-application-form">
            <input
              className="loan-application-input"
              type="text"
              // value={formDataStep3.pincode}
              value={formData.step3.loanAmountTerm}
              // onChange={(e) => handleStep3Change("pincode", e.target.value)}
              onChange={(e) =>
                handleStepChange("step3", "loanAmountTerm", e.target.value)
              }
            />
            <span className="loan-application-form-span">
              <FaSortNumericDownAlt style={{ marginTop: "8px" }} />
            </span>
          </div>
          {/* </div> */}
          {/* <div className="input-row"> */}
          <label className="loan-application-label">Address : </label>
          <div className="loan-application-form">
            <input
              className="loan-application-input"
              type="email"
              // value={formDataStep3.district}
              value={formData.step3.address}
              // onChange={(e) => handleStep3Change("district", e.target.value)}
              onChange={(e) =>
                handleStepChange("step3", "address", e.target.value)
              }
            />{" "}
            <span className="loan-application-form-span">
              <FaCity style={{ marginTop: "8px" }} />
            </span>
          </div>

          <label className="loan-application-label">Pin Code : </label>
          <div className="loan-application-form">
            <input
              className="loan-application-input"
              type="text"
              // value={formDataStep3.state}
              value={formData.step3.pincode}
              // onChange={(e) => handleStep3Change("state", e.target.value)}
              onChange={(e) =>
                handleStepChange("step3", "pincode", e.target.value)
              }
            />{" "}
            <span className="loan-application-form-span">
              <FaBuilding style={{ marginTop: "8px" }} />
            </span>
          </div>
          <label className="loan-application-label">State : </label>
          <div className="loan-application-form">
            <input
              className="loan-application-input"
              type="text"
              // value={formDataStep3.state}
              value={formData.step3.state}
              // onChange={(e) => handleStep3Change("state", e.target.value)}
              onChange={(e) =>
                handleStepChange("step3", "state", e.target.value)
              }
            />{" "}
            <span className="loan-application-form-span">
              <FaBuilding style={{ marginTop: "8px" }} />
            </span>
          </div>
          {/* </div> */}
          <div className="nav-buttons-footer">
            <button
              className="loan-application-backButton"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
            <button
              className="loan-application-nextButton"
              onClick={() => setStep(step + 1)}
            >
              Next
            </button>
          </div>
        </div>
        )}
        {step === 4 && (
          <div className="loan-application-container">
          <div className="loan-application-form">
            <label className="loan-application-label">
              Upload Aadhar card:
            </label>
            <input
              className="loan-application-upload-input"
              type="file"
              onChange={(e) =>
                handleStepChange("step4", "aadharID", e.target.files[0])
              }
            />
          </div>
          <div className="loan-application-form">
            <label className="loan-application-label">
              Upload Pan card :
            </label>

            <input
              className="loan-application-upload-input"
              type="file"
              onChange={(e) =>
                handleStepChange("step4", "panID}", e.target.files[0])
              }
            />
          </div>
          <div className="loan-application-form">
            <label className="loan-application-label">
              Upload Driving Licence:{"           "}
            </label>

            <input
              className="loan-application-upload-input"
              type="file"
              onChange={(e) =>
                handleStepChange("step4", "drivingLicence", e.target.files[0])
              }
            />
          </div>
          <div className="loan-application-form">
            <label className="loan-application-label">
              {" "}
              Upload Income Id :{" "}
            </label>

            <input
              className="loan-application-upload-input"
              type="file"
              onChange={(e) =>
                handleStepChange("step4", "incomeID", e.target.files[0])
              }
            />
          </div>
          <div className="loan-application-form">
            <label className="loan-application-label">
              Upload Bank Statement :{" "}
            </label>

            <input
              // className="loan-application-input"
              type="file"
              onChange={(e) =>
                handleStepChange(
                  "step4",
                  "bankStatementFile",
                  e.target.files[0]
                )
              }
            />
          </div>
          <div className="nav-buttons-footer">
            <button
              className="loan-application-backButton"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
            <button
              className="loan-application-nextButton"
              onClick={() => setStep(step + 1)}
            >
              Preview
            </button>
          </div>
        </div>
        )}
        {step === 5 && (
           <div className="preview-step">
           <PreviewStep formData={formData} />
           <div className="nav-buttons-footer" style={{marginLeft:'150px', marginBottom:'50px'}}>
             <button
               className="loan-application-backButton"
               onClick={() => setStep(step - 1)}
             >
               Back
             </button>
             <button 
               className="loan-application-nextButton"
               onClick={() => handleSubmit}
             >
              Submit
             </button>
           </div>
         </div>
        )}

        {/* <div className="button-container">
          {step > 1 && <button type="button" onClick={handlePrev}>Previous</button>}
          {step < 5 ?( <button type="button" onClick={handleNext}>Next</button>) : (<button type="submit" >Submit</button>)}
        </div> */}
      </div>
    </form>
  );
};

export default MultiStepForm;
