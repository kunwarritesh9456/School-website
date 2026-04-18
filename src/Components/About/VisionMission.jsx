import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Globe, Users, Trophy } from "lucide-react";

const visionPoints = [
  {
    icon: Eye,
    title: "Future-Ready Education",
    desc: "Empowering students with skills, knowledge, and mindset to thrive in a rapidly evolving world.",
  },
  {
    icon: Globe,
    title: "Global Citizens",
    desc: "Developing responsible individuals who contribute positively to society and the world.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    desc: "Encouraging curiosity, critical thinking, and innovative problem-solving abilities.",
  },
];

const missionPoints = [
  {
    icon: Users,
    title: "Holistic Development",
    desc: "Fostering intellectual, emotional, social, and physical growth of every student.",
  },
  {
    icon: Trophy,
    title: "Excellence in Learning",
    desc: "Providing high-quality education that inspires academic achievement and lifelong learning.",
  },
  {
    icon: Target,
    title: "Leadership & Values",
    desc: "Instilling discipline, integrity, confidence, and leadership skills in students.",
  },
];

const VisionMission = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div className="min-h-[55vh] sm:min-h-screen bg-linear-to-r from-indigo-900 to-blue-600 flex items-center justify-center text-white text-center">
       <img
          src="premium.avif"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Staff Hero"
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl sm:text-5xl font-bold">Vision & Mission</h1>
          <p className="mt-4 text-gray-200 text-base sm:text-lg">
            Inspiring excellence, shaping future leaders
          </p>
        </motion.div>
      </div>

      {/* INTRO */}
      <div className="py-16 px-6 md:px-20 text-center max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Our Purpose & Direction
        </h2>
        <p className="text-gray-600">
          Our vision defines where we aspire to be, while our mission reflects
          how we achieve it every day through dedication, innovation, and excellence.
        </p>
      </div>

      {/* VISION SECTION */}
      <div className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Vision
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {visionPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl shadow-lg bg-gray-50 text-center"
              >
                <Icon className="mx-auto mb-4 text-blue-600" size={40} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Mission
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {missionPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl shadow-lg bg-white text-center"
              >
                <Icon className="mx-auto mb-4 text-indigo-600" size={40} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* QUOTE / HIGHLIGHT */}
      <div className="py-20 px-6 md:px-20 bg-blue-600 text-white text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold">
            "Education is not just learning — it's transformation."
          </h2>
          <p className="mt-4 text-gray-200">
            We believe in shaping not just students, but future leaders.
          </p>
        </motion.div>
      </div>

    </div>
  );
};

export default VisionMission;