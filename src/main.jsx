import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./Routes/ErrorPage.jsx";
import Ticket from "./Routes/Ticket.jsx";
import Support from "./Routes/Support.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Hotels from "./Routes/Hotels.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hotels",
    element: <Hotels text1="бронируют" text2="шикарные" text3="отели" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/support",
    element: <Support />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
