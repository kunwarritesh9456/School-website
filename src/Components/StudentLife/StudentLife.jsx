import { motion } from "framer-motion";

const sections = [
  {
    title: "Clubs & Leadership",
    desc: "Explore student-led clubs, leadership opportunities, and global initiatives.",
    img: "Student Life 6.jpg",
  },
  {
    title: "Arts & Creativity",
    desc: "Music, theater, visual arts, and creative expression at every level.",
    img: "Student Life 13.jpg",
  },
  {
    title: "Athletics",
    desc: "Competitive sports programs that build teamwork and discipline.",
    img: "Image 1.jpg",
  },
  {
    title: "Campus Life",
    desc: "Modern facilities, vibrant campus culture, and student experiences.",
    img: "img 4.png",
  },
];

const StudentLife = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="9th.jpg"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Student Life
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            A vibrant community where leadership, creativity, and connection shape every experience.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Beyond the Classroom
        </motion.h2>

        <p className="max-w-8xl mx-auto text-gray-600 text-lg">
          Student life is designed to help students grow socially, emotionally, and intellectually
          through leadership, clubs, arts, athletics, and community experiences.
        </p>
      </section>

      {/* CARDS GRID */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={item.img}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gray-100 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="img 6.png"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              A Dynamic Student Experience
            </h2>
            <p className="text-gray-600 mb-4">
              Students engage in leadership roles, service learning, and extracurricular activities
              that foster growth beyond academics.
            </p>

            <ul className="space-y-3">
              <li>✔ Student Government & Leadership</li>
              <li>✔ Clubs & Organizations</li>
              <li>✔ Arts & Performance</li>
              <li>✔ Athletics & Wellness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">
          Discover Your Place
        </h2>
        <p className="mb-8 text-gray-300">
          Join a community where every student belongs and thrives.
        </p>

        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
          Explore More
        </button>
      </section>

    </div>
  );
};

export default StudentLife;