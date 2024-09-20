import "./App.css";
import Navbar from "./components/Navbar/main.jsx";
import Features from "./components/Features/main.jsx";
import Footer from "./components/Footer/main.jsx";

function FeaturesPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <div className="h-[100px] w-screen"></div>
      <Features />
      <Footer />
    </div>
  );
}

export default FeaturesPage;
