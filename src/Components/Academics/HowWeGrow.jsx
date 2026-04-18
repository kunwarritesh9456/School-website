import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Character Development",
    desc: "Students build integrity, empathy, and responsibility—developing values that guide their decisions in life.",
    img: "Image 2.jpg",
  },
  {
    title: "Leadership Skills",
    desc: "Opportunities across academics, athletics, and activities help students grow into confident leaders.",
    img: "ABC.jpg",
  },
  {
    title: "Emotional Intelligence",
    desc: "Students learn self-awareness, resilience, and how to manage challenges with confidence.",
    img: "AAA.jpg",
  },
  {
    title: "Purpose & Identity",
    desc: "We help students discover who they are, what they value, and how they want to impact the world.",
    img: "OurProgram_EmotionalMovementFlipCard.jpg",
  },
];

const journey = [
  {
    step: "Discover",
    desc: "Students explore their strengths, interests, and passions.",
  },
  {
    step: "Develop",
    desc: "They build skills, confidence, and character through guided experiences.",
  },
  {
    step: "Lead",
    desc: "Students take initiative and lead with integrity and purpose.",
  },
  {
    step: "Impact",
    desc: "They apply their growth to make meaningful contributions to society.",
  },
];

const HowWeGrow = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[95vh] flex items-center justify-center text-white">
        <img
          src="Our.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            How We Grow
          </h1>
          <p className="max-w-8xl mx-auto text-lg opacity-90">
            Growth that shapes character, purpose, and leadership.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Growth Beyond the Classroom
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Education is about more than knowledge—it’s about becoming. We guide
          students as they develop character, confidence, and a sense of purpose
          that prepares them for life.
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

      {/* JOURNEY TIMELINE */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-8xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold">
            The Growth Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.step}
              </h3>
              <p className="text-gray-600 text-sm">
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
            Building Future Leaders
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Through mentorship, leadership opportunities, and real-world
            experiences, students grow into individuals ready to lead with
            confidence, empathy, and purpose.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="Grow 1.jpg"
            className="w-full h-95 object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          Grow Into Who You’re Meant to Be
        </h2>
        <p className="text-gray-300 mb-6">
          Discover how we support every student’s journey of growth.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Explore Student Life
        </button>
      </section>

    </div>
  );
};

export default HowWeGrow;