import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-item">
            <Phone size={16} />
            <span>97472 32046</span>
          </div>
          <div className="contact-item">
            <Mail size={16} />
            <span>info@fabtechsurvey.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container nav-container">
          <div className="logo-container">
            <img src={logo} alt="Fabtech Logo" className="logo" />
            <span className="logo-text">FAB TECH</span>
          </div>

          {/* Desktop Nav */}
          <ul className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={link.name === 'Contact' ? 'nav-link btn-contact' : 'nav-link'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={toggleMenu}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--color-background);
          box-shadow: var(--shadow-sm);
        }

        .top-bar {
          background-color: var(--color-primary);
          color: white;
          padding: 0.5rem 0;
          font-size: 0.875rem;
        }

        .top-bar-content {
          display: flex;
          justify-content: flex-end;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .main-nav {
          padding: 1rem 0;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo {
          height: 50px;
          width: auto;
          display: block;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: -0.02em;
          line-height: 1;
          transform: translateY(-3px); /* Move up slightly */
        }

        .desktop-nav {
          display: none;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          font-weight: 500;
          color: var(--color-text-main);
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--color-secondary);
        }

        .btn-contact {
          background-color: var(--color-secondary);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-contact:hover {
          background-color: #dc2626;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }

        .mobile-menu-btn {
          display: block;
          color: var(--color-text-main);
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--color-background);
          border-top: 1px solid var(--color-border);
          padding: 1rem;
          box-shadow: var(--shadow-md);
        }

        .mobile-nav ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav a {
          display: block;
          padding: 0.5rem 0;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
