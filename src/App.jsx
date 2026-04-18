import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Hero from "./Components/Hero/Hero.jsx";

import About from "./Components/About/About.jsx";
import President from "./Components/About/President.jsx";
import Facilities from "./Components/About/Facilities.jsx";
import Staff from "./Components/About/Staff.jsx";
import VisionMission from "./Components/About/VisionMission.jsx";
import WhyUs from "./Components/About/WhyUs.jsx";

import Counter from "./Components/Counter/Counter.jsx";

import Academics from "./Components/Academics/Academics.jsx";
import LearningThatMoves from "./Components/Academics/LearningThatMoves.jsx";
import HowWeLearn from "./Components/Academics/HowWeLearn.jsx";
import HowWeMove from "./Components/Academics/HowWeMove.jsx";
import HowWeGrow from "./Components/Academics/HowWeGrow.jsx";
import SignatureExperience from "./Components/Academics/SignatureExperience.jsx";
import Outcomes from "./Components/Academics/Outcomes.jsx";

import Admission from "./Components/Admission/Admission.jsx";
import ApplyNow from "./Components/ApplyNow/ApplyNow.jsx";
import Explore from "./Components/Explore/Explore.jsx";

import StudentLife from "./Components/StudentLife/StudentLife.jsx";
import LowerSchool from "./Components/StudentLife/LowerSchool.jsx";
import MiddleSchool from "./Components/StudentLife/MiddleSchool.jsx";
import SeniorSchoollife from "./Components/StudentLife/SeniorSchoollife.jsx";

import MeetUs from "./Components/MeetUs/MeetUs.jsx";
import OurPeople from "./Components/MeetUs/OurPeople.jsx";
import OurPlace from "./Components/MeetUs/OurPlace.jsx";
import OurProgram from "./Components/MeetUs/OurProgram.jsx";
import OurSchools from "./Components/MeetUs/OurSchools.jsx";
import OurStory from "./Components/MeetUs/OurStory.jsx";

import News from "./Components/News/News.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import FactLogin from "./Components/FactLogin/FactLogin.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Hero" element={<Hero />} />
     
      <Route path="/About" element={<About />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/President" element={<President />} />
      <Route path="/Facilities" element={<Facilities />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/visionmission" element={<VisionMission />} />
      <Route path="/Whyus" element={<WhyUs />} />
      
      <Route path="/Counter" element={<Counter />} />
      
      <Route path="/Academics" element={<Academics />} />
      <Route path="/LearningThatMoves" element={<LearningThatMoves />} />
      <Route path="/HowWeLearn" element={<HowWeLearn />} />
      <Route path="/HowWeMove" element={<HowWeMove />} />
      <Route path="/HowWeGrow" element={<HowWeGrow />} />
      <Route path="/SignatureExperience" element={<SignatureExperience />} />
      <Route path="/Outcomes" element={<Outcomes />} />

      <Route path="/Admission" element={<Admission />} />
      <Route path="/ApplyNow" element={<ApplyNow />} />
      
      
      <Route path="/StudentLife" element={<StudentLife />} />
      <Route path="/LowerSchool" element={<LowerSchool />} />
      <Route path="/MiddleSchool" element={<MiddleSchool />} />
      <Route path="/SeniorSchoollife" element={<SeniorSchoollife />} />
      
      <Route path="/MeetUs" element={<MeetUs />} />
      <Route path="/OurPeople" element={<OurPeople />} />
      <Route path="/OurPlace" element={<OurPlace />} />
      <Route path="/OurProgram" element={<OurProgram />} />
      <Route path="/OurSchools" element={<OurSchools />} />
      <Route path="/OurStory" element={<OurStory />} />
      
      
      <Route path="/News" element={<News />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/FactLogin" element={<FactLogin />} />
    </Routes>
  );
}

export default App;
