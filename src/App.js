import React from "react";
import NavBar from "./components/nav-bar/nav-bar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import ProfilePage from "./pages/profile-page/profile";
import NotesPage from "./pages/notes-page/notes-page";
import TheShopsPage from "./pages/the-shops-page/the-shops-page";
import MailsPage from "./pages/mails-page/mails-page";
import UserPage from "./pages/user-page/user-page";
import ThemesList from "./pages/themes-page/themes-list";
import CreateTheme from "./pages/themes-page/create-theme";
import ThemesSearch from "./pages/themes-page/theme-search";
import NameShopPage from "./pages/name-shop-page/name-shop-page";

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
          <Route path="/mails" element={<MailsPage />} />
          <Route path="/user/*" element={<UserPage />} />
          <Route path="/themes-list" element={<ThemesList />} />
          <Route path="/create-theme" element={<CreateTheme />} />
          <Route path="/theme-search" element={<ThemesSearch />} />
          <Route path="/name-of-shop" element={<NameShopPage />} />

          

        </Routes>
      </div>
    </div>
  );
}

export default App;
