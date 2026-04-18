import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Lead Your Own Journey",
    desc: "Students take ownership of their experiences—launching clubs, leading initiatives, and shaping the culture of the school.",
    image: "Outcomes 1.jpg",
  },
  {
    title: "College-Like Experience",
    desc: "With independence, flexibility, and opportunity, student life mirrors a dynamic college environment.",
    image: "img 6.png",
  },
  {
    title: "Compete & Perform",
    desc: "From athletics to performing arts, students compete and perform at regional and national levels.",
    image: "img 8.png",
  },
];

const opportunities = [
  {
    title: "Leadership Roles",
    desc: "Students lead organizations, initiatives, and events across campus.",
  },
  {
    title: "Student Publications",
    desc: "Create magazines, blogs, and media that reflect student voice.",
  },
  {
    title: "Affinity Groups",
    desc: "Communities that celebrate identity, diversity, and belonging.",
  },
  {
    title: "Exchange Programs",
    desc: "Global experiences that expand perspectives and learning.",
  },
];

const SeniorSchoollife = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="h-[95vh] relative flex items-center justify-center text-white">
        <img
          src="learning 7.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Senior School Life
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Where independence, leadership, and passion come together.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          We Uncover Every Passion
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Senior school life feels more like a college campus than a traditional
          classroom. Students explore their interests, take initiative, and lead
          meaningful experiences that shape their future.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 max-w-7xl mx-auto space-y-32 pb-24">
        {highlights.map((item, i) => (
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
                src={item.image}
                className="w-full h-105 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* OPPORTUNITIES GRID */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-8xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-semibold">
            Endless Opportunities
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {opportunities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMMUNITY DINNER FEATURE */}
      <section className="py-28 px-6 max-w-8xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            A Strong Community
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From shared meals to meaningful conversations, students build
            connections that create a strong and supportive community.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="Outcomes 2.jpg"
            className="w-full h-95 object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-6">
          Define Your Own Path
        </h2>
        <p className="text-gray-300 mb-6">
          Discover how senior school prepares students for life beyond graduation.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full">
          Explore More
        </button>
      </section>

    </div>
  );
};

export default SeniorSchoollife;