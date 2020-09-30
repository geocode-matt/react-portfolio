import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact(props) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email address');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
      <section className="about">
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="contact-section">
            <div className="text-block">
                Questions or business inquiries? <br></br>Use the form or contact me via
                <a href="mailto:mlindenx@gmail.com" className="contact-text"> email</a> or
                <a href="tel:817-575-9370" className="contact-text"> phone</a>.
            </div>
            <div id="form-container">
        <form className="justify-content-center" id="contact-form">
          <div className="form-input">
              <input className="form-control" placeholder="Name" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
          </div>
          <div className="form-input">
              <input className="form-control" placeholder="Email Address" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="form-input">
              <textarea className="form-control" placeholder="Message" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
          </div> 
          {errorMessage && (
          <div className="error-msg">
              <p className="error-text">{errorMessage}</p>
          </div>
          )}

          <div className="button-container">
          <button data-testid='button' className="btn mt-4" type="submit" onSubmit={handleSubmit}>Send</button>
          </div>
      </form>
        </div>
      </div>  
      </div>
    </section>
    )
    }

export default Contact;


