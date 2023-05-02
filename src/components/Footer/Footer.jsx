import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-dark">
            <footer className="page-footer font-small blue pt-4 text-white container">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h3>American Chef</h3>
                            <p>Provide recipes and cooking tips, offer information about their restaurants or food products, and possibly feature articles or videos related to food and cooking.</p>
                            <FaFacebook className="me-4 fs-2"></FaFacebook>
                            <FaInstagram className="me-4 fs-2"></FaInstagram>
                            <FaYoutube className="me-4 fs-2"></FaYoutube>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Help</h5>
                            <ul className="list-unstyled">
                                <li><a className="text-white text-decoration-none" href="#!">Support</a></li>
                                <li><a className="text-white text-decoration-none" href="#!">Login</a></li>
                                <li><a className="text-white text-decoration-none" href="#!">Sign up</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a className="text-white text-decoration-none" href="#!">About Us</a></li>
                                <li><a className="text-white text-decoration-none" href="#!">Contact</a></li>
                                <li><a className="text-white text-decoration-none" href="#!">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-4">© 2020 Copyright: Mehedi Hasan</div>

            </footer>
        </div>
    );
};

export default Footer;