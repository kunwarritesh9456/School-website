import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border-b-2 p-3 bg-transparent focus:outline-none focus:border-black"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border-b-2 p-3 bg-transparent focus:outline-none focus:border-black"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full border-b-2 p-3 bg-transparent focus:outline-none focus:border-black"
            />

            <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:scale-105 hover:bg-yellow-400 transition">
              Send Message
            </button>

          </form>
        </motion.div>

        {/* RIGHT - INFO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white space-y-8"
        >
          <h2 className="text-4xl font-bold">Get in Touch</h2>

          <p className="text-gray-300 max-w-md">
            We’d love to hear from you. Reach out for admissions, queries, or general information about our school.
          </p>

          <div className="space-y-5 text-lg">

            <div className="flex items-center gap-4">
              <MapPin className="text-yellow-400" />
              <span>Dehradun, India</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-yellow-400" />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-yellow-400" />
              <span>SandySide@Academy.com</span>
            </div>

          </div>

          {/* MAP */}
          <div className="mt-6 w-full h-62.5 rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220409.61598345556!2d77.7052796803503!3d30.325355024847003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1774508710042!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </motion.div>
      </div>

      {/* ✅ SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-10 right-10 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-50"
          >
            <CheckCircle />
            Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Footer;