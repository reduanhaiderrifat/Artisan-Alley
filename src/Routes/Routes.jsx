import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import AddArtsCarfts from "../pages/AddArtsCarfts";
import AllArtsCarts from "../pages/AllArtsCarts";
import MyArtsCarfts from "../pages/MyArtsCarfts";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import VeiwDetails from "../components/VeiwDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addartscrafts",
        element: <AddArtsCarfts />,
      },
      {
        path: "/allartscrafts",
        element: <AllArtsCarts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/myartscrafts",
        element: <MyArtsCarfts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: <VeiwDetails></VeiwDetails>,
      },
    ],
  },
]);

export default router;
