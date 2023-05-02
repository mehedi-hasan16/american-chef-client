import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const Login = () => {
    const {userLogin}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const mainLocation = location.state?.from?.pathname ||'/';

    const handleSubmit= event =>{
        event.preventDefault();
        const form= event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogin(email, password)
        .then((result)=>{
            const loggedUser= result.user;
            console.log(loggedUser);
            form.reset();
            navigate(mainLocation , {replace:true})
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }


    return (
        <div className="vh-100">
        <h1 className="text-center my-4">Login your account</h1>
        <Form onSubmit={handleSubmit} className="w-25 mx-auto border rounded p-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button><br />
            <Form.Text>
                Don't have an account? <Link to={'/register'}>Register</Link>
            </Form.Text>
        </Form>
        <div className="d-flex flex-column align-items-center my-2">
            <h4>Or, login with</h4>
           <div className="mb-2"> <Button variant="outline-success"><FaFacebook/> Login with Google</Button></div>
            <div><Button variant="outline-danger"><FaGithub/> Login with GitHub</Button></div>
        </div>
    </div>
    );
};

export default Login;