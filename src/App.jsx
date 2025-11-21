import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Inquiry from ${formData.name} - ${formData.country}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACountry: ${formData.country}%0D%0AProduct Interest: ${formData.product}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:kalyanitradex@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <h2>KALYANI TRADEX</h2>
            <p className="tagline-small">From Local Roots to Global Reach</p>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1 className="hero-title">KALYANI TRADEX</h1>
            <p className="hero-tagline">From Local Roots to Global Reach</p>
            <p className="hero-description">
              Premium Indian Natural Food Products for Global Markets
            </p>
            <div className="hero-badges">
              <span className="badge">FSSAI Certified</span>
              <span className="badge">IEC Registered</span>
              <span className="badge">APEDA RCMC</span>
            </div>
            <a href="#contact" className="cta-button">Get a Quote</a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="quick-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>🌍</h3>
              <h4>Global Export</h4>
              <p>Serving international markets with quality products</p>
            </div>
            <div className="info-card">
              <h3>✓</h3>
              <h4>Quality Assured</h4>
              <p>100% natural, chemical-free products</p>
            </div>
            <div className="info-card">
              <h3>📦</h3>
              <h4>Export Ready</h4>
              <p>Complete documentation & logistics support</p>
            </div>
            <div className="info-card">
              <h3>🤝</h3>
              <h4>Trusted Partner</h4>
              <p>Reliable sourcing & on-time delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">Premium natural food products sourced directly from Indian farmers and certified processors</p>
          
          <div className="product-categories">
            {/* Jaggery Products */}
            <div className="category-card">
              <div className="category-header">
                <h3>🍯 Jaggery Products</h3>
              </div>
              <ul className="product-list">
                <li>Sugarcane Jaggery Powder</li>
                <li>Sugarcane Jaggery Powder (Fine)</li>
                <li>Round Jaggery</li>
                <li>Palm Jaggery (Magic Square – 3g)</li>
                <li>Palm Jaggery with Dry Ginger (3g)</li>
                <li>Palm Jaggery (Small Cubes – 14g)</li>
                <li>Dry Ginger Palm Jaggery (14g)</li>
                <li>Palm Jaggery (Half Round)</li>
                <li>Dry Ginger Palm Jaggery (Half Round)</li>
                <li>Coconut Jaggery (Half Round)</li>
                <li>Dry Ginger Coconut Jaggery (Half Round)</li>
              </ul>
            </div>

            {/* Sugar Products */}
            <div className="category-card">
              <div className="category-header">
                <h3>🌴 Sugar Products</h3>
              </div>
              <ul className="product-list">
                <li>Palm Sugar</li>
                <li>Palm Sugar (Fine Powder)</li>
                <li>Herbal Palm Sugar</li>
                <li>Coconut Sugar</li>
                <li>Coconut Sugar (Fine Powder)</li>
                <li>Herbal Coconut Sugar</li>
              </ul>
            </div>

            {/* Himalayan Salt */}
            <div className="category-card">
              <div className="category-header">
                <h3>🧂 Himalayan Salt</h3>
              </div>
              <ul className="product-list">
                <li>Himalayan Pink Rock Salt (Powder)</li>
                <li>Himalayan Pink Rock Salt (Granules)</li>
                <li>Himalayan Pink Rock Salt (Whole Lumps)</li>
              </ul>
            </div>

            {/* Spices */}
            <div className="category-card">
              <div className="category-header">
                <h3>🌶️ Premium Spices</h3>
              </div>
              <ul className="product-list">
                <li>Turmeric (Whole & Powder)</li>
                <li>Red Chilli (Whole & Powder)</li>
                <li>Cumin Seeds (Jeera)</li>
                <li>Coriander Seeds (Dhaniya)</li>
                <li>Black Pepper (Kali Mirch)</li>
                <li>Cardamom (Green & Black)</li>
                <li>Fennel Seeds (Saunf)</li>
                <li>Fenugreek Seeds (Methi)</li>
                <li>Mustard Seeds (Sarson)</li>
                <li>Dry Ginger (Sonth)</li>
                <li>Cloves (Laung)</li>
                <li>Cinnamon (Dalchini)</li>
                <li>Bay Leaf (Tej Patta)</li>
                <li>Nutmeg (Jaiphal)</li>
              </ul>
            </div>

            {/* Coffee */}
            <div className="category-card">
              <div className="category-header">
                <h3>☕ Coffee Products</h3>
              </div>
              <ul className="product-list">
                <li>Sukku Coffee Powder</li>
              </ul>
            </div>

            {/* Dairy */}
            <div className="category-card">
              <div className="category-header">
                <h3>🥛 Dairy Products</h3>
              </div>
              <ul className="product-list">
                <li>Pure Ghee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Kalyani Tradex</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p className="intro-text">
                Kalyani Tradex is a trusted Indian export company committed to supplying high-quality natural food products to global markets. We specialize in jaggery, spices, sugar varieties, coconut products, palm products, Himalayan salt, coffee and specialty food ingredients sourced directly from reliable farmers, certified processors, and traditional producers.
              </p>
              
              <h3>Our Mission</h3>
              <p>To bring India's natural goodness to kitchens and industries across the world through:</p>
              <ul className="mission-list">
                <li>✓ Strict quality control</li>
                <li>✓ Export-grade packaging</li>
                <li>✓ Transparent and ethical sourcing</li>
                <li>✓ On-time logistics</li>
                <li>✓ 100% customer satisfaction</li>
              </ul>
              
              <p className="vision-text">
                Kalyani Tradex aims to become a global partner for buyers looking for authentic, clean, chemical-free natural food products with consistent supply and premium standards.
              </p>
            </div>

            <div className="certifications">
              <h3>Our Certifications & Credentials</h3>
              <div className="cert-grid">
                <div className="cert-item">
                  <strong>GSTIN:</strong> 27PFPPS0893C1ZO
                </div>
                <div className="cert-item">
                  <strong>IEC Code:</strong> PFPPS0893C
                </div>
                <div className="cert-item">
                  <strong>FSSAI License:</strong> 11525996000685
                </div>
                <div className="cert-item">
                  <strong>RCMC (APEDA):</strong> RCMEAPPLYAPEDA00057310AM26
                </div>
                <div className="cert-item">
                  <strong>Udyam/MSME:</strong> MH-26-0892043
                </div>
                <div className="cert-item">
                  <strong>AD CODE:</strong> 6360380
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="success-stories">
            <h3>Success Stories</h3>
            <div className="stories-grid">
              <div className="story-card">
                <h4>🌍 Middle East Partnership</h4>
                <p>Successfully supplied premium chemical-free jaggery to a Middle East-based wholesaler. The buyer appreciated our consistent quality, attractive pricing, fast documentation, and smooth logistics. This first shipment started a long-term partnership.</p>
              </div>
              <div className="story-card">
                <h4>🌶️ Bulk Spices Supply</h4>
                <p>A spice distributor from South India sourced turmeric, chilli, and cumin from us for export packing. They trusted us for our clean sorting, grading, and moisture-controlled packaging.</p>
              </div>
              <div className="story-card">
                <h4>🧂 Himalayan Salt Export</h4>
                <p>Helped a new importer source premium Himalayan Pink Salt, including quality samples and bulk order support. Their customer satisfaction boosted repeat orders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in touch for quotes, samples, or partnership opportunities</p>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="info-block">
                <h3>📍 Office Address</h3>
                <p>Kedgaon Chaufula<br/>Pune, Maharashtra – 412203<br/>India</p>
              </div>
              
              <div className="info-block">
                <h3>📞 Phone</h3>
                <p>+91 98904 46644<br/>+91 75584 44255</p>
              </div>
              
              <div className="info-block">
                <h3>📧 Email</h3>
                <p><a href="mailto:kalyanitradex@gmail.com">kalyanitradex@gmail.com</a></p>
              </div>
              
              <div className="info-block">
                <h3>💬 WhatsApp</h3>
                <p>
                  <a href="https://wa.me/919890446644" target="_blank" rel="noopener noreferrer">+91 98904 46644</a><br/>
                  <a href="https://wa.me/917558444255" target="_blank" rel="noopener noreferrer">+91 75584 44255</a>
                </p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h3>Send Us an Inquiry</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="country"
                  placeholder="Your Country *" 
                  value={formData.country}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="product"
                  placeholder="Product of Interest" 
                  value={formData.product}
                  onChange={handleChange}
                />
                <textarea 
                  name="message"
                  placeholder="Your Message *" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="submit-btn">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>KALYANI TRADEX</h3>
              <p>From Local Roots to Global Reach</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Pune, Maharashtra, India</p>
              <p>kalyanitradex@gmail.com</p>
              <p>+91 98904 46644</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Kalyani Tradex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
