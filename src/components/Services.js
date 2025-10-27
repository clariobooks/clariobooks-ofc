const Services = () => {
  const services = [
    {
      title: 'ACCOUNTING & BOOKKEEPING',
      description: 'We provide accurate, reliable, and transparent accounting and bookkeeping services. With integrity and professionalism, we ensure your financial records are clear, compliant, and ready to support your business growth.',
      icon: '💼'
    },
    {
      title: 'DOCUMENT TRACKING',
      description: 'We maintain a secure and organized document tracking system to ensure all financial records are accurately managed and easily accessible. Every document is handled with confidentiality and care, giving our clients confidence in the integrity of their data.',
      icon: '📊'
    },
    {
      title: 'AR & AP SOLUTIONS',
      description: 'We provide efficient Accounts Receivable and Accounts Payable solutions to help businesses maintain healthy cash flow and financial control. Our team ensures timely invoicing, accurate payments, and organized record management giving you clear visibility into your finances and peace of mind in every transaction.',
      icon: '💳'
    },
    {
      title: 'PAYROLL SOLUTIONS',
      description: 'Efficient and accurate payroll solutions to ensure smooth operations, compliance, and timely processing for your business.',
      icon: '💰'
    },
    {
      title: 'TAX PREPARATION',
      description: 'We offer accurate and timely tax preparation services to help you stay compliant and maximize your savings. Our team ensures every detail is handled with care, so you can file with confidence and focus on growing your business.',
      icon: '📝'
    },
    {
      title: 'PERFORMANCE ANALYTICS',
      description: 'We provide insightful performance analytics to help you understand your financial trends and make data-driven decisions. Our detailed reports and analysis turn numbers into clear strategies that enhance efficiency, profitability, and growth.',
      icon: '📈'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="section-title">FINANCIAL STRATEGY</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

