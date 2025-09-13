import Home from '../src/components/Home'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import { useEffect } from "react";
import SocialOverView from './components/socialOverView';

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
      <section id="home">
        <Home />
        <SocialOverView/>
         <Footer />
      </section>
  </>
  );
}