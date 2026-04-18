
import Hero from "../Components/Hero/Hero.jsx";
import About from "../Components/About/About.jsx";
import Counter from "../Components/Counter/Counter.jsx";
import Athletics from "../Components/Athletics/Athletics.jsx";
import Academics from "../Components/Academics/Academics.jsx";
import Explore from "../Components/Explore/Explore.jsx";
import News from "../Components/News/News.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";

const Home = () => {
 return(
<>
  <Navbar/>
  <Hero/>
  <About/>
  <Counter/>
  <Athletics/>
  <Explore />
  <Academics/>
  <News/>
  <Footer/>
</>
);

}

export default Home;
