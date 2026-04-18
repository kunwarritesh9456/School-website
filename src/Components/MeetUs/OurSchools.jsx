import React from "react";
import { motion } from "framer-motion";

const schools = [
  {
    name: "Country Day School",
    grades: "Pre-K to Grade 5",
    desc: "A nurturing environment where curiosity and creativity spark a lifelong love for learning.",
    image: "Aubrecht.jpg",
  },
  {
    name: "Junior School",
    grades: "Pre-K to Grade 5",
    desc: "Students explore, discover, and build strong academic foundations through hands-on experiences.",
    image: "Abraham Culea.jpg",
  },
  {
    name: "Middle School",
    grades: "Grades 6–8",
    desc: "A transformative stage focused on independence, collaboration, and critical thinking.",
    image: "Scott Jamie.jpg",
  },
  {
    name: "Senior School",
    grades: "Grades 9–12",
    desc: "A college-preparatory experience where students grow into confident leaders ready for the future.",
    image: "Baranowski.jpg",
  },
];

const OurSchools = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center bg-linear-to-r from-gray-900 to-gray-700 text-white text-center px-6">
        <img
          src="School.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Schools</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Four unique learning environments designed to support every stage of
            student growth.
          </p>
        </motion.div>
      </section>


      {/* DETAILED SECTIONS */}
      <section className="py-20 px-7 max-w-7xl mx-auto space-y-25">
        {schools.map((school, i) => (
          <motion.div
            key={i}
            className={`grid md:grid-cols-2 gap-5 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">{school.name}</h3>
              <p className="text-gray-500 mb-2">{school.grades}</p>
              <p className="text-gray-600 leading-relaxed">{school.desc}</p>

              <button className="mt-4 px-6 py-2 bg-black text-white rounded-full">
                Learn More
              </button>
            </div>

            <div className="h-100 w-100 rounded-2xl overflow-hidden">
              <img
                src={school.image}
                alt={school.name}
                className="w-100 h-100 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Find the Right School for Your Journey
        </h2>
        <p className="text-gray-300 mb-6">
          Explore how each school supports growth, curiosity, and leadership.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full">
          Explore Admissions
        </button>
      </section>
    </div>
  );
};

export default OurSchools;
