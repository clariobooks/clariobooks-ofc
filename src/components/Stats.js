const Stats = () => {
  const statsData = [
    { number: '50+', label: 'CLIENTS SERVED', desc: 'FINANCIAL IMPACT' },
    { number: '99%', label: 'SUCCESS RATE', desc: 'FINANCIAL IMPACT' },
    { number: '4+', label: 'YEARS OF EXPERIENCE', desc: 'FINANCIAL IMPACT' }
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        <h2 className="section-title">FINANCIAL IMPACT</h2>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

