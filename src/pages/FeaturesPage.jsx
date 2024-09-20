import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "../App.css";

import Navbar from "../sections/NavbarSections.jsx";
import Features from "../sections/FeaturesSections.jsx";
import Footer from "../sections/FooterSections.jsx";
import AuthButton from "../components/AuthButton.jsx";
import LogoutButton from "../components/LogoutButton.jsx";
import PopupForm from "../components/PopupForm.jsx";
import { checkLoginStatus } from "../services/authService";

function FeaturesPage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible((prevState) => !prevState);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      const loggedIn = await checkLoginStatus();
      setIsLoggedIn(loggedIn);
    };

    fetchLoginStatus();
  }, []);
  return (
    <div className="relative w-full overflow-hidden">
      <ToastContainer />
      <AuthButton
        className="fixed bottom-5 left-3 z-50"
        onClick={togglePopup}
        isPopupVisible={isPopupVisible}
      />
      {isLoggedIn && <LogoutButton className="fixed bottom-5 right-3 z-50" />}
      <Navbar />
      <div className="h-[100px] w-screen"></div>
      <Features />
      <Footer />
      {isPopupVisible && <PopupForm />}
    </div>
  );
}

export default FeaturesPage;
