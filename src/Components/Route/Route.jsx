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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/brands')
        },
        {
           path: '/addProduct',
           element: <AddProduct></AddProduct> 
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
          path: '/updateProduct',
          element: <UpdateProduct></UpdateProduct>
        },
        {
          path: '/brandDetails/:brand',
          element: <BrandDetails></BrandDetails>,
          loader: ()=> fetch('http://localhost:5000/brandDetails')
        },
        {
          path: '/cardDetails/:id',
          element: <CardDetails></CardDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/brandDetails/${params.id}`)
        },
        {
          path: '/myCart',
          element: <MyCart></MyCart>,
          loader: ()=> fetch('http://localhost:5000/myCart')
        }
      ]
    },
  ]);
  export default router;