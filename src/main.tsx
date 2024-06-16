import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import store from "./stores/store";
import CarInfoPage from "./pages/CarInfoPage/CarInfoPage";
import ComparisonPage from "./pages/ComparisonPage/ComparisonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/car/:carId",
    element: <CarInfoPage />,
  },
  {
    path: "/compare/:carId1/:carId2",
    element: <ComparisonPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
