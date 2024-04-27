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
import Private from "../Private/Private";
import UpdateProduct from "../components/UpdateProduct";
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
        element: (
          <Private>
            <AddArtsCarfts />
          </Private>
        ),
      },
      {
        path: "/allartscrafts",
        element: <AllArtsCarts />,
      },
      {
        path: "/myartscrafts",
        element: (
          <Private>
            <MyArtsCarfts />
          </Private>
        ),
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
        element: (
          <Private>
            <VeiwDetails></VeiwDetails>
          </Private>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
