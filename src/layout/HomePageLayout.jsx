import Banner from "../components/Banner/Banner";
import NavigationBar from "../shared/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import TopRatedFood from "../components/TopRatedFood/TopRatedFood";
import ContactUs from "../components/ContactUs/ContactUs";


const HomePageLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <TopRatedFood></TopRatedFood>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePageLayout;