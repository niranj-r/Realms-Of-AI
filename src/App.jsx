import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Countdown from "./pages/Countdown";
import Events from "./pages/Events";
import NeuralCanvas from "./pages/NeuralCanvas";
import ThinkTrace from "./pages/ThinkTrace";
import ScriptShift from "./pages/ScriptShift";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Define the main page route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Countdown />
              <Events />
            </>
          }
        />

        {/* Define the dedicated sub-page route */}
        <Route path="/neural-canvas" element={<NeuralCanvas />} />
        <Route path="/think-trace" element={<ThinkTrace />} />
        <Route path="/script-shift" element={<ScriptShift />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;