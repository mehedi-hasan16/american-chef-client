import { Outlet } from "react-router-dom";
import NavigationBar from "../shared/NavigationBar/NavigationBar";


const ChefDetailsLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default ChefDetailsLayout;