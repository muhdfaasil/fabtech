import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/logo_variant.png'; // Assuming variant is suitable for dark bg, or reuse logo

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Info */}
                    <div className="footer-brand">
                        <h2 className="footer-logo">FAB TECH</h2>
                        <p className="footer-desc">
                            Precision in Surveying & Engineering Solutions. Your trusted partner for accurate and reliable land development services.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#why-choose-us">Why Choose Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={20} className="contact-icon" />
                                <span>1st floor, Anachira Building, AM Road, opposite Pwd Roads Subdivision office, Kothamangalam, Kerala 686691</span>
                            </li>
                            <li>
                                <Phone size={20} className="contact-icon" />
                                <span>97472 32046</span>
                            </li>
                            <li>
                                <Mail size={20} className="contact-icon" />
                                <span>info@fabtechsurvey.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} FAB TECH. All rights reserved.</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-primary);
          color: #cbd5e1;
          padding: 4rem 0 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
        }

        .footer-logo {
          color: white;
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .footer-desc {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color 0.2s;
          display: flex;
        }

        .social-link:hover {
          background-color: var(--color-secondary);
        }

        .footer-heading {
          color: white;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--color-secondary);
        }

        .contact-list {
          list-style: none;
        }

        .contact-list li {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
          text-align: center;
          font-size: 0.875rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1.5fr;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
