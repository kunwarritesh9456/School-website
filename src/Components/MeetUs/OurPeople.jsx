import React from "react";
import { motion } from "framer-motion";

/* ================== DATA ================== */

const schools = [
  {
    name: "Country Day School",
    grades: "Pre-K to Grade 5",
    desc: "A nurturing environment where curiosity and creativity grow.",
    img: "/AAA.jpg",
  },
  {
    name: "Junior School",
    grades: "Grades 6–8",
    desc: "Students explore, discover, and build strong foundations.",
    img: "/Gettyimages.jpg",
  },
  {
    name: "Senior School",
    grades: "Grades 9–12",
    desc: "Preparing students for college and beyond.",
    img: "/9th.jpg",
  },
];

const leadership = [
  {
    name: "Griffith Bart",
    role: "President",
    img: "/leadership/Griffith_Bart.jpg",
  },
  {
    name: "Jennifer Asmonga",
    role: "Vice President of Academics",
    img: "/leadership/ap.jpg",
  },
  {
    name: "Bella Abruzzo",
    role: "Chief Community Officer",
    img: "/leadership/Abruzzo Bella.jpg",
  },
  {
    name: "Culea Abraham",
    role: "Head of Senior School",
    img: "/leadership/Abraham Culea.jpg",
  },
  {
    name: "Jen Andree",
    role: "Head of Middle School",
    img: "/leadership/Andree Jen.jpg",
  },
  {
    name: "Asmonga Dan",
    role: "Head of Junior School",
    img: "/leadership/Asmonga.jpg",
  },
];

const trustees = [
  "Robert Mullin",
  "Michael Haggerty",
  "Lisa Haley",
  "Joyce Fu",
  "Bart Brush",
  "Abhishek Mehta",
];

const news = [
  {
    title: "Relational Teaching in Action",
    desc: "Building strong connections that inspire confidence and growth.",
    img: "/leadership/why us 1.jpg",
  },
  {
    title: "Teaching Through Practice",
    desc: "Connecting classroom learning with real-world experiences.",
    img: "/Student life 6.jpg",
  },
  {
    title: "Cultural Learning",
    desc: "Encouraging global understanding through immersive learning.",
    img: "/Student life 16.jpg",
  },
];

/* ================== COMPONENT ================== */

const OurPeople = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center bg-linear-to-r from-black to-gray-800 text-white text-center px-7 relative">
        {" "}
        <img
          src="/AAA.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Hero"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our People</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            More than educators — mentors, leaders, and role models shaping
            future generations.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 max-w-8xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          We Are More Than Educators
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our faculty are mentors, scientists, coaches, and leaders who are
          passionate about guiding students toward success in academics and
          life.
        </p>
      </section>

      {/* PRESIDENT */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/President.jpg"
            alt="President"
            className="w-full h-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Meet Our President
            </h2>
            <p className="text-gray-600 mb-4">
              Leading with vision and experience, our president is dedicated to
              shaping a strong academic community.
            </p>
            <button className="px-6 py-3 bg-black text-white rounded-full">
              Read Bio
            </button>
          </div>
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="py-20 px-6 max-w-8xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our People</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {schools.map((school, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={school.img}
                  alt={school.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{school.grades}</p>
                <p className="text-gray-600 text-sm">{school.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUSTEES */}
      <section className="py-20 bg-gray-100 px-6">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Board of Trustees</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {trustees.map((name, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl shadow text-gray-700"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
