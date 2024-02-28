import React from "react";
import NavBar from "./components/nav-bar/nav-bar";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Auth from "./pages/login-auth/auth";
import Login from "./pages/login-auth/login";
import Reset from "./pages/login-auth/reset";
import Themes from "./pages/themes-page/themes";
import NewMessages from "./pages/themes-list/new-messages";
import MyThemes from "./pages/themes-list/my-themes";
import MyThemesMes from "./pages/themes-list/my-themes-messages";
import ThemesWith from "./pages/themes-list/themes-with";
import TrackedThemes from "./pages/themes-list/tracked-themes";
import Shops from "./pages/themes-list/shops";


function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      {location.pathname !== "/auth" &&
      location.pathname !== "/login" &&
      location.pathname !== "/reset" ? (
        <NavBar />
      ) : (
        ""
      )}

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

          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/themes" element={<Themes />} />

          {/*  */}
          <Route path="/new-messages" element={<NewMessages />} />
          <Route path="/my-themes" element={<MyThemes />} />
          <Route path="/my-theme-messages" element={<MyThemesMes />} />
          <Route path="/theme-without-answer" element={<ThemesWith />} />
          <Route path="/tracked-themes" element={<TrackedThemes />} />
          <Route path="/shops" element={<Shops />} />


          
        </Routes>
      </div>
    </div>
  );
}

export default App;
