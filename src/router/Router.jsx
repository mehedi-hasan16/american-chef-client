import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ChefDetails from "../components/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path:'/chef/:id',
          element:<ChefDetails></ChefDetails>
        }
      ]
    },
  ]);
  export default router;