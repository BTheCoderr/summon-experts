import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Wrench, 
  Calendar, 
  Briefcase, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'what-we-build', 'who-its-for', 'what-you-get', 'why-different', 'why-trust', 'early-offer'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCTAClick = () => {
    // Scroll to early offer section
    scrollToSection('early-offer');
  };

  const handleTextClick = () => {
    // Open contact form instead of direct SMS
    scrollToSection('early-offer');
  };





  const navItems = [
    { id: 'what-we-build', label: 'What We Build' },
    { id: 'who-its-for', label: 'Who It\'s For' },
    { id: 'what-you-get', label: 'What You Get' },
    { id: 'why-different', label: 'Why Different' },
    { id: 'why-trust', label: 'Why Trust Us' },
    { id: 'early-offer', label: 'Early Offer' }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="logo-text">Summon Experts</div>
          </motion.div>
          
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className="mobile-nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-headline">
              From Idea to First Sales in Under 60 Days
            </h1>
            <p className="hero-subheadline">
              Summon Experts is your AI-powered business execution partner.
              We help everyday founders move from stuck to scaling — with real strategy, weekly roadmaps, and guided next steps tailored to your journey.
            </p>
            <motion.button 
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCTAClick}
            >
              Start Your Execution Plan <ArrowRight size={20} />
            </motion.button>
            <div className="contact-info">
              <p>Prefer to talk? <button className="text-link" onClick={handleTextClick}>Get in touch with us</button></p>
              <p className="small-text">(We'll respond within 24 hours.)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We're Building */}
      <section id="what-we-build" className="section">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>What We're Building</h2>
            <div className="content-grid">
              <div className="content-text">
                <p>
                  We're building <strong>Summon Experts</strong>, an AI-guided execution platform built specifically for early-stage founders and small business creators.
                </p>
                <p>
                  We're not another business plan generator. We help you actually get things done—from turning strategy into simple tasks to helping you launch with real-world sales.
                </p>
                <p>
                  Whether you're launching your first offer, testing a new side hustle, or rebooting an old idea—we give you clarity, direction, and momentum.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who-its-for" className="section bg-light">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Who It's For</h2>
            <div className="cards-grid">
              <motion.div 
                className="card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Aspiring Entrepreneurs</h3>
                <p>"I have a great idea but don't know how to start."</p>
              </motion.div>
              <motion.div 
                className="card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Early-Stage Founders</h3>
                <p>"I've started something but can't seem to move forward."</p>
              </motion.div>
              <motion.div 
                className="card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3>DIY Hustlers</h3>
                <p>"I've been winging it solo—time for real structure and support."</p>
              </motion.div>
            </div>
            <div className="tagline">
              <p>If you've got the idea, we'll help you execute it—with confidence and clarity.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section id="what-you-get" className="section">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>What You Get</h2>
            <div className="features-grid">
              <motion.div 
                className="feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <Brain size={32} />
                </div>
                <h3>Strategic Clarity</h3>
                <p>AI + expert thinking on what really matters right now</p>
              </motion.div>
              <motion.div 
                className="feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <Wrench size={32} />
                </div>
                <h3>Personalized Execution Plan</h3>
                <p>A roadmap tailored to your unique business</p>
              </motion.div>
              <motion.div 
                className="feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <Calendar size={32} />
                </div>
                <h3>Weekly Support + Nudges</h3>
                <p>Get back on track without burnout</p>
              </motion.div>
              <motion.div 
                className="feature"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <Briefcase size={32} />
                </div>
                <h3>Tangible Results</h3>
                <p>Go from idea to test sales in under 60 days</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We're Different */}
      <section id="why-different" className="section bg-light">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why We're Different</h2>
            <div className="highlight-box">
              <h3>Not Just Tasks. Not Just Advice.</h3>
              <h3 className="accent">A Real Execution Engine.</h3>
            </div>
            <p className="section-text">
              Unlike Notion, ChatGPT, or your favorite to-do list…
              Summon Experts thinks with you, plans for you, and nudges you forward.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Real-time decision support</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Execution templates adapted to your business</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Human-AI feedback loop that improves as you go</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>One click away from launch support or expert eyes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section id="why-trust" className="section">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Trust Us?</h2>
            <p className="section-subtitle">Meet the Founders:</p>
            <div className="founders-grid">
              <motion.div 
                className="founder-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="founder-avatar">👤</div>
                <h3>Damola Adediran — CEO</h3>
                <p>Business strategist with 140+ client projects.</p>
                <p>Former consultant turned execution expert.</p>
                <p>Doctorate in IT, MBA, PMP, Scrum Certified.</p>
              </motion.div>
              <motion.div 
                className="founder-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="founder-avatar">👤</div>
                <h3>Baheem Ferrell — CTO</h3>
                <p>Engineer and builder behind 40+ tech projects.</p>
                <p>Full-stack + AI systems architect.</p>
                <p>Known for moving fast and making it real.</p>
              </motion.div>
            </div>
            <div className="trust-info">
              <p><strong>Backed by 6+ years of client trust.</strong></p>
              <p>Currently onboarding pilots across MA & RI.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Early Offer */}
      <section id="early-offer" className="section bg-accent">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Early Offer</h2>
            <div className="offer-content">
              <p className="offer-question">
                Want a strategist and project manager on your team—without paying $3,000/mo?
              </p>
              <div className="offer-details">
                <p>Join our early access program and get:</p>
                <div className="offer-features">
                  <div className="offer-feature">
                    <CheckCircle size={20} />
                    <span>Free onboarding</span>
                  </div>
                  <div className="offer-feature">
                    <CheckCircle size={20} />
                    <span>Custom roadmap</span>
                  </div>
                  <div className="offer-feature">
                    <CheckCircle size={20} />
                    <span>Weekly reviews</span>
                  </div>
                  <div className="offer-feature">
                    <CheckCircle size={20} />
                    <span>First sales by Month 2 (real-world validation)</span>
                  </div>
                </div>
              </div>
              <div className="contact-methods">
                <button className="contact-method" onClick={handleTextClick}>
                  <Phone size={20} />
                  <span>Text us now: <strong>+1 (857) 407‑8886</strong></span>
                </button>
                <button className="contact-method" onClick={() => window.open('sms:+14013161280', '_blank')}>
                  <Phone size={20} />
                  <span>Text us now: <strong>+1 (401) 316‑1280</strong></span>
                </button>
                <div className="contact-method">
                  <Mail size={20} />
                  <span>Email: <strong>adedirandamola.a@gmail.com</strong> / <strong>bferrell514@gmail.com</strong></span>
                </div>
                <p className="small-text">(Again, better to text than call.)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Contact Us</h2>
            <form name="contact" method="POST" data-netlify="true" className="contact-form">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="redirect" value="/success.html" />
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-row">
                <input type="text" name="phone" placeholder="Your Phone (optional)" />
                <input type="text" name="company" placeholder="Company (optional)" />
              </div>
              <div className="form-row">
                <input type="text" name="company_desc" placeholder="What does your company do? (optional)" />
              </div>
              <div className="form-row">
                <textarea name="message" placeholder="Your Message" required rows={4}></textarea>
              </div>
              <div className="form-row">
                {/* reCAPTCHA temporarily disabled - will be re-enabled once properly configured */}
                <div style={{ 
                  background: '#f0f0f0', 
                  padding: '10px', 
                  borderRadius: '4px', 
                  textAlign: 'center',
                  color: '#666',
                  fontSize: '14px'
                }}>
                  🔒 reCAPTCHA protection will be enabled soon
                </div>
              </div>
              <button type="submit" className="cta-button primary">Send Message</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <p>© 2025 Summon Experts</p>
            </div>
            <div className="footer-section">
              <div className="contact-links">
                <div className="contact-link">
                  <Phone size={16} />
                  <span>+1 (857) 407‑8886</span>
                </div>
                <div className="contact-link">
                  <Mail size={16} />
                  <span>adedirandamola.a@gmail.com | bferrell514@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <div className="social-links">
                <a href="https://github.com/BTheCoderr" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com/in/baheem-ferrell-866122101/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={16} />
                </a>
                <a href="https://bthedream.netlify.app" target="_blank" rel="noopener noreferrer" className="social-link">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-links">
                <a href="#" className="footer-link">Terms</a>
                <a href="#" className="footer-link">Privacy</a>
                <a href="#" className="footer-link">Join Our Waitlist</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
