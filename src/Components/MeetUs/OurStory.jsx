import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "8:1", label: "Student-Faculty Ratio" },
  { number: "1,260+", label: "Students" },
  { number: "30+", label: "Languages Spoken" },
  { number: "60+", label: "Athletic Teams" },
];

const features = [
  {
    title: "Relational Teaching",
    desc: "We build meaningful relationships between students and teachers, creating a supportive environment for growth and success.",
    img: "Screenshot 2026-04-08 170950.png",
  },
  {
    title: "Balanced Worldview",
    desc: "Students engage with diverse perspectives, developing critical thinking and global awareness.",
    img: "ABC.jpg",
  },
  {
    title: "Real-World Learning",
    desc: "Hands-on experiences connect classroom knowledge with real-life challenges and innovation.",
    img: "learn 4.jpg",
  },
];

const OurStory = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="h-screen flex items-center justify-center bg-linear-to-r from-gray-900 to-gray-700 text-white text-center px-6">
        <img
          src="OurProgram_ExperientialMovementFlipCard.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            We create the next generation of leaders through purpose-driven
            education, strong values, and real-world learning.
          </p>
        </motion.div>
      </section>

      {/* INTRO / MISSION */}
      <section className="py-20 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-8xl mx-auto">
          We challenge students to think expansively, act ethically, and lead
          responsibly. Our mission is to shape individuals who will make a
          meaningful impact in the world.
        </p>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-8xl mx-auto text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-3xl font-bold text-gray-900">
                {item.number}
              </h3>
              <p className="text-gray-500 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-8xl mx-auto">
            Built on honesty, responsibility, respect, and kindness, our values
            guide every decision and interaction within our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {["Honesty", "Responsibility", "Respect & Kindness"].map(
            (value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 rounded-2xl shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{value}</h3>
                <p className="text-gray-600">
                  We emphasize {value.toLowerCase()} in every aspect of student
                  life.
                </p>
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* FEATURE SECTIONS */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
              <div className="h-64 rounded-2xl overflow-hidden">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-100 h-100 object-fit"
                />
              </div>{" "}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurStory;
