import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FruitsPage from "./components/FruitsPage/FruitsPage";
import DiaryPage from "./components/DiaryPage/DiaryPage";
import NonVeg from "./components/NvegPage/NvegPage";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Values from "./components/Values/Values";
import LikePage from "./components/LikePage/LikePage";
import ContactUs from "./components/ContactUs/ContactUs";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path : '/',
          element : <Home/>
        },
        {
          path: "/fruits",
          element: <FruitsPage />,
        },
        {
          path: "/diary",
          element: <DiaryPage />,
        },
        {
          path: "/nonveg",
          element: <NonVeg />,
        },
        {
          path: "/allproduct",
          element: <AllProducts />,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/about",
          element: <Values/>,
        },
        {
          path: "/likepage",
          element: <LikePage/>,
        },
        {
          path: "/contactus",
          element: <ContactUs/>,
        },
        {
          path: "/signin",
          element: <SignIn/>,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
