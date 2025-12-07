import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const ContactCTA = () => {
    return (
        <section className="section contact-cta-section">
            <div className="container">
                <div className="text-center mb-12">
                    <FadeIn direction="up">
                        <h2 className="section-title">Get in <span className="text-secondary">Touch</span></h2>
                        <p className="section-subtitle">
                            Ready to start your project? Contact us today for a free consultation.
                        </p>
                    </FadeIn>
                </div>

                <div className="cta-grid">
                    <FadeIn direction="up" delay={0.1}>
                        <a href="tel:9747232046" className="cta-card call-card">
                            <div className="cta-icon">
                                <Phone size={32} />
                            </div>
                            <h3 className="cta-title">Call Us</h3>
                            <p className="cta-text">97472 32046</p>
                            <span className="cta-action">Call Now</span>
                        </a>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <a href="https://wa.me/919747232046" target="_blank" rel="noopener noreferrer" className="cta-card whatsapp-card">
                            <div className="cta-icon">
                                <MessageCircle size={32} />
                            </div>
                            <h3 className="cta-title">WhatsApp</h3>
                            <p className="cta-text">Chat with us</p>
                            <span className="cta-action">Message Now</span>
                        </a>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.3}>
                        <a href="mailto:info@fabtechsurvey.com" className="cta-card email-card">
                            <div className="cta-icon">
                                <Mail size={32} />
                            </div>
                            <h3 className="cta-title">Email Us</h3>
                            <p className="cta-text">info@fabtechsurvey.com</p>
                            <span className="cta-action">Send Email</span>
                        </a>
                    </FadeIn>
                </div>
            </div>

            <style>{`
        .contact-cta-section {
          background-color: var(--color-surface);
        }

        .mb-12 {
          margin-bottom: 3rem;
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cta-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          background-color: var(--color-background);
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
          border: 2px solid transparent;
          text-decoration: none;
          color: inherit;
        }

        .cta-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .call-card:hover {
          border-color: var(--color-secondary);
        }

        .whatsapp-card:hover {
          border-color: #25D366;
        }

        .email-card:hover {
          border-color: var(--color-primary);
        }

        .cta-icon {
          background-color: var(--color-surface);
          padding: 1rem;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          color: var(--color-text-main);
          transition: all 0.3s ease;
        }

        .call-card .cta-icon { color: var(--color-secondary); }
        .whatsapp-card .cta-icon { color: #25D366; }
        .email-card .cta-icon { color: var(--color-primary); }

        .cta-card:hover .cta-icon {
          transform: scale(1.1);
        }

        .cta-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--color-primary);
        }

        .cta-text {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .cta-action {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.875rem;
          background-color: var(--color-surface);
          color: var(--color-text-main);
          transition: all 0.3s ease;
        }

        .call-card:hover .cta-action {
          background-color: var(--color-secondary);
          color: white;
        }

        .whatsapp-card:hover .cta-action {
          background-color: #25D366;
          color: white;
        }

        .email-card:hover .cta-action {
          background-color: var(--color-primary);
          color: white;
        }

        @media (min-width: 768px) {
          .cta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
        </section>
    );
};

export default ContactCTA;
