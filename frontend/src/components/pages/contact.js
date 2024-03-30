import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

//components  
import NavBar from '../nav-bar/nav-bar';

class Contact extends Component {
    

  render() {
    return (
        <div className="contact-page">
            <NavBar page="contact"/>
            <div className="contact-container">
                <h2>Contact</h2>
                <h3>jigyashusingh01@gmail.com</h3>
                <h4>9570966844</h4>
            </div>
        </div>
    );
  }
}

export default Contact;