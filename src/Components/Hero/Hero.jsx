import { motion } from "framer-motion";
import heroVideo from "../../assets/heroVideo.mp4";

const newsData = [
  { title: "Students Win National Award", img: "/img 1.png" },
  { title: "Annual Sports Day Highlights", img: "/img 2.png" },
  { title: "New Science Lab افتتاح", img: "/img 3.png" },
  { title: "Cultural Fest 2026", img: "/img 4.png" },
  { title: "Robotics Team Success", img: "/img 6.png" },
];

const HeroWithNews = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Video */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Discover Your Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-6 text-lg md:text-xl max-w-2xl"
          >
            A place where innovation, creativity, and excellence come together.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200"
          >
            Explore More
          </motion.button>

        </div>
      </section>

      {/* NEWS SECTION BELOW HERO */}
      <section className="py-16 bg-white">

        <div className="max-w-8xl mx-auto px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            News & Social
          </h2>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[...newsData, ...newsData].map((item, index) => (
                <div
                  key={index}
                  className="min-w-70 md:min-w-[320px] bg-gray-100 rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HeroWithNews;