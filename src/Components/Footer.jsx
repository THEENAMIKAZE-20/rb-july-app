
import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#121212', color: '#f1f1f1' }}>

      <div className="container-fluid p-4">


<div className="row">

  {/* About Section */}
  <div className="col-md-5 mb-3">
    <h3>AI rBuilder</h3>

    <p>
      AI rBuilder helps job seekers create 
      professional resumes quickly and easily.
       It suggests usefulkeywords and skills to
        make resumes better.
    </p>
  </div>

  {/* Contact Section */}
  <div className="col-md-2 offset-md-4 mb-3">
    <h4>Contact Us</h4>

    <p>Email: resumebuilder@gmail.com</p>
    <p>Phone: 9087654321</p>

    <h4>Connect With Us</h4>

    <a href="https://www.instagram.com/"
       className="text-white me-3  text-decoration-none">
      Instagram
    </a>

    <a href="https://www.facebook.com/"
       className="text-white me-3  text-decoration-none">
      Facebook
    </a>

    <a href="https://www.whatsapp.com/"
       className="text-white  text-decoration-none">
      WhatsApp
    </a>
  </div>

</div>

        <hr />

        <div className="text-center">
          <p>Designed and built with ❤️ using React</p>
          <small>© 2026 AI rBuilder. All rights reserved.</small>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
