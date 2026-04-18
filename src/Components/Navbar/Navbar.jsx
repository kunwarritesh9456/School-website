import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  // NAV DATA
  const navItems = [
    { name: "Home", path: "/" },

    {
      name: "About",
      megaMenu: true,
      content: [
        {
          title: "Our Facilities",
          items: [
            { name: "Facilities", path: "/Facilities" },
            { name: "Why Us", path: "/WhyUs" },
          ],
        },
        {
          title: "Leadership",
          items: [
            { name: "President", path: "/President" },
            { name: "Vision & Mission", path: "/VisionMission" },
            { name: "Staff", path: "/Staff" },
          ],
        },
      ],
    },

    {
      name: "Academics",
      megaMenu: true,
      content: [
        {
          title: "Programs",
          items: [
            { name: "Learning That Moves", path: "/LearningThatMoves" },
            { name: "HowWeLearn", path: "/HowWeLearn" },
            { name: "HowWeMove", path: "/HowWeMove" },
            { name: "HowWeGrow", path: "/HowWeGrow" },
            { name: "Signature Experience", path: "/SignatureExperience" },
            { name: "Outcomes", path: "/Outcomes" },
          ],
        },
      ],
    },

    {
      name: "Student Life",
      megaMenu: true,
      content: [
        {
          title: "Programs",
          items: [
            { name: "Studentlife", path: "/StudentLife" },
            { name: "LowerSchool", path: "/LowerSchool" },
            { name: "MiddleSchool", path: "/MiddleSchool" },
            { name: "SeniorSchoollife", path: "/SeniorSchoollife" },
          ],
        },
      ],
    },

    {
      name: "MeetUs",
      megaMenu: true,
      content: [
        {
          title: "Explore",
          items: [
            { name: "MeetUs", path: "/MeetUs" },
            { name: "Ourstory", path: "/ourstory" },
            { name: "Ourpeople", path: "/ourpeople" },
            { name: "Ourprogram", path: "/ourprogram" },
          ],
        },
        {
          title: "More",
          items: [
            { name: "Ourschools", path: "/ourschools" },
            { name: "Ourplace", path: "/ourplace" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src="/Logo SSA.png"
              alt="logo"
              className={`${scrolled ? "h-15" : "h-25"}`}
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
            <span
              className={`font-semibold text-lg hidden sm:block ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Shady Side Academy
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item, index) => (
              <li
  key={index}
  className="relative group"
  onMouseEnter={() => setActiveMenu(index)}
  onMouseLeave={() => setActiveMenu(null)}
>
  {/* MENU TITLE */}
  <div
    className={`flex items-center gap-1 cursor-pointer ${
      scrolled ? "text-black" : "text-white"
    } hover:text-yellow-500`}
  >
    {item.name}
    {item.megaMenu && <ChevronDown size={16} />}
  </div>

  {/* MEGA MENU */}
  {item.megaMenu && activeMenu === index && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-150 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl p-8 grid grid-cols-2 gap-10 border z-50"
    >
      {item.content.map((section, i) => (
        <div key={i}>
          <h3 className="font-semibold mb-4 text-gray-800">
            {section.title}
          </h3>

          <ul className="space-y-3">
            {section.items.map((sub, j) => (
              <li key={j}>
                <Link
                  to={sub.path}
                  className="block text-gray-600 hover:text-blue-600 p-2 rounded-md hover:bg-gray-100"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  )}
</li>
            ))}
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/apply-now"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-gray-800 text-white px-5 py-2 rounded-lg"
            >
              Contact
            </Link>
            <Link
              to="/Factlogin"
              className="bg-gray-800 text-white px-5 py-2 rounded-lg"
            >
              Login
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setOpen(true)}>
              <Menu
                size={28}
                className={scrolled ? "text-black" : "text-white"}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => {
                setTimeout(() => {
                  setOpen(false);
                }, 200);
              }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-[#111]/95 backdrop-blur-xl text-white z-50 p-6 overflow-y-auto"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <img src="/Logo SSA.png" className="h-12" />
                <X
                  onClick={() => {
                    setTimeout(() => {
                      setOpen(false);
                    }, 200);
                  }}
                />
              </div>

              {/* LINKS */}
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-white/10 pb-4">
                    {item.megaMenu ? (
                      <div
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === index ? null : index,
                          )
                        }
                        className="flex justify-between items-center py-3 text-lg font-medium cursor-pointer"
                      >
                        {item.name}
                        <ChevronDown />
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => {
                          setTimeout(() => {
                            setOpen(false);
                          }, 200);
                        }}
                        className="block py-3 text-lg font-medium"
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* DROPDOWN */}
                    <AnimatePresence>
                      {mobileDropdown === index && item.megaMenu && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden pl-4 mt-3 space-y-3"
                        >
                          {item.content.map((section, i) => (
                            <div key={i}>
                              <p className="text-white font-semibold">
                                {section.title}
                              </p>

                              {section.items.map((sub, j) => (
                                <Link
                                  key={j}
                                  to={sub.path}
                                  onClick={() => {
                                    setTimeout(() => {
                                      setOpen(false);
                                    }, 200);
                                  }}
                                  className="block py-2 px-3 rounded-lg hover:bg-white/10"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-10 space-y-4 border-t border-white/10 pt-6">
                <Link
                  to="/apply-now"
                  className="block text-center bg-blue-500 py-3 rounded-xl"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="block text-center bg-white/10 py-3 rounded-xl"
                >
                  Contact
                </Link>
                <Link
                  to="/Factlogin"
                  className="block text-center bg-white/10 py-3 rounded-xl"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
