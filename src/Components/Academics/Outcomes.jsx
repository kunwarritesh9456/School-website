import React from "react";
import { motion } from "framer-motion";

const outcomes = [
  {
    title: "Academic Excellence",
    desc: "Students achieve outstanding academic results and gain admission to top universities worldwide.",
    img: "Outcomes 2.jpg",
  },
  {
    title: "Real-World Readiness",
    desc: "Through experiential learning, students are prepared to solve real-world problems with confidence.",
    img: "Outcomes 1.jpg",
  },
  {
    title: "Leadership & Character",
    desc: "Students develop integrity, empathy, and leadership skills that shape their future.",
    img: "learning 1.jpg",
  },
  {
    title: "Innovation & Creativity",
    desc: "Students think critically, create boldly, and bring ideas to life through interdisciplinary learning.",
    img: "learning 4.jpg",
  },
];

const achievements = [
  {
    title: "National Merit Scholars",
    desc: "Students consistently earn recognition in national-level academic programs.",
  },
  {
    title: "Research & Innovation",
    desc: "Students collaborate with labs, universities, and experts on real-world research.",
  },
  {
    title: "Entrepreneurial Projects",
    desc: "Students create businesses, products, and solutions that solve real problems.",
  },
  {
    title: "Global Opportunities",
    desc: "Students engage in global programs, travel experiences, and international learning.",
  },
];

const stats = [
  { number: "100%", label: "College Acceptance" },
  { number: "Top 1%", label: "Academic Performers" },
  { number: "50+", label: "Experiential Programs" },
  { number: "Global", label: "Learning Exposure" },
];

const Outcomes = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <img
          src="Outcomes 3.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Outcomes
          </h1>
          <p className="max-w-8xl mx-auto text-lg opacity-90">
            The result of learning that moves—students ready to lead, innovate, and succeed.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Where Learning Leads
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Education is measured not just by knowledge gained, but by the impact
          students make. Our outcomes reflect a balance of academic excellence,
          character development, and real-world readiness.
        </p>
      </section>

      {/* STATS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-8xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow"
            >
              <h3 className="text-3xl font-bold mb-2">
                {item.number}
              </h3>
              <p className="text-gray-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUTCOMES SECTIONS */}
      <section className="px-6 max-w-8xl mx-auto space-y-32 py-28">
        {outcomes.map((item, i) => (
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

      {/* ACHIEVEMENTS */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-8xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold">
            Achievements in Action
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {achievements.map((item, i) => (
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
            From Classroom to Real Impact
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Students don’t just learn concepts—they apply them. From research and
            innovation to leadership and entrepreneurship, they leave prepared
            to succeed in an ever-changing world.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="Outcomes 1.jpg"
            className="w-full h-95 object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          See What Your Future Can Become
        </h2>
        <p className="text-gray-300 mb-6">
          Discover how our students turn learning into success.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Explore Admissions
        </button>
      </section>

    </div>
  );
};

export default Outcomes;