import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Modern Infrastructure",
    desc: "Smart classrooms, advanced labs, and digital learning environments designed for future-ready education.",
    icon: "🏫",
  },
  {
    title: "Holistic Development",
    desc: "We focus on academics, sports, arts, and personality development for well-rounded growth.",
    icon: "🌱",
  },
  {
    title: "Experienced Faculty",
    desc: "Highly qualified teachers committed to nurturing every student’s potential.",
    icon: "👩‍🏫",
  },
  {
    title: "Safe & Supportive Environment",
    desc: "A secure campus that promotes confidence, creativity, and collaboration.",
    icon: "🛡️",
  },
];

const OurSchool = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative min-h-[55vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center text-white">
        <img
          src="School 1.avif"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-4">
            Our School
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            A place where learning, creativity, and growth come together.
          </p>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          About Our Institution
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Our school is dedicated to providing high-quality education that nurtures
          intellectual curiosity, creativity, and character. We believe in creating
          an environment where students feel inspired to learn, explore, and grow
          into confident individuals ready for the future.
        </p>
      </section>

      {/* IMAGE + TEXT */}
      <section className="py-20 px-6 max-w-8xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.img
          src="School 2.jpg"
          className="rounded-2xl shadow-xl h-80 w-full object-cover"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            A Campus Designed for Excellence
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our campus combines modern infrastructure with a nurturing atmosphere.
            From advanced laboratories to sports facilities, every space is designed
            to enhance learning and encourage exploration.
          </p>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow text-center"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 max-w-8xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Campus Life
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="img 1.png" className="rounded-xl h-60 w-full object-cover" />
          <img src="img 8.png" className="rounded-xl h-60 w-full object-cover" />
          <img src="img 3.png" className="rounded-xl h-60 w-full object-cover" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Join Our Learning Community
        </h2>
        <p className="text-gray-300 mb-6">
          Discover a place where students thrive academically and personally.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Apply Now
        </button>
      </section>

    </div>
  );
};

export default OurSchool;