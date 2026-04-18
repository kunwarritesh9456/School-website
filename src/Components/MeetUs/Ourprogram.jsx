import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Intellectual Movement",
    desc: "Students connect ideas across disciplines, building strong analytical and critical thinking skills.",
    image: "Grover Beth.jpg",
  },
  {
    title: "Social & Emotional Growth",
    desc: "We nurture empathy, leadership, and resilience through real-life interactions and guidance.",
    image: "Merson Michelle.jpg",
  },
  {
    title: "Physical Movement",
    desc: "Flexible learning spaces and active environments promote both mental and physical well-being.",
    image: "Toole Diana.jpg",
  },
  {
    title: "Experiential Learning",
    desc: "Hands-on experiences take students beyond classrooms into real-world environments.",
    image: "Scott Jamie.jpg",
  },
];

const programs = [
  {
    title: "Interdisciplinary Learning",
    desc: "Subjects connect together to create deeper understanding and innovation.",
  },
  {
    title: "Outdoor Education",
    desc: "Nature becomes a classroom, inspiring curiosity and discovery.",
  },
  {
    title: "Global Exposure",
    desc: "Students explore cultures and ideas beyond borders.",
  },
  {
    title: "Innovation Labs",
    desc: "Creative spaces where students solve real-world problems.",
  },
];

const Ourprogram = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center bg-linear-to-r from-black to-gray-800 text-white text-center px-6 relative">
        <img
          src="learning 5.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Program
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Education that adapts, evolves, and prepares students for the real
            world.
          </p>
        </motion.div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          A Dynamic Approach to Learning
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Learning is not confined to desks or classrooms. It flows across
          disciplines, environments, and experiences—encouraging students to
          grow, adapt, and think beyond boundaries.
        </p>
      </section>

      {/* PILLARS */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-white rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTIONS (ALTERNATING) */}
      <section className="py-30 px-6 max-w-8xl mx-auto space-y-20">
        {pillars.map((item, i) => (
          <motion.div
            key={i}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? "md:col-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="h-100 w-100 object-fit rounded-2xl"
            />
          </motion.div>
        ))}
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-8xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold">Program Highlights</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {programs.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-2xl shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-black text-white px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Set Your Learning in Motion
        </h2>
        <p className="mb-6 text-gray-300">
          Discover how our program prepares students for the future.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full">
          Explore Admissions
        </button>
      </section>
    </div>
  );
};

export default Ourprogram;
