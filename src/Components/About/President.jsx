import { motion } from "framer-motion";

const leaders = [
  {
    name: "John Smith",
    role: "President",
    img: "Stern Dan.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Vice President",
    img: "Sullivan Bayh.jpg",
  },
  {
    name: "Michael Brown",
    role: "Head of School",
    img: "Toole Diana.jpg",
  },
];

const staff = [
  {
    name: "Staff 1",
    role: "Teacher",
    img: "ap.jpg",
  },
  {
    name: "Staff 2",
    role: "Teacher",
    img: "Sullivan Bayh.jpg",
  },
  {
    name: "Staff 3",
    role: "Teacher",
    img: "Image 2.jpg",
  },
  {
    name: "Staff 4",
    role: "Teacher",
    img: "Simmons Sean.jpg",
  },
  {
    name: "Staff 5",
    role: "Teacher",
    img: "Stern Dan.jpg",
  },
  {
    name: "Staff 6",
    role: "Teacher",
    img: "Teacher.jpg",
  },
];

const President = () => {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center">

        {/* Background Image */}
        <img
          src="/img 9.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />

        {/* DARK OVERLAY  */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">President</h1>
          <p className="mt-4 text-lg text-gray-200">
            More than educators — mentors, leaders, and guides
          </p>
        </motion.div>
      </section>


      {/* INTRO */}
      <div className="py-16 px-6 md:px-20 text-center max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">We Are More Than Educators</h2>
        <p className="text-gray-600">
          Our faculty and staff are mentors, innovators, and leaders who are
          passionate about shaping the future of students.
        </p>
      </div>

      {/* PRESIDENT SECTION */}
      <div className="py-16 px-6 md:px-20 bg-white grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="President.jpg"
          className="rounded-2xl shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">President</h2>
          <p className="text-gray-600 leading-relaxed">
            Our leadership is dedicated to building a strong academic foundation
            and inspiring students to become future leaders.
          </p>
        </motion.div>
      </div>

      {/* LEADERSHIP TEAM */}
      <div className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {leaders.map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <img
                src={person.img}
                className="w-28 h-28 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">{person.name}</h3>
              <p className="text-gray-500">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STAFF SECTION */}
      <div className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Faculty & Staff
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {staff.map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={person.img} className="w-100 h-100 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold">{person.name}</h3>
                <p className="text-gray-500">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NEWS SECTION */}
      <div className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Faculty News</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-50 rounded-xl shadow-md"
            >
              <h3 className="font-semibold mb-2">
                Teaching Excellence in Action
              </h3>
              <p className="text-gray-500 text-sm">
                Our faculty continues to inspire students through innovative
                teaching methods.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default President;
