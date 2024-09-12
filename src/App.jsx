import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from './components/Service';
import People from "./components/People";
import Photo from "./components/Photo";
import Collab from "./components/Collab";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Photo />
        <People />
        <Collab />
        <Footer />
      </main>
    </div>
  );
};


export default App;
