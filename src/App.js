import React from "react";
import NavBar from "./components/nav-bar/nav-bar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import ProfilePage from "./pages/profile-page/profile";
import NotesPage from "./pages/notes-page/notes-page";
import TheShopsPage from "./pages/the-shops-page/the-shops-page";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page_content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/the-shops" element={<TheShopsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
