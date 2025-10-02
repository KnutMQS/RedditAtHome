import { useEffect } from "react";
import Navbar from "./components/Navbar";

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
    <>
      <Navbar />
    </>
  );
}

export default App;
