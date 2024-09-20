import "./App.css";
import Navbar from "./components/Navbar/main.jsx";
import Hero from "./components/Hero/main.jsx";
import Footer from "./components/Footer/main.jsx";
import Versatile from "./components/Versatile/main.jsx";
import Upgrade from "./components/Upgrade/main.jsx";


function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <div className="h-[100px] w-screen"></div>
      <Hero />
      <Versatile />
      <Upgrade />
      <Footer />
    </div>
  );
}

export default App;
