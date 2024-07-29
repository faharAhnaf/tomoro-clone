import {createBrowserRouter, RouterProvider} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import LandingPage from "./components/pages/LandingPage.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage></LandingPage>,
    },
    {
      path: "/about",
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)