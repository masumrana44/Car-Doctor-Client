import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ServicesDetails from "../Pages/Home/Services/ServicesDetails";
import Login from "../Pages/Login/Login";
import Checkout from "../Pages/Home/Services/Checkout.js/Checkout";
import PrivateRoute from "./PrivateRoute";
import Orders from "../Pages/Orders.js/Orders";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services/details/:id",
        element: <ServicesDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/specificservices/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/register",
        element:<Register/>
      }
      ,
      {
        path: "/checkbox/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/specificservices/${params.id}`),
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders/></PrivateRoute>
      }
    ],
  },
]);

export default router;
