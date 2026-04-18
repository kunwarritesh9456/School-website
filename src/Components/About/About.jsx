import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="Students.png"
            alt="Students"
            className="w-full max-w-xl object-contain"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Small Heading */}
          <p className="uppercase tracking-widest text-gray-500 mb-4">
            Welcome To
          </p>

          {/* BIG SCHOOL NAME (Like Image) */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-black">
            About Shady Side Academy
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed mb-8 max-w-xl">
            Shady Side Academy provides a Christ-centered environment focused on
            academic excellence and leadership development. We are pleased you are
            considering our school as your child’s home for the next four years.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/about">
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition">
                About Us
              </button>
            </Link>

            <Link to="/Admission">
              <button className="border border-yellow-600 text-yellow-700 px-6 py-3 rounded-full hover:bg-yellow-100 transition">
                Apply To SSA
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;