import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Stimulating & Fulfilling",
    desc: "Students are constantly engaged through curiosity-driven learning, exploration, and real-world challenges.",
    img: "learning 2.jpg",
  },
  {
    title: "Joyful & Intentional",
    desc: "Learning is a journey—not a race—where students explore ideas through inquiry, movement, and purpose.",
    img: "learning 4.jpg",
  },
  {
    title: "Inspiring & Purposeful",
    desc: "Students take ownership of their learning, challenge ideas, and develop skills to follow their passions.",
    img: "learning 3.jpg",
  },
  {
    title: "Inclusive & Growth-Oriented",
    desc: "A supportive environment that balances challenge and care, helping every student thrive.",
    img: "learning 5.jpg",
  },
];

const coreSections = [
  {
    title: "How We Learn",
    desc: "Education goes beyond textbooks. Students think across disciplines, blending intellectual rigor with emotional intelligence to become adaptive and resilient learners.",
    img: "learning 5.jpg",
  },
  {
    title: "How We Move",
    desc: "Movement is essential. Physical activity builds confidence, clarity, and emotional balance—fueling better learning and growth.",
  },
  {
    title: "How We Grow",
    desc: "Character and intellect go hand in hand. We nurture leadership, resilience, and empathy alongside academic excellence.",
  },
  {
    title: "Signature Experience",
    desc: "Learning That Moves is embedded across every grade, creating a journey that sparks curiosity and prepares students for the future.",
  },
];

const LearningThatMoves = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[95vh] flex items-center justify-center text-white">
        <img
          src="learning 1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Learning That Moves
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Education that is expansive, active, and designed for the real world.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Education That Goes Beyond the Classroom
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Learning is not confined to desks. Students engage through real-world
          experiences—debates, outdoor exploration, collaboration, and creative
          problem-solving—building confidence and character along the way.
        </p>
      </section>

      {/* PILLARS (ALTERNATING) */}
      <section className="px-6 max-w-8xl mx-auto space-y-32 pb-28">
        {pillars.map((item, i) => (
          <motion.div
            key={i}
            className={`grid md:grid-cols-2 gap-14 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

      {/* CORE GRID */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
          {coreSections.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-md"
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

      {/* FEATURE SECTION */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Learning in Action
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Students learn by doing—whether conducting experiments, building
            projects, or exploring nature. This hands-on approach develops
            curiosity, confidence, and real-world skills.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="learning 7.png"
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
          Discover how this approach prepares students for a changing world.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Explore Academics
        </button>
      </section>

    </div>
  );
};

export default LearningThatMoves;