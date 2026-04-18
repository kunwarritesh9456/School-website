import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Menu, X, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Website = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1
            className={`text-xl font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Shady Side Academy
          </h1>

          <ul className="hidden md:flex gap-8">
            {["Home", "About", "Admissions", "Academics", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className={`cursor-pointer ${
                    scrolled ? "text-black" : "text-white"
                  } hover:text-yellow-500`}
                >
                  {item}
                </li>
              ),
            )}
          </ul>

          <div className="hidden md:flex gap-3">
            <button className="bg-yellow-500 px-4 py-2 rounded-lg font-semibold">
              Apply Now
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
              Contact
            </button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white p-6 space-y-4">
            {["Home", "About", "Admissions", "Academics", "Contact"].map(
              (item) => (
                <div key={item}>{item}</div>
              ),
            )}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center px-6 md:px-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588072432836-e10032774350')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-green-900/70"></div>

        <h1 className="relative text-5xl md:text-6xl font-bold text-yellow-400">
          CONTACT US
        </h1>
      </section>

      {/* CARDS */}
      <div className="relative -mt-20 px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="font-semibold text-lg">Our Address</h3>
            <p className="text-gray-600">Dehradun, India</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="text-gray-600">+91 9876543210</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">school@email.com</p>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border-b-2 p-2 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border-b-2 p-2 focus:outline-none"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
                className="w-full border-b-2 p-2 focus:outline-none"
              />

              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* INFO + MAP */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-700 text-lg">
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-500" />
                <p>Dehradun, India</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500" />
                <p>+91 9876543210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-yellow-500" />
                <p>school@email.com</p>
              </div>
            </div>

            <div className="w-full h-75 rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps?q=Dehradun&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#4b4b4b] text-white pt-16 pb-6 px-6 md:px-16 mt-20">
        <div className="grid md:grid-cols-4 gap-10  ">
          <div className="   ">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Shady Side Academy
            </h2>
            <p className="text-gray-300 text-sm">
              Shady Side Academy is a place where students grow and succeed it
              is a prestigious private, co-educational PK-12 institution in
              Pittsburgh, Pennsylvania, founded in 1883. It offers a holistic,
              rigorous curriculum across four campuses, emphasizing STEM,
              humanities, and arts, with optional 5- or 7-day boarding available
              in high school.
            </p>
          </div>
          <div className="  ">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              QuickLinks
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>Home</li>
              <li>About School</li>
              <li>Admissions</li>
              <li>Academics</li>
              <li>Student Life</li>
            </ul>
          </div>
          <div className="">
            <div>Phone: +91 9876543210</div>
            <div>Email: school@email.com</div>
            <div>Address: Dehradun, India</div>
            <div className="flex gap-8 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
            </div>
             <img
            alt="CBSE Logo"
            className="w-28 opacity-90"
            src="/Logo SSA.png"
          ></img>
          </div>

         
          <div className="w-full h-37.5 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Dehradun&output=embed"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-300 text-sm">
          © 2026 Your School. All Rights Reserved.
        </div>
      </footer>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3"
          >
            <CheckCircle />
            Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Website;
