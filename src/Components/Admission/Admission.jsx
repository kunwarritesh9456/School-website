import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Admissions = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    parentName: "",
    phone: "",
    address: "",
  });

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("admissionData");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("admissionData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.email) newErrors.email = "Email required";
      if (!formData.password) newErrors.password = "Password required";
    }

    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = "First name required";
      if (!formData.lastName) newErrors.lastName = "Last name required";
    }

    if (step === 3) {
      if (!formData.parentName) newErrors.parentName = "Parent name required";
      if (!formData.phone) newErrors.phone = "Phone required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-linear-to-r from-gray-100 to-gray-200 flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-10"
      >

        {/* Progress Bar */}
        <div className="flex justify-between mb-8">
          {["Account", "Student", "Parent", "Review"].map((label, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`w-9 h-9 mx-auto rounded-full flex items-center justify-center text-white font-bold transition ${
                  step >= i + 1 ? "bg-black" : "bg-gray-300"
                }`}
              >
                {i + 1}
              </div>
              <p className="text-xs mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* STEP CONTENT */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold mb-4">Create Account</h2>

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input"
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input"
              />
              {errors.password && <p className="error">{errors.password}</p>}

              <button onClick={nextStep} className="btn mt-4 w-full">
                Next
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2 className="text-xl font-bold mb-4">Student Info</h2>

              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="input"
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}

              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="input"
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="input"
              />

              <div className="flex justify-between mt-4">
                <button onClick={prevStep} className="btn-gray">Back</button>
                <button onClick={nextStep} className="btn">Next</button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h2 className="text-xl font-bold mb-4">Parent Info</h2>

              <input
                name="parentName"
                placeholder="Parent Name"
                value={formData.parentName}
                onChange={handleChange}
                className="input"
              />
              {errors.parentName && <p className="error">{errors.parentName}</p>}

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="input"
              />

              <div className="flex justify-between mt-4">
                <button onClick={prevStep} className="btn-gray">Back</button>
                <button onClick={nextStep} className="btn">Next</button>
              </div>
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <h2 className="text-xl font-bold mb-4">Review</h2>

              <div className="text-sm space-y-2">
                <p><b>Email:</b> {formData.email}</p>
                <p><b>Name:</b> {formData.firstName} {formData.lastName}</p>
                <p><b>DOB:</b> {formData.dob}</p>
                <p><b>Parent:</b> {formData.parentName}</p>
                <p><b>Phone:</b> {formData.phone}</p>
                <p><b>Address:</b> {formData.address}</p>
              </div>

              <div className="flex justify-between mt-6">
                <button onClick={prevStep} className="btn-gray">Back</button>
                <button
                  onClick={() => {
                    alert("Application Submitted 🎉");
                    localStorage.removeItem("admissionData");
                  }}
                  className="bg-green-600 text-white px-5 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </>
          )}

        </motion.div>
      </motion.div>

      {/* Styles */}
      <style>
        {`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px;
          margin-top: 10px;
          border-radius: 6px;
        }
        .btn {
          background: black;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
        }
        .btn-gray {
          background: #ddd;
          padding: 10px 20px;
          border-radius: 6px;
        }
        .error {
          color: red;
          font-size: 12px;
        }
        `}
      </style>

    </div>
  );
};

export default Admissions;