const About = () => {
  return (
    <div className="page-container about">
      <section className="about-page">
        <div className="about-container">
          <h1>About CLARIO BOOKS</h1>
          
          <div className="about-content">
            <div className="about-section">
              <h2>OUR COMMITMENT</h2>
              <p>
                At CLARIO BOOKS we are committed to providing accurate, timely, and trustworthy 
                bookkeeping services that help your business grow with confidence. We handle every 
                detail with integrity, confidentiality, and care ensuring your financial records 
                are always clear and dependable.
              </p>
              <p>
                Our goal is to make bookkeeping simple and stress-free, so you can focus on running 
                your business. Your trust drives our commitment, and your success is our top priority.
              </p>
            </div>

            <div className="about-section">
              <h2>FINANCIAL IMPACT</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">CLIENTS SERVED</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">SUCCESS RATE</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">YEARS OF EXPERIENCE</div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>THE CLARIO BOOKS ADVANTAGE</h2>
              <div className="advantage-grid">
                <div className="advantage-card">
                  <div className="advantage-icon">🎯</div>
                  <h3>PERSONALIZED SERVICES</h3>
                  <p>Experience personalized financial solutions designed to meet your unique needs and drive your financial success.</p>
                </div>
                <div className="advantage-card">
                  <div className="advantage-icon">🤝</div>
                  <h3>CLIENT-CENTRIC APPROACH</h3>
                  <p>Our client-centric approach ensures that your financial goals and aspirations are at the heart of our tailored strategies and services.</p>
                </div>
                <div className="advantage-card">
                  <div className="advantage-icon">✨</div>
                  <h3>PRECISION AND CARE</h3>
                  <p>We are dedicated to delivering precision and care in every aspect of your financial journey, ensuring that your goals are met with expert guidance and support.</p>
                </div>
                <div className="advantage-card">
                  <div className="advantage-icon">🏆</div>
                  <h3>PROVEN RESULTS</h3>
                  <p>Our track record of success demonstrates our ability to deliver tangible results and drive financial success for our clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

