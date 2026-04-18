import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <div
        className="min-h-[55vh] sm:min-h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center relative"
        style={{
          backgroundImage:
            "url('why us 1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold">Why Choose Our School</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            We don’t just educate students — we inspire them to lead, innovate,
            and succeed in a changing world.
          </p>
        </motion.div>
      </div>

      {/* SECTION 1 */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="Why us 2.jpg"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            A Tradition of Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our school is built on a strong foundation of academic excellence
            and character development. We create an environment where students
            are encouraged to explore, question, and grow into confident
            individuals prepared for future challenges.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Innovative Learning Approach
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We integrate modern teaching methodologies with technology-driven
            classrooms to ensure students develop critical thinking and
            creativity. Our approach goes beyond textbooks, focusing on
            real-world skills and problem-solving.
          </p>
        </motion.div>

        <motion.img
          src="Why us 3.jpg"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
      </section>

      {/* SECTION 3 */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="Student Life 19.jpg"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Dedicated Faculty & Mentorship
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our experienced teachers act as mentors, guiding students both
            academically and personally. We believe in nurturing each child’s
            potential through individual attention and support.
          </p>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes Us Different
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Holistic Development",
            "Safe & Supportive Campus",
            "Advanced Infrastructure",
            "Strong Moral Values",
            "Sports & Activities",
            "Global Exposure",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold">
            Start Your Journey With Us
          </h2>
          <p className="mt-4 text-gray-200">
            Join a school where excellence meets opportunity
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full hover:scale-105 transition">
            Apply Now
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default WhyUs;