import logo from "./logo.svg";
import "./App.css";

import { Flowbite } from "flowbite-react";
import "flowbite";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Announcement from "./components/assets/Announcement";
import Footer from "./components/Footer";
import MusicSearch from "./components/music/MusicSearch";
function App() {
  return (
    <Router>
      <>
        <Announcement />
        <div className="p-3">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/musicSearch" element={<MusicSearch />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
