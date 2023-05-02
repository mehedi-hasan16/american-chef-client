

const ContactUs = () => {
    return (
        <div className="w-50 my-4 mx-auto">
      <h2 className="mb-3 text-center">Contact With Us</h2>
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
    </div>
              
    );
};

export default ContactUs;