import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Tentang from "./pages/tentang";
import Struktur from "./pages/struktur";
import EventPage from "./pages/eventpage";
import Kontak from "./pages/kontak";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/struktur" element={<Struktur />} />
        <Route
          path="/event" element={<EventPage/>}
        />
        <Route
          path="/kontak"
          element={<Kontak/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
