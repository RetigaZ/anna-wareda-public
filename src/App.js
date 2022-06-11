import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import Footer from "./components/Footer";
import Media from "./pages/Media";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Router> */}
      <Home />
      <About />
      <Media />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
