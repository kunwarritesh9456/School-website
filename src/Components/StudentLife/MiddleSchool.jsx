import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "A Vibrant Student Experience",
    desc: "Life beyond the classroom is where students discover their passions, build friendships, and grow into confident individuals.",
    image: "Student Life 1.jpg",
  },
  {
    title: "Clubs & Activities",
    desc: "From arts to leadership, students engage in diverse clubs that nurture creativity and collaboration.",
    image: "Student Life 22.jpg",
  },
  {
    title: "Athletics & Wellness",
    desc: "Physical activity and well-being are central to student life, encouraging teamwork and resilience.",
    image: "Student Life 23.jpg",
  },
  {
    title: "Events & Traditions",
    desc: "Celebrations, festivals, and traditions create lifelong memories and a strong sense of community.",
    image: "Student Life 24.jpg",
  },
];

const MiddleSchool = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="h-[90vh] flex items-center justify-center relative text-white">
        <img
          src="Why us 3.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Student Life
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Discover a dynamic environment where learning, friendships, and experiences come together.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          More Than Just School
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Our students thrive in an environment that encourages exploration,
          creativity, and personal growth. Every day brings new opportunities
          to connect, lead, and discover.
        </p>
      </section>

      {/* FEATURES (ALTERNATING SECTIONS) */}
      <section className="px-6 max-w-7xl mx-auto space-y-32 pb-24">
        {sections.map((item, i) => (
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
              <p className="text-gray-600 leading-relaxed text-lg">
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

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          Experience Student Life
        </h2>
        <p className="mb-6 text-gray-300">
          Join a community where every student belongs and thrives.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full">
          Explore More
        </button>
      </section>

    </div>
  );
};

export default MiddleSchool;