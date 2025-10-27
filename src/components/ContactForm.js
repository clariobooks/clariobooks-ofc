import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using mailto link as fallback
    try {
      // Create mailto link with form data
      const subject = `Contact Form: ${formData.title}`;
      const body = `Name: ${formData.firstName} ${formData.lastName}%0A%0AEmail: ${formData.email}%0A%0APhone: ${formData.phone || 'Not provided'}%0A%0ATitle: ${formData.title}%0A%0AMessage:%0A${formData.message}`;
      
      // For now, open mailto link
      const mailtoLink = `mailto:info@clariobook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Show success message
      setSubmitMessage('Opening your email client...');
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // After a delay, clear and show final message
      setTimeout(() => {
        setSubmitMessage('Thank you for your message! If your email client didn\'t open, please contact us at info@clariobook.com');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          title: '',
          message: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('There was an error. Please contact us directly at info@clariobook.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2>CONNECT WITH US</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : ''}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

