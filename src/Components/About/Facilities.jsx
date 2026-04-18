import { motion } from "framer-motion";

const facilities = [
  {
    title: "Modern Classrooms",
    desc: "Smart classrooms with digital boards and advanced teaching tools.",
    img: "School 5.jpg",
  },
  {
    title: "Science Labs",
    desc: "Fully equipped labs for Physics, Chemistry, and Biology.",
    img: "Teachers.jpg",
  },      
  {
    title: "Library",
    desc: "A vast collection of books and digital learning resources.",
    img: "Student life 32.jpg",
  },
  {
    title: "Sports Complex",
    desc: "Indoor and outdoor sports facilities for all students.",
    img: "SSAJuniorSchool.jpg",
  },
  {
    title: "Computer Lab",
    desc: "High-tech computers with modern software and internet access.",
    img: "futuristic lab.jpg",
  },
  {
    title: "Transport",
    desc: "Safe and reliable transport facilities for students.",
    img: "School Bus.jpg",
  },
];

const Facilities = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div className="min-h-[65vh] md:min-h-screen bg-linear-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white text-center">
        <img
          src="AAA.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Facilities Hero"
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-5xl font-bold">Our Facilities</h1>
          <p className="mt-4 text-lg text-gray-200">
            World-class infrastructure for holistic learning
          </p>
        </motion.div>
      </div>

      {/* FACILITIES GRID */}
      <div className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Campus
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={item.img}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="py-20 px-6 md:px-20 bg-white grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="Facilities.jpg"
          className="rounded-2xl shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Smart Learning Environment
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our school provides a technology-driven learning environment
            designed to enhance creativity, collaboration, and critical thinking.
          </p>
        </motion.div>
      </div>

      {/* STATS */}
      <div className="py-20 bg-blue-600 text-white text-center">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: "50+", label: "Classrooms" },
            { num: "10+", label: "Labs" },
            { num: "5000+", label: "Books" },
            { num: "20+", label: "Sports Activities" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <h3 className="text-3xl font-bold">{item.num}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold">
          Visit Our Campus Today
        </h2>
        <p className="text-gray-500 mt-4">
          Experience our facilities firsthand
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition">
          Book a Visit
        </button>
      </div>

    </div>
  );
};

export default Facilities;