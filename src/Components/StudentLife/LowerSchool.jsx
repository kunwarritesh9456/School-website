import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Creative Exploration",
    desc: "Students explore art, music, and imagination through engaging activities that inspire creativity.",
    image: "Student Life 1.jpg",
  },
  {
    title: "Community & Friendship",
    desc: "Strong relationships are built through collaboration, teamwork, and shared experiences.",
    image: "Student Life 2.jpg",
  },
  {
    title: "Outdoor Learning",
    desc: "Nature becomes a classroom where curiosity and discovery come alive.",
    image: "Student Life 3.jpg",
  },
];

const features = [
  "Hands-on learning experiences",
  "Play-based education approach",
  "Supportive and inclusive environment",
  "Focus on emotional growth",
  "Interactive classroom activities",
  "Safe and nurturing campus",
];

const LowerSchool = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="h-[85vh] relative flex items-center justify-center text-white">
        <img
          src="Student Life 11.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Lower School Life
          </h1>
          <p className="max-w-xl mx-auto text-lg opacity-90">
            A joyful and nurturing environment where young learners grow,
            explore, and thrive every day.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Building Strong Foundations
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our Lower School provides a vibrant and supportive environment
          where students develop confidence, curiosity, and a love for learning.
          Every experience is designed to nurture growth and joy.
        </p>
      </section>

      {/* HIGHLIGHTS (IMAGE + TEXT) */}
      <section className="px-6 max-w-7xl mx-auto space-y-24 pb-24">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={item.image}
                className="w-full h-100 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* FEATURES GRID */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-8xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold">
            What Makes It Special
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <p className="text-gray-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

     

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          A Joyful Start to Learning
        </h2>
        <p className="text-gray-300 mb-6">
          Discover how our Lower School builds confidence and curiosity.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full">
          Learn More
        </button>
      </section>

    </div>
  );
};

export default LowerSchool;