import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import ChefArea from "../components/ChefArea/ChefArea";
import ChefDetailsLayout from "../layout/ChefDetailsLayout";
import ChefDetails from "../components/ChefDetails/ChefDetails";

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
  ]);
  export default router;