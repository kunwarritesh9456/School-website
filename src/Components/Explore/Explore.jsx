import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Pre-K to Grade 5",
    tag: "EXPLORE",
    desc: "Your child will safely explore their world in a nurturing environment with engaging learning.",
    img: "/children school.jpg",
  },
  {
    title: "Grade 6-8",
    tag: "GROW",
    desc: "Students build confidence, critical thinking, and leadership skills during middle school.",
    img: "/Gettyimages.jpg",
  },
  {
    title: "Grades 9-12",
    tag: "FLOURISH",
    desc: "Prepare for college and life with advanced academics and real-world experiences.",
    img: "/9th.jpg",
  },
];

const Explore = () => {
  return (
    <section className="bg-[#f5f3ef] py-20 px-6 md:px-20">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f2747] leading-tight">
          EXPLORE, GROW,
          <br />
          <span className="text-2xl md:text-3xl">AND</span>
          <br />
          FLOURISH.
        </h1>
      </div>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">

        {cards.map((card, index) => (
          <FlipCard key={index} card={card} />
        ))}

      </div>
    </section>
  );
};

export default Explore;





// 🔥 FLIP CARD COMPONENT
const FlipCard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-75 h-105 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full duration-500"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* FRONT SIDE */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={card.img}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
            <p className="text-yellow-400 text-sm font-bold">{card.tag}</p>
            <h2 className="text-white text-2xl font-bold">{card.title}</h2>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute w-full h-full rounded-2xl bg-[#0f2747] text-white p-6 flex flex-col justify-center items-center text-center shadow-xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
          <p className="text-sm opacity-90">{card.desc}</p>
        </div>

      </motion.div>
    </div>
  );
};