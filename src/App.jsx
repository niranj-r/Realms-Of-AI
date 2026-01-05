import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import RealmsHero from "./pages/RealmsHero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RealmsHero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
