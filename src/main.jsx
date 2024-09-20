import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage.jsx";
import ReviewsPage from "./ReviewsPage.jsx";
import FeaturesPage from "./FeaturesPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/reviews",
    element: <ReviewsPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
