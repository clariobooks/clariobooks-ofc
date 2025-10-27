const Commitment = () => {
  return (
    <section className="commitment">
      <div className="commitment-container">
        <div className="commitment-content">
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
        <div className="commitment-image">
          <div className="stats-visualization">
            <div className="stat-box">
              <div className="stat-label">Accuracy</div>
              <div className="stat-bar-container">
                <div className="stat-bar stat-bar-99"></div>
                <span className="stat-value">99%</span>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Client Satisfaction</div>
              <div className="stat-bar-container">
                <div className="stat-bar stat-bar-98"></div>
                <span className="stat-value">98%</span>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-label">On-Time Delivery</div>
              <div className="stat-bar-container">
                <div className="stat-bar stat-bar-96"></div>
                <span className="stat-value">96%</span>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Data Security</div>
              <div className="stat-bar-container">
                <div className="stat-bar stat-bar-100"></div>
                <span className="stat-value">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;

