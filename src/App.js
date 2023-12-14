import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Navbar";



function App() {
    return(
        <div>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Resume />
        </div>
    );
}
export default App;