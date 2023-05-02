import { Outlet } from "react-router-dom";
import NavigationBar from "../shared/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";


const VerifiLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default VerifiLayout;