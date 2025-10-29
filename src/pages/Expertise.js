import { useState } from 'react';

const Expertise = () => {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      title: 'SMART BOOKKEEPING',
      description: 'WE HANDLE YOUR DAY TO DAY FINANCES WITH ACCURACY AND CARE SO YOU CAN FOCUS ON GROWING YOUR BUSINESS WHILE WE KEEP YOUR BOOKS BALANCED',
      icon: '📊'
    },
    {
      title: 'INSIGHTFUL REPORTING',
      description: 'Get clear, easy to understand financial reports that give you real insight into your performance helping you make confident business decisions.',
      icon: '📈'
    },
    {
      title: 'PAYROLL & COMPLIANCE',
      description: 'From salary processing to tax submissions, we manage it all smoothly and on time, ensuring you stay compliant without the stress.',
      icon: '💰'
    },
    {
      title: 'FINANCIAL PLANNING',
      description: 'We go beyond numbers — helping you plan budgets, forecast growth, and set financial goals that align with your vision.',
      icon: '🎯'
    }
  ];

  const industries = [
    {
      title: 'REAL ESTATE',
      description: 'Bookkeeping helps track property transactions, rental income, mortgage payments, and expenses for property maintenance, ensuring accurate financial reporting.',
      icon: '🏠'
    },
    {
      title: 'COSMETICS',
      description: 'Businesses need bookkeeping to manage inventory, production costs, sales, and marketing expenses, helping maintain profitability.',
      icon: '💄'
    },
    {
      title: 'E-COMMERCE',
      description: 'Online stores require bookkeeping for sales tracking, payment processing, refunds, taxes, and inventory management.',
      icon: '🛒'
    },
    {
      title: 'RETAIL & MANUFACTURING',
      description: 'Bookkeeping is essential to monitor production costs, inventory, supplier payments, payroll, and retail sales for smooth operations.',
      icon: '🏭'
    },
    {
      title: 'FOOD INDUSTRY',
      description: 'Restaurants, bakeries, and food producers need bookkeeping for inventory, ingredient costs, payroll, sales tracking, and compliance with food industry regulations.',
      icon: '🍽️'
    },
    {
      title: 'HEALTH CARE',
      description: 'Clinics, hospitals, and private practices rely on bookkeeping to manage patient billing, insurance claims, payroll, and operational expenses accurately.',
      icon: '🏥'
    }
  ];

  return (
    <div className="page-container">
      <section className="expertise-page">
        <div className="expertise-page-container">
          <h1 className="page-title">
            <img
              className="title-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfgyw65QspHqXhNsnNMjfkj7h9MVBaF-tJQ&s"
              alt="Our Expertise"
            />
            OUR EXPERTISE
          </h1>
          
          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab ${activeTab === 'services' ? 'active' : ''}`}
                onClick={() => setActiveTab('services')}
              >
                Services
              </button>
              <button
                className={`tab ${activeTab === 'industry' ? 'active' : ''}`}
                onClick={() => setActiveTab('industry')}
              >
                Industry
              </button>
            </div>
          </div>

          <div className="tab-content">
            {activeTab === 'services' && (
              <div>
                <div className="expertise-intro">
                  <h2>OUR SERVICES</h2>
                  <p>
                    We do more than deliver solutions we create experiences that make a difference. Our services are designed to simplify complexity, strengthen security, and drive meaningful results. Every project reflects our commitment to innovation, precision, and excellence.
                  </p>
                  <p>
                    From strategy to implementation, we work closely with you to turn ideas into impact. Whatever your vision, our expertise ensures it's built to perform securely, reliably, and efficiently.
                  </p>
                </div>
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
            )}

            {activeTab === 'industry' && (
              <div>
                <div className="expertise-intro">
                  <h2>INDUSTRIES</h2>
                  <p>
                    Opportunities for bookkeeping across various industries that require financial management, reporting, and record-keeping support.
                  </p>
                </div>
                <div className="services-grid">
                  {industries.map((industry, index) => (
                    <div key={index} className="service-card">
                      <div className="service-icon">{industry.icon}</div>
                      <h3>{industry.title}</h3>
                      <p>{industry.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;

