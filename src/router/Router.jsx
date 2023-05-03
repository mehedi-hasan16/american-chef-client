import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import ChefArea from "../components/ChefArea/ChefArea";
import ChefDetailsLayout from "../layout/ChefDetailsLayout";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import VerifiLayout from "../layout/VerifiLayout";
import Login from "../components/UserVerifi/Login/Login";
import Register from "../components/UserVerifi/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog/Blog";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <HomePageLayout/>,
    children: [
        {
            path: '/',
            element:<ChefArea></ChefArea>,
            loader: () => fetch(`https://american-recipe-server.vercel.app/chef`)
        }
    ]
  },
  {
    path: '/chef',
    element: <ChefDetailsLayout></ChefDetailsLayout>,
    children: [
        {
            path: '/chef/:id',
            element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://american-recipe-server.vercel.app/chef/${params.id}`),
            
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
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
        loader:()=> fetch('https://american-recipe-server.vercel.app/blog')
      }
  ]
  },
  {
    path:'*',
    element:<NotFound></NotFound>
  }
  ]);
  export default router;