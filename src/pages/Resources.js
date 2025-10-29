import { Link } from 'react-router-dom';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Blog Posts',
      description: 'Read our latest articles on bookkeeping, financial management, and business growth.',
      icon: '📝',
      items: [
        'Best Practices for Small Business Bookkeeping',
        'Understanding Tax Deductions',
        'How to Choose the Right Accounting Software',
        'Financial Planning for Growth'
      ]
    },
    {
      title: 'Guides & Downloads',
      description: 'Download helpful guides, templates, and checklists to streamline your finances.',
      icon: '📚',
      items: [
        'Bookkeeping Checklist Template',
        'Annual Financial Review Guide',
        'Tax Preparation Checklist',
        'Cash Flow Management Guide'
      ]
    },
    {
      title: 'Tools & Calculators',
      description: 'Use our free tools and calculators to manage your finances effectively.',
      icon: '🔧',
      items: [
        'Business Expense Tracker',
        'Profit & Loss Calculator',
        'Tax Estimation Tool',
        'Cash Flow Projection Tool'
      ]
    },
    {
      title: 'Webinars & Training',
      description: 'Join our webinars and training sessions to enhance your financial knowledge.',
      icon: '🎓',
      items: [
        'Introduction to Bookkeeping Basics',
        'Understanding Financial Statements',
        'Tax Planning Strategies',
        'Advanced Accounting Techniques'
      ]
    }
  ];

  return (
    <div className="page-container">
      <section className="resources-page">
        <div className="resources-page-container">
          <h1>RESOURCES</h1>
          <p className="page-subtitle">
            Access valuable tools, guides, and insights to help manage your finances effectively
          </p>

          <div className="resources-grid">
            {resourceCategories.map((category, index) => (
              <div key={index} className="resource-card">
                <div className="resource-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p className="resource-description">{category.description}</p>
                <ul className="resource-items">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <button className="btn btn-primary">Explore {category.title}</button>
              </div>
            ))}
          </div>

          <div className="resources-cta">
            <h2>Need More Help?</h2>
            <p>Our expert team is ready to assist you with all your bookkeeping needs.</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

