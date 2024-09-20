import { logout } from "../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogoutButton({ className = "" }) {
  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => window.location.reload(),
    });
  };
  return (
    <button
      onClick={handleLogout}
      className={`flex items-center px-6 py-3 bg-yellow-300 active:bg-yellow-500 rounded-full shadow-xl group ${className}`}
    >
      <svg
        fill="current"
        height="28px"
        width="28px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.025 512.025"
        className="fill-yellow-800"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M177.646,179.831c-3.349-29.547-26.752-51.819-54.4-51.819H68.782c-27.648,0-51.051,22.272-54.4,51.819L0.238,303.735 c-1.173,10.368,2.027,20.651,8.768,28.224c5.803,6.528,13.547,10.304,21.909,10.773l11.776,159.403 c0.448,5.568,5.077,9.877,10.667,9.877h85.333c5.589,0,10.219-4.309,10.645-9.877l11.776-159.403 c8.384-0.469,16.107-4.267,21.909-10.773c6.741-7.552,9.941-17.856,8.768-28.224L177.646,179.831z"></path>{" "}
                <path d="M96.025,106.679c29.461,0,53.333-23.872,53.333-53.333c0-29.461-23.893-53.333-53.333-53.333 c-29.461,0-53.333,23.872-53.333,53.333C42.691,82.807,66.563,106.679,96.025,106.679z"></path>{" "}
                <path d="M354.564,20.471c4.651-1.984,7.253-6.997,6.251-11.947c-1.024-4.949-5.397-8.512-10.453-8.512H245.358 c-17.643,0-32,14.357-32,32v384c0,17.643,14.357,32,32,32h21.333c5.888,0,10.667-4.779,10.667-10.667V98.018 c0-26.987,16.043-51.307,40.853-61.952L354.564,20.471z"></path>{" "}
                <path d="M465.966,0.012c-6.293,0-12.395,1.259-18.176,3.733L326.595,55.692c-16.939,7.253-27.904,23.872-27.904,42.325v367.936 c0,25.387,20.672,46.059,46.059,46.059c6.293,0,12.395-1.259,18.176-3.733l121.195-51.947 c16.939-7.253,27.904-23.872,27.904-42.325V46.071C512.025,20.684,491.353,0.012,465.966,0.012z M362.691,288.012 c0,5.888-4.779,10.667-10.667,10.667c-5.888,0-10.667-4.779-10.667-10.667v-42.667c0-5.888,4.779-10.667,10.667-10.667 c5.888,0,10.667,4.779,10.667,10.667V288.012z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  );
}
