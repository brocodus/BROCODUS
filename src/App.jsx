import Home from '../src/components/Home';
import Footer from '../src/components/Footer';
import SocialOverView from './components/socialOverView';

export default function App() {
  return (
    <>
      <section id="home">
        <Home />
        <SocialOverView />
        <Footer />
      </section>
    </>
  );
}
