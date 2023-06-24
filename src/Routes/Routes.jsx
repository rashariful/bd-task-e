import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/Dashboard/AddProduct/AddProduct";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import MyProducts from "../Components/Dashboard/MyProducts/MyProducts";
import AddToCart from "../Components/Pages/AddToCart/AddToCart";
import Blogs from "../Components/Pages/Blogs/Blogs";
import BigDeals from "../Components/Pages/Home/Campaign/Dicount/BigDeals/BigDeals";
import Discount from "../Components/Pages/Home/Campaign/Dicount/Discount";
import Home from "../Components/Pages/Home/Home/Home";
import ProductDetails from "../Components/Pages/Home/ProductDetails/ProductDetails";
import Login from "../Components/Pages/Login/Login";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Register from "../Components/Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/card",
        element: (
          <PrivateRoute>
            <AddToCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => {
          return fetch(`https://dummyjson.com/products/${params.id}`);
        },
      },
      {
        path: "/discount",
        element: <Discount></Discount>,
        loader: () => fetch("https://fakestoreapi.com/products"),
      },
      {
        path: "/big-deal",
        element: <BigDeals></BigDeals>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts></MyProducts>,
        loader: () => fetch("http://localhost:5000/products"),
      },
    ],
  },
]);

export default router