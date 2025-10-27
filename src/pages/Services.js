const ServicesPage = () => {
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

  const softwareList = [
    { name: 'Microsoft Excel', brandClass: 'excel', icon: 'X', logoUrl: '/logos/excel.png' },
    { name: 'QuickBooks', brandClass: 'quickbooks', icon: 'QB', logoUrl: '/logos/quickbooks.png' },
    { name: 'NetSuite', brandClass: 'netsuite', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/09/NetSuite-Logo.png' },
    { name: 'Xero Accounting', brandClass: 'xero', icon: 'X', logoUrl: '/logos/xero.png' },
    { name: 'Zoho Books', brandClass: 'zoho', icon: 'Z', logoUrl: 'https://cdn.worldvectorlogo.com/logos/zoho-1.svg' }
  ];

  return (
    <div className="page-container">
      <section className="services-page">
        <div className="services-page-container">
          <h1>OUR SERVICES</h1>
          <p className="page-subtitle">
            Comprehensive financial services tailored to your business needs
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="software-section">
            <h2>SOFTWARE SOLUTIONS</h2>
            <p className="software-subtitle">
              We work with industry-leading software solutions to deliver the best results for your business.
            </p>
            <div className="software-grid">
              {softwareList.map((software, index) => (
                <div key={index} className="software-card">
                  <div className={`software-logo ${software.brandClass}`}>
                    <div className="logo-inner">
                      {software.logoUrl ? (
                        <img 
                          src={software.logoUrl} 
                          alt={`${software.name} logo`}
                          className="logo-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<span class="logo-text">${software.icon || software.name[0]}</span>`;
                          }}
                        />
                      ) : (
                        <span className="logo-text">{software.icon || software.name[0]}</span>
                      )}
                    </div>
                  </div>
                  <h4>{software.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

