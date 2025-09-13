import Home from '../src/components/Home';
import Footer from '../src/components/Footer';
import SocialOverView from './components/Social';
import ShareStudent from './components/ShareStudent';
import CoreOfferings from './components/CoreOfferings';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
    <Navbar />
      <section id="home">
        <Home />
        <SocialOverView />
        <ShareStudent/>
        <CoreOfferings />
        <Testimonials />
        <Footer />
      </section>
    </>
  );
}
