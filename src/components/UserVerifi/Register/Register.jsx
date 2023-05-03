import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [accecpted, setACcecpted] = useState(false);
    const [error, setError] = useState([])

    const handleRegister = event =>{
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.fullName.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(photoUrl, name, email, password);

        createUser(email, password)
        .then((result)=>{
            form.reset();
            updateUser(result.user, name, photoUrl)
            toast("Account Created Successfull")
        })
        .catch((error)=>{
            setError(error.message);
        })
       
       
    }
    const updateUser=(user, name, photoUrl) =>{
        updateProfile(user,{
            displayName: name,
            photoURL: photoUrl,
        })
        .then(()=>{
        })
        .catch((error)=>{
            setError(error.message);
        })
    }

    const handleTerm = event =>{
        const checked = event.target.checked;
        setACcecpted(checked)
    }



    return (
        <div className="vh-100">
            <h1 className="text-center my-4">Register your account</h1>
           <Form onSubmit={handleRegister} className="w-25 mx-auto border rounded p-4">
           <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoUrl" placeholder="Please valid Photo URL" required />
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
                    <Form.Check onClick={handleTerm} type="checkbox" label="Accecpt term & conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accecpted} >Register</Button><br />
                <Form.Text>
                    Already have an Account? <Link to={'/login'}>Login</Link>
                    <div className="text-center text-danger">{error}</div>
                    <ToastContainer
                    position="top-center" />
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;