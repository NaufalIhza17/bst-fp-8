export default function AuthButton({
  className = "",
  onClick,
  isPopupVisible,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-5 py-2 ${
        isPopupVisible
          ? "bg-red-300 active:bg-red-500"
          : "bg-slate-300 active:bg-slate-500"
      } rounded-full shadow-xl group ${className}`}
    >
      <span
        className={`uppercase font-bold ${
          isPopupVisible
            ? "text-red-800"
            : "text-primary-blue group-active:text-[#a3aec0]"
        }  w-0 opacity-0 pr-0 transition-all group-hover:w-fit group-hover:opacity-100 group-hover:pr-2`}
      >
        {isPopupVisible ? "Close" : "Login"}
      </span>
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${
            isPopupVisible
              ? "fill-red-800 rotate-180"
              : "fill-primary-blue group-active:fill-[#a3aec0]"
          }`}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8447 8.09467C10.5518 8.38756 10.5518 8.86244 10.8447 9.15533L12.5643 10.875H4.375C3.96079 10.875 3.625 11.2108 3.625 11.625C3.625 12.0392 3.96079 12.375 4.375 12.375H12.5643L10.8447 14.0947C10.5518 14.3876 10.5518 14.8624 10.8447 15.1553C11.1376 15.4482 11.6124 15.4482 11.9053 15.1553L14.9053 12.1553C15.1982 11.8624 15.1982 11.3876 14.9053 11.0947L11.9053 8.09467C11.6124 7.80178 11.1376 7.80178 10.8447 8.09467Z"
            fill="current"
          ></path>{" "}
          <path
            d="M12.375 5.87745C12.375 6.3254 12.6492 6.71725 12.966 7.03401L15.966 10.034C16.8447 10.9127 16.8447 12.3373 15.966 13.216L12.966 16.216C12.6492 16.5327 12.375 16.9246 12.375 17.3726V19.625C16.7933 19.625 20.375 16.0433 20.375 11.625C20.375 7.20672 16.7933 3.625 12.375 3.625V5.87745Z"
            fill="current"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
}
