import {Routes, Route} from "react-router-dom";
import About from "./Components/Main/About";
import Blog from "./Components/Main/Blog";
import Contact from "./Components/Main/Contact";
import Home from "./Components/Main/Home";
import Navbar from "./Components/Main/Navbar";
import Team from "./Components//Main/Reels/Reels";

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/blog" element={ <Blog /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
    </>
  );
}

export default App;
