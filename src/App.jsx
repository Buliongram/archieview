import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Workings from "./pages/Workings";
import Resources from "./pages/Resources";
function App() {
  function HomepageLayout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <HomepageLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/how-it-works",
          element: <Workings />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/resources",
          element: <Resources />,
        },
      ],
    },
  ]);
  return <RouterProvider router={pageRoutes}></RouterProvider>;
}

export default App;
