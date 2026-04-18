import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const sports = [
  {
    name: "Football",
    img: "Football Player.jpg",
    desc: "Our football team has consistently performed at inter-school tournaments.",
  },
  {
    name: "Basketball",
    img: "/Slam Dunk.jpg",
    desc: "Fast-paced and energetic, basketball builds teamwork and agility.",
  },
  {
    name: "Table Tennis",
    img: "/Sports 1.jpg",
    desc: "Precision and reflex define our table tennis champions.",
  },
  {
    name: "Cricket",
    img: "/Sports (2).jpg",
    desc: "Cricket is the pride of our school with multiple championships.",
  },
];

const Athletics = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  return (
    <section className="py-20 bg-black text-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
          Athletics
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Building champions in sports and life
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

        {sports.map((sport, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedSport(sport)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07 }}
            transition={{ delay: index * 0.15 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
          >
            {/* Image */}
            <img
              src={sport.img}
              alt={sport.name}
              className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-semibold">{sport.name}</h3>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition mt-1">
                Click to explore
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/*  MODAL */}
      <AnimatePresence>
        {selectedSport && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSport(null)}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl text-white"
              initial={{ scale: 0.8, y: 80 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 80 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={selectedSport.img}
                alt={selectedSport.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {selectedSport.name}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {selectedSport.desc}
                </p>

                {/* Extra Info */}
                <div className="mt-4 text-sm text-gray-400">
                  • Professional coaching <br />
                  • Inter-school competitions <br />
                  • Annual sports events
                </div>

                {/* Close */}
                <button
                  onClick={() => setSelectedSport(null)}
                  className="mt-6 px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Athletics;