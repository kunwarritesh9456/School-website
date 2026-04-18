import { useState } from "react";
import { motion } from "framer-motion";

const ApplyNow = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    studentName: "",
    dob: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">

      {/* HERO */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Apply Now</h1>
        <p className="mt-2 opacity-90">
          Start your child’s admission journey with us
        </p>
      </div>

      {/* STEP PROGRESS */}
      <div className="flex justify-between mb-8">
        {["Student Info", "Parent Info", "Review"].map((label, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`w-10 h-10 mx-auto flex items-center justify-center rounded-full ${
                step >= index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <p className="text-sm mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* FORM CARD */}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-6 md:p-10 rounded-2xl shadow-lg max-w-7xl mx-auto"
      >

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Student Information
            </h2>

            <input
              type="text"
              name="studentName"
              placeholder="Student Name"
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-md"
            />

            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-md"
            />

            <input
              type="text"
              name="grade"
              placeholder="Applying Grade"
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-md"
            />

            <button
              onClick={next}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Parent Information
            </h2>

            <input
              type="text"
              name="parentName"
              placeholder="Parent Name"
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-md"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-md"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-md"
            />

            <div className="flex justify-between">
              <button
                onClick={back}
                className="px-6 py-3 bg-gray-300 rounded-lg"
              >
                Back
              </button>

              <button
                onClick={next}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Review Details</h2>

            <div className="space-y-2 text-gray-700">
              <p><b>Student:</b> {form.studentName}</p>
              <p><b>DOB:</b> {form.dob}</p>
              <p><b>Grade:</b> {form.grade}</p>
              <p><b>Parent:</b> {form.parentName}</p>
              <p><b>Email:</b> {form.email}</p>
              <p><b>Phone:</b> {form.phone}</p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={back}
                className="px-6 py-3 bg-gray-300 rounded-lg"
              >
                Back
              </button>

              <button
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500"
                onClick={() => alert("Application Submitted 🎉")}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ApplyNow;