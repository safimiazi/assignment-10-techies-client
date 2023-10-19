import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyCart from "../../Pages/MyCart/MyCart";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";
import BrandDetails from "../../Pages/BrandDetails/BrandDetails";
import CardDetails from "../../Pages/CardDetails/CardDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/brands')
        },
        {
           path: '/addProduct',
           element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/updateProduct/:id',
          element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/brandDetails/${params.id}`)
        },
        {
          path: '/brandDetails/:brand',
          element: <BrandDetails></BrandDetails>,
          loader: ()=> fetch('http://localhost:5000/brandDetails')
        },
        {
          path: '/cardDetails/:id',
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/brandDetails/${params.id}`)
        },
        {
          path: '/myCart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: ()=> fetch('http://localhost:5000/myCart')
        }
      ]
    },
  ]);
  export default router;