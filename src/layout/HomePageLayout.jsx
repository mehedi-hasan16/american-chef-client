import Banner from "../components/Banner/Banner";
import NavigationBar from "../shared/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";


const HomePageLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePageLayout;