import { useEffect } from "react";
import NavBar from "./components/navBar";

//Checks for system theme
function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  return <NavBar />;
}

export default App;
