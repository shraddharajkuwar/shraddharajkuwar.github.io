import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.tsx";
import Work from "./pages/Work.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/Footer.tsx";
import YardMap from "./pages/YardMap.tsx";
import MultiChatAI from "./pages/MultiChatAI.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
// @ts-ignore: side-effect import for SCSS without type declarations
import "./style/Global.scss";
import KidsLearning from "./pages/KidsLearnig.tsx";

const App = () => {
  return (
 <>
  <Navbar />

  <ScrollToTop />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/work" element={<Work />} />
    <Route path="/about" element={<About />} />
    <Route path="/yardmap" element={<YardMap />} />
    <Route path="/multichat-ai" element={<MultiChatAI />} />
    <Route path="/kidsLearning" element={<KidsLearning />} />
  </Routes>

  <Footer />
</>
  );
};

export default App;
