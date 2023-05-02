import { Button, Form } from "react-bootstrap";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="vh-100">
        <h1 className="text-center my-4">Login your account</h1>
        <Form  className="w-25 mx-auto border rounded p-4">
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