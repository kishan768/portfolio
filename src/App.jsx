import "./App.css";
import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <div className="py-20 px-6 md:px-12 bg-base-200">
        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Right column: Contact */}

          <Contact />
          {/* Left column: Skills */}
          <Skills />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
