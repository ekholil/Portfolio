
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r5jsgdl', 'template_64cabir', form.current, 'user_RIZyWThHzf2HjC8U57uvt')
      .then((result) => {
          if(result.text == 'OK'){
            alert('Thank you. We received your message')
            console.log(form.current)
          }
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="container">
     <div className="row">
       <div className="col-md-6">
       <form ref={form} onSubmit={sendEmail}>
        <h1 className="text-success text-center mt-4">Contact With me</h1>
      <label>Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label>Email</label>
      <input className="form-control" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="form-control" name="message" /> <br />
      <input className="form-control btn btn-success" type="submit" value="Send" />
    </form>
       </div>
     </div>
    </div>
  );
};

export default Contact;
