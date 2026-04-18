import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Deep Thinking",
    desc: "Students are encouraged to analyze, question, and connect ideas across disciplines, building strong critical thinking skills.",
    img: "learn 1.jpg",
  },
  {
    title: "Collaborative Learning",
    desc: "Students learn from each other through discussion, teamwork, and shared problem-solving experiences.",
    img: "learn 2.jpg",
  },
  {
    title: "Real-World Application",
    desc: "Knowledge is applied through projects, experiments, and experiences that prepare students for real-life challenges.",
    img: "learn 3.jpg",
  },
];

const features = [
  {
    title: "Interdisciplinary Approach",
    desc: "Subjects are not isolated. Students connect science, arts, and humanities to develop a broader understanding of the world.",
  },
  {
    title: "Student-Centered Classrooms",
    desc: "Learning is tailored to students’ interests, strengths, and goals—giving them ownership of their education.",
  },
  {
    title: "Inquiry-Based Learning",
    desc: "Students ask questions, explore ideas, and discover solutions rather than simply memorizing information.",
  },
  {
    title: "Adaptive & Future-Ready",
    desc: "We prepare students with the skills needed to thrive in a rapidly changing world.",
  },
];

const HowWeLearn = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[95vh] flex items-center justify-center text-white">
        <img
          src="learn 4.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            How We Learn
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Learning that is active, meaningful, and designed for real life.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Learning That Builds Thinkers
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our classrooms are designed to inspire curiosity, encourage exploration,
          and develop independent thinkers. Students don’t just learn content—they
          learn how to think, adapt, and grow.
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
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={item.img}
                className="w-full h-105 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* FEATURES GRID */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
          {features.map((item, i) => (
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

      {/* FEATURE STORY */}
      <section className="py-28 px-6 max-w-8xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Learning Beyond the Classroom
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Students engage in fieldwork, research projects, and hands-on
            experiences that bring learning to life. This approach builds
            confidence, independence, and real-world skills.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="SSA.jpg"
            className="w-full h-95 object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          Discover How Learning Comes Alive
        </h2>
        <p className="text-gray-300 mb-6">
          See how our approach prepares students for the future.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Explore Programs
        </button>
      </section>

    </div>
  );
};

export default HowWeLearn;