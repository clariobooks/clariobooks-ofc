import { Link } from 'react-router-dom';
import { useState } from 'react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('blogs');

  const blogs = [
    { title: 'Best Practices for Small Business Bookkeeping', url: 'https://quickbooks.intuit.com/r/bookkeeping/small-business-bookkeeping-basics/' },
    { title: 'Understanding Tax Deductions', url: 'https://www.irs.gov/credits-deductions-for-individuals' },
    { title: 'How to Choose the Right Accounting Software', url: 'https://zapier.com/blog/best-accounting-software/' },
    { title: 'Financial Planning for Growth', url: 'https://www.investopedia.com/financial-planning-4689734' }
  ];

  const guides = [
    { title: 'Bookkeeping Checklist Template (Google Sheets)', url: 'https://docs.google.com/spreadsheets' },
    { title: 'Annual Financial Review Guide', url: 'https://www.score.org/resource/blog-post/how-conduct-year-end-financial-review' },
    { title: 'Tax Preparation Checklist', url: 'https://www.hrblock.com/tax-center/filing/tax-prep/documents-to-bring-when-filing/' },
    { title: 'Cash Flow Management Guide', url: 'https://www.shopify.com/blog/cash-flow-management' }
  ];

  const tools = [
    { title: 'Expense Tracker (Spreadsheet Template)', url: 'https://www.vertex42.com/ExcelTemplates/expense-report-template.html' },
    { title: 'Profit Margin Calculator', url: 'https://www.shopify.com/tools/profit-margin-calculator' },
    { title: 'Sales Tax Calculator', url: 'https://www.calculator.net/sales-tax-calculator.html' },
    { title: 'Cash Flow Calculator', url: 'https://www.calculatorsoup.com/calculators/financial/cash-flow-calculator.php' }
  ];

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener');
  };

  return (
    <div className="page-container">
      <section className="resources-page">
        <div className="resources-page-container">
          <h1 className="page-title">
            <img
              className="title-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-jlGd-A7kSfCnSzwyOYKC0mLQyhO66H6jA&s"
              alt="Resources"
            />
            RESOURCES
          </h1>
          <p className="page-subtitle">
            Access valuable tools, guides, and insights to help manage your finances effectively
          </p>

          <div className="tabs-container">
            <div className="tabs">
              <button className={`tab ${activeTab === 'blogs' ? 'active' : ''}`} onClick={() => setActiveTab('blogs')}>Blogs</button>
              <button className={`tab ${activeTab === 'guides' ? 'active' : ''}`} onClick={() => setActiveTab('guides')}>Guides & Downloads</button>
              <button className={`tab ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')}>Tools & Calculators</button>
            </div>
          </div>

          <div className="tab-content">
            {activeTab === 'blogs' && (
              <div className="resources-grid">
                {blogs.map((item, idx) => (
                  <div key={idx} className="resource-card">
                    <div className="resource-icon">📝</div>
                    <h3>{item.title}</h3>
                    <p className="resource-description">Curated reading to sharpen your understanding.</p>
                    <button className="btn btn-primary" onClick={() => openLink(item.url)}>Explore</button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'guides' && (
              <div className="resources-grid">
                {guides.map((item, idx) => (
                  <div key={idx} className="resource-card">
                    <div className="resource-icon">📚</div>
                    <h3>{item.title}</h3>
                    <p className="resource-description">Download practical templates and step-by-step checklists.</p>
                    <button className="btn btn-primary" onClick={() => openLink(item.url)}>Explore</button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="resources-grid">
                {tools.map((item, idx) => (
                  <div key={idx} className="resource-card">
                    <div className="resource-icon">🔧</div>
                    <h3>{item.title}</h3>
                    <p className="resource-description">Use calculators and templates to make smarter decisions.</p>
                    <button className="btn btn-primary" onClick={() => openLink(item.url)}>Explore</button>
                  </div>
                ))}
              </div>
            )}
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

