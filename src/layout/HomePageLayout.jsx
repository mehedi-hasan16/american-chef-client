import Banner from "../components/Banner/Banner";
import NavigationBar from "../shared/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import ChefArea from "../components/ChefArea/ChefArea";


const HomePageLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <ChefArea></ChefArea>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePageLayout;