import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar/navBar";
import HomePage from "./pages/homePage";
import PostPage from "./pages/postPage";
import Sidebar from "./components/sidebar/Sidebar";

//Checks for system theme
function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {<Route path="/post/:id" element={<PostPage />} />}
      </Routes>
    </Router>
  );
}

export default App;
