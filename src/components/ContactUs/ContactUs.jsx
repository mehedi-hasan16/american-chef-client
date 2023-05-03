import { Col, Row } from "react-bootstrap";
import contactImg from '../../assets/contact.jpg'


const ContactUs = () => {
    return (
        <div className="my-4 container">
      <h2 className="mb-4 text-center">Contact With Us</h2>
      <Row xs={1} md={2}>
                <Col>
                <img className="img-fluid rounded border" src={contactImg} alt="" />
                </Col>
                <Col>
                <form className="border p-4 rounded">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required placeholder="Enter Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required placeholder="Enter Your Email" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required placeholder="Write your message here..." />
        </div>
        <button className="btn btn-danger" type="submit">
          Submit
        </button>
      </form>
                </Col>
            </Row>
      
    </div>  
    );
};

export default ContactUs;