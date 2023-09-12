import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Portfolie from "../components/Portfolie";
import Service from "../components/Service";

const Home = () => {
   
    return (
        <>
            <Navigation />
            <Banner />
            <About />
            {/* <Skills /> */}
            <Service />
            <Portfolie />
            <Contact />
            <Footer />
        </>
    )
}
export default Home;