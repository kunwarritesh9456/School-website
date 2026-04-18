import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Thinking That Moves",
    desc: "Students challenge assumptions, adapt to change, and innovate across disciplines to push ideas forward.",
    img: "Teacher.jpg",
  },
  {
    title: "Purpose That Moves",
    desc: "Learning is connected to real-world challenges, helping students apply knowledge to meaningful impact.",
    img: "learning 3.jpg",
  },
  {
    title: "Connection That Moves",
    desc: "Partnerships, travel, and immersive experiences connect students to the world beyond classrooms.",
    img: "learning 4.jpg",
  },
];

const stories = [
  {
    title: "Project Week",
    desc: "Students collaborate, experiment, and design solutions—from life on Mars to wellness systems—turning ideas into reality.",
  },
  {
    title: "Nature as a Classroom",
    desc: "Outdoor learning builds confidence, curiosity, and resilience through real-world exploration.",
  },
  {
    title: "Immersive Learning",
    desc: "Students dive deep into subjects like AI, global finance, and urban development through real-world exposure.",
  },
  {
    title: "Social Innovation",
    desc: "Students build ventures that tackle real challenges—from sustainability to social justice.",
  },
];

const SignatureExperience = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <img
          src="learning 2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Signature Experience
          </h1>
          <p className="max-w-8xl mx-auto text-lg opacity-90">
            Learning that moves—designed to inspire thinking, purpose, and connection.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Learning That Moves
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our signature experience is designed to bring learning to life through
          active engagement, real-world challenges, and meaningful connections
          that prepare students for a constantly evolving world.
        </p>
      </section>

      {/* PILLARS */}
      <section className="px-6 max-w-8xl mx-auto space-y-32 pb-28">
        {pillars.map((item, i) => (
          <motion.div
            key={i}
            className={`grid md:grid-cols-2 gap-14 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={item.img}
                className="w-full h-105 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* STORY SECTION */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-8xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold">
            Learning in Action
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {stories.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE STORY */}
      <section className="py-28 px-6 max-w-8xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            From Learning to Impact
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Students don’t just learn—they apply knowledge to real-world
            challenges, collaborate with experts, and create meaningful impact
            that extends beyond the classroom.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="Gettyimages.jpg"
            className="w-full h-95 object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          Experience Learning That Moves
        </h2>
        <p className="text-gray-300 mb-6">
          Discover how our signature experience prepares students for the future.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Explore Academics
        </button>
      </section>

    </div>
  );
};

export default SignatureExperience;