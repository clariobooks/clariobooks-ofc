const Testimonials = () => {
  const testimonials = [
    {
      text: "Clario books Financial Consultants transformed our financial strategy, providing invaluable insights that significantly improved our bottom line.",
      author: "John Doe"
    },
    {
      text: "Their personalized approach and attention to detail in financial records management have been instrumental in streamlining our financial operations.",
      author: "Emily Smith"
    },
    {
      text: "Clario books commitment to client success is unparalleled. Their expert guidance has been pivotal in our financial decision-making.",
      author: "David Brown"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>CLIENT SUCCESS STORIES</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

