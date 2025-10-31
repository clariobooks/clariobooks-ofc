import { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setSubmitMessage("Please enter a short message before sending.");
      return;
    }

    setIsSubmitting(true);

    try {
      const subject = "Message from Clario Books Website";
      const body = `${message}\n\n— Sent from Clario Books Contact Form`;

      // Direct mailto trigger
      const mailtoLink = `mailto:info@clariobook.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open in user's email app
      window.location.href = mailtoLink;

      setSubmitMessage("Opening your email client...");
      setTimeout(() => {
        setSubmitMessage(
          "If your email client didn’t open, please contact us directly at info@clariobook.com."
        );
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage(
        "Something went wrong. Please email us directly at info@clariobook.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2>Send a Quick Message</h2>
        <p className="contact-subtext">
          Have a question or need assistance? Send us a short note below, and
          we’ll get back to you.
        </p>
        <form onSubmit={handleSubmit} className="contact-form short-form">
          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              placeholder="Write your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitMessage && (
            <div
              className={`submit-message ${
                submitMessage.includes("Opening") ? "info" : "success"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
