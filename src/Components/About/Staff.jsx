import { useState } from "react";
import { motion } from "framer-motion";

const staffData = [
  {
    name: "John Smith",
    role: "Principal",
    category: "Leadership",
    img: "Asmonga.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Vice Principal",
    category: "Leadership",
    img: "Grate_Lillian.jpg",
  },
  {
    name: "Michael Brown",
    role: "Math Teacher",
    category: "Teacher",
    img: "Griffith_Bart.jpg",
  },
  {
    name: "Emily Davis",
    role: "Science Teacher",
    category: "Teacher",
    img: "ap.jpg",
  },
  {
    name: "David Wilson",
    role: "Sports Coach",
    category: "Teacher",
    img: "Teachers.jpg",
  },
  {
    name: "Sophia Lee",
    role: "English Teacher",
    category: "Teacher",
    img: "Teacher.jpg",
  },
];

const Staff = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredStaff = staffData.filter((person) => {
    return (
      (filter === "All" || person.category === filter) &&
      person.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div className="min-h-screen sm:min-h-screen bg-linear-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white text-center">
        <img
          src="AAA.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Staff Hero"
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-4xl sm:text-5xl font-bold">Our Staff</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200">
            Meet the dedicated team behind our success
          </p>
        </motion.div>
      </div>

      {/* FILTER + SEARCH */}
      <div className="py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* FILTER BUTTONS */}
        <div className="flex gap-4">
          {["All", "Leadership", "Teacher"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search staff..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border w-full md:w-64"
        />
      </div>

      {/* STAFF GRID */}
      <div className="px-6 md:px-20 pb-20">
        <div className="grid md:grid-cols-3 gap-10">
          {filteredStaff.map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={person.img}
                  className="w-100 h-100 object-cover"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 rounded-lg">
                    View Profile
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-gray-500">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">
          Join Our Team
        </h2>
        <p className="mt-3">
          Be part of an inspiring educational journey
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default Staff;