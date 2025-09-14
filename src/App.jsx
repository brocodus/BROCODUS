import Home from '../src/components/Home';
import Footer from '../src/components/Footer';
import SocialOverView from './components/Social';
import ShareStudent from './components/ShareStudent';
import CoreOfferings from './components/CoreOfferings';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Contact from './components/Contact';
import TopBar from './components/TopBar';

export default function App() {
    useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const home = document.querySelector("#home");

    if (navbar && home) {
      home.style.marginTop = navbar.offsetHeight + "px";
    }
  }, []);

  return (
    <>

    <Navbar />
      <section id="home">

            <TopBar />
        <Home />
        <SocialOverView />
        <ShareStudent/>
        <CoreOfferings />
        <Testimonials />
        <Footer />
        {/* <Contact /> */}
      </section>
    </>
  );
}