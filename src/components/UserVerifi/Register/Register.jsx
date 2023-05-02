import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="vh-100">
            <h1 className="text-center my-4">Register your account</h1>
           <Form className="w-25 mx-auto border rounded p-4">
           <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoUrl" placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accecpt term & conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" >Register</Button><br />
                <Form.Text>
                    Already have an Account? <Link to={'/login'}>Login</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;