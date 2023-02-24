import "../App.css";

function Contact() {
  return (
    <div className="contact">
      <h1>send me a message</h1>
      <p>
        Got a question or proposal, or just want to say hello? Go ahead.
        <br />
        <br />
        Available for freelance oportunity or full time job.
      </p>
      <div className="contacts">
        <p style={{ color: "white", marginTop: "50px" }}>
          kalaya.chatelain@gmail.com
        </p>
      </div>
      <div>
        <form id="contact-form" method="POST">
          <div className="top-form">
            <div className="form-group top">
              <label htmlFor="name">First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group bottom">
              <label htmlFor="name">Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Write a message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <p className="made">
        © 2023 by KALAYA CHATELAIN
        <br />
        Made with React
      </p>
    </div>
  );
}

export default Contact;
