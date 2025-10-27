const Software = () => {
  const softwareList = [
    { 
      name: 'Microsoft Excel', 
      brandClass: 'excel',
      icon: 'X',
      logoUrl: '/Logos/excel.png'
    },
    { 
      name: 'QuickBooks', 
      brandClass: 'quickbooks',
      icon: 'QB',
      logoUrl: '/Logos/quickbooks.png'
    },
    { 
      name: 'NetSuite', 
      brandClass: 'netsuite',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2021/09/NetSuite-Logo.png'
    },
    { 
      name: 'Xero Accounting', 
      brandClass: 'xero',
      icon: 'X',
      logoUrl: '/Logos/xero.png'
    },
    { 
      name: 'Zoho Books', 
      brandClass: 'zoho',
      icon: 'Z',
      logoUrl: 'https://cdn.worldvectorlogo.com/logos/zoho-1.svg'
    }
  ];

  return (
    <section className="software">
      <div className="software-container">
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
    </section>
  );
};

export default Software;
