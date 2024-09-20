import "./App.css";
import Navbar from "./components/Navbar/main.jsx";
import Reviews from "./components/Reviews/main.jsx";
import Footer from "./components/Footer/main.jsx";

function ReviewsPage() {
  return (
    <>
      <Navbar />
      <div className="h-[100px] w-screen"></div>
      <Reviews />
      <Footer />
    </>
  );
}

export default ReviewsPage;
