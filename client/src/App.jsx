import { useEffect } from "react";
import Navbar from "./components/navbar/navBar";
import PostCard from "./components/postcard/postCard";

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
    <div className="">
      <Navbar />
      <PostCard />
    </div>
  );
}

export default App;
