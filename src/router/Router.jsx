import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import ChefArea from "../components/ChefArea/ChefArea";
import ChefDetailsLayout from "../layout/ChefDetailsLayout";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import VerifiLayout from "../layout/VerifiLayout";
import Login from "../components/UserVerifi/Login/Login";
import Register from "../components/UserVerifi/Register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageLayout/>,
    children: [
        {
            path: '/',
            element:<ChefArea></ChefArea>,
            loader: () => fetch(`http://localhost:5000/chef`)
        }
    ]
},
  {
    path: '/chef',
    element: <ChefDetailsLayout></ChefDetailsLayout>,
    children: [
        {
            path: '/chef/:id',
            element:<ChefDetails></ChefDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`),
            
        }
    ]
},
{
  path: '/',
  element: <VerifiLayout></VerifiLayout>,
  children: [
      {
          path: '/login',
          element:<Login></Login>,
      },
      {
          path: '/register',
          element:<Register></Register>,
      }
  ]
},
  ]);
  export default router;