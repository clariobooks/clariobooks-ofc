import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="page-container contact">
      <section className="contact-page">
        <div className="contact-page-container">
          <div className="contact-info">
            <h1>CONNECT WITH US</h1>
            <p className="page-subtitle">
              Get in touch with our team to discuss how we can help your business succeed.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>92 321 2918754</p>
              </div>
              
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>Business: info@clariobook.com<br />Gmail: Clariobooks@gmail.com</p>
              </div>
              
              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>500 Terry Francine St.<br />San Francisco, CA 94158</p>
              </div>
              
              <div className="contact-item">
                <h3>🕒 Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

