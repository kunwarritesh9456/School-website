import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const newsData = [
  {
    title: "Annual Sports Day 2026",
    desc: "Students showcased incredible talent and sportsmanship.",
    fullDesc:
      "Our Annual Sports Day 2026 was a grand success with enthusiastic participation from all students. Events included races, team sports, and fun activities that promoted teamwork and discipline.",
    img: "13034.jpg",
  },
  {
    title: "Science Fair نجاح",
    desc: "Innovative projects presented by our young scientists.",
    fullDesc:
      "Students displayed creative and innovative science models ranging from robotics to environmental solutions, impressing judges and visitors alike.",
    img: "Screenshot 2026-04-08 170950.png",
  },
  {
    title: "Cultural Fest",
    desc: "A celebration of diversity, music, and art.",
    fullDesc:
      "The cultural fest included dance, music, drama, and art exhibitions showcasing the diverse talents of our students.",
    img: "DSC.webp",
  },
  
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Latest News
      </h2>

{/* Grid */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-8xl ">
  {newsData.map((item, index) => (
    <motion.div
      key={index}
      onClick={() => setSelectedNews(item)}
      whileHover={{ y: -8 }}
      className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm grow">
          {item.desc}
        </p>

        <span className="mt-4 text-blue-600 text-sm font-medium">
          Read More →
        </span>
      </div>
    </motion.div>
  ))}
</div>

      {/*  MODAL POPUP */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={selectedNews.img}
                alt=""
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {selectedNews.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedNews.fullDesc}
                </p>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedNews(null)}
                  className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
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

export default News;