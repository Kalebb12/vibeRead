import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import GenerateAudio from "./pages/GenerateAudio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/generate" element={<GenerateAudio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
