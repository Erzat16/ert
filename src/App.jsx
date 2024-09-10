import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from './components/Service';
import People from "./components/People";
import Photo from "./components/Photo";

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
      </main>
    </div>
  );
};


export default App;
