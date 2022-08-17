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
import MusicHomePage from "./components/music/MusicHomePage";
import { GenreProvider } from "./components/music/context/GenreContext";
import GenreContext from "./components/music/context/GenreContext";
import PlayListResults from "./components/music/PlayListResults";
import GenreResults from "./components/music/genre/GenreResults";
function App() {
  return (
    <GenreProvider>
      <Router>
        <>
          <Announcement />
          <div className="p-3">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/musicSearch" element={<MusicHomePage />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/radio/:radioID" element={<PlayListResults />} />
                <Route path="/genre/:genreId" element={<GenreResults />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </>
      </Router>
    </GenreProvider>
  );
}

export default App;
