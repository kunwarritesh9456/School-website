import { motion } from "framer-motion";

const steps = [
  {
    title: "Submit Application",
    desc: "Complete the online application with required documents.",
  },
  {
    title: "Entrance Assessment",
    desc: "Students may be required to take an academic assessment.",
  },
  {
    title: "Interview",
    desc: "A personal interaction to understand the student better.",
  },
  {
    title: "Final Decision",
    desc: "Admission confirmation and enrollment process.",
  },
];

const MeetUs = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="Outcomes 3.jpg"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Admissions
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Begin your journey with a community that inspires excellence,
            leadership, and lifelong learning.
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Apply Now
          </button>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Your Future Starts Here
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our admissions process is designed to identify passionate learners
          ready to grow academically and personally in a supportive environment.
        </p>
      </section>

      {/* STEPS */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Admission Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <div className="text-4xl font-bold text-black mb-4">
                0{i + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="learning 2.jpg"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our School?
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Academic Excellence</li>
              <li>✔ World-Class Faculty</li>
              <li>✔ Holistic Development</li>
              <li>✔ Global Exposure</li>
              <li>✔ Modern Infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Join Us?
        </h2>

        <p className="text-gray-300 mb-8">
          Take the first step toward a brighter future today.
        </p>

        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
          Start Application
        </button>
      </section>

    </div>
  );
};

export default MeetUs;