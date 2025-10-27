const Advantage = () => {
  const advantages = [
    {
      title: 'PERSONALIZED SERVICES',
      description: 'Experience personalized financial solutions designed to meet your unique needs and drive your financial success.',
      icon: '🎯'
    },
    {
      title: 'CLIENT-CENTRIC APPROACH',
      description: 'Our client-centric approach ensures that your financial goals and aspirations are at the heart of our tailored strategies and services.',
      icon: '🤝'
    },
    {
      title: 'PRECISION AND CARE',
      description: 'We are dedicated to delivering precision and care in every aspect of your financial journey, ensuring that your goals are met with expert guidance and support.',
      icon: '✨'
    },
    {
      title: 'PROVEN RESULTS',
      description: 'Our track record of success demonstrates our ability to deliver tangible results and drive financial success for our clients.',
      icon: '🏆'
    }
  ];

  return (
    <section className="advantage">
      <div className="advantage-container">
        <h2>THE CLARIO BOOKS ADVANTAGE</h2>
        <p className="advantage-subtitle">
          Discover a tailored approach to financial success with our expert guidance 
          and client-focused strategies, setting us apart in the financial advisory field.
        </p>
        <div className="advantage-grid">
          {advantages.map((item, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;

