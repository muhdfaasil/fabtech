import React from 'react';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const ContactCTA = () => {
    return (
        <section id="contact" className="section contact-cta-section">
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
                            <div className="card-gradient"></div>
                            <div className="card-content">
                                <div className="cta-icon-wrapper">
                                    <div className="cta-icon call-icon">
                                        <Phone size={28} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="cta-title">Call Us</h3>
                                    <p className="cta-text">97472 32046</p>
                                    <div className="cta-action">
                                        <span>Call Now</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <a href="https://wa.me/919747232046" target="_blank" rel="noopener noreferrer" className="cta-card whatsapp-card">
                            <div className="card-gradient whatsapp-gradient"></div>
                            <div className="card-content">
                                <div className="cta-icon-wrapper">
                                    <div className="cta-icon whatsapp-icon">
                                        <MessageCircle size={28} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="cta-title">WhatsApp</h3>
                                    <p className="cta-text">Chat with us instantly</p>
                                    <div className="cta-action whatsapp-action">
                                        <span>Message Now</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.3}>
                        <a href="mailto:info@fabtechsurvey.com" className="cta-card email-card">
                            <div className="card-gradient email-gradient"></div>
                            <div className="card-content">
                                <div className="cta-icon-wrapper">
                                    <div className="cta-icon email-icon">
                                        <Mail size={28} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="cta-title">Email Us</h3>
                                    <p className="cta-text">info@fabtechsurvey.com</p>
                                    <div className="cta-action email-action">
                                        <span>Send Email</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </FadeIn>
                </div>
            </div>

            <style>{`
        .contact-cta-section {
          background: linear-gradient(135deg, var(--color-surface) 0%, #f8fafc 100%);
          padding: 3rem 0;
          position: relative;
        }

        .contact-cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-border), transparent);
        }

        .mb-12 {
          margin-bottom: 2rem;
        }

        .section-subtitle {
          font-size: 1rem;
          color: var(--color-text-muted);
          margin-top: 0.75rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cta-card {
          position: relative;
          display: block;
          border-radius: var(--radius-lg);
          background-color: var(--color-background);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .cta-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .cta-card:hover::before {
          opacity: 1;
        }

        .card-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-secondary), #f87171);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .whatsapp-gradient {
          background: linear-gradient(90deg, #25D366, #128C7E);
        }

        .email-gradient {
          background: linear-gradient(90deg, var(--color-primary), #3b82f6);
        }

        .cta-card:hover .card-gradient {
          transform: scaleX(1);
        }

        .card-content {
          position: relative;
          padding: 1.5rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.25rem;
          z-index: 1;
        }

        .cta-icon-wrapper {
          flex-shrink: 0;
        }

        .cta-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .call-icon {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          color: var(--color-secondary);
        }

        .whatsapp-icon {
          background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
          color: #25D366;
        }

        .email-icon {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          color: var(--color-primary);
        }

        .cta-card:hover .cta-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .call-card:hover .call-icon {
          background: linear-gradient(135deg, var(--color-secondary) 0%, #f87171 100%);
          color: white;
          box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.3);
        }

        .whatsapp-card:hover .whatsapp-icon {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white;
          box-shadow: 0 10px 25px -5px rgba(37, 211, 102, 0.3);
        }

        .email-card:hover .email-icon {
          background: linear-gradient(135deg, var(--color-primary) 0%, #3b82f6 100%);
          color: white;
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
        }

        .card-body {
          flex: 1;
          text-align: left;
        }

        .cta-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--color-primary);
          transition: color 0.3s ease;
        }

        .cta-text {
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
          font-weight: 500;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .cta-action {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.8125rem;
          background-color: var(--color-surface);
          color: var(--color-text-main);
          transition: all 0.3s ease;
          border: 2px solid var(--color-border);
        }

        .cta-action svg {
          transition: transform 0.3s ease;
        }

        .cta-card:hover .cta-action svg {
          transform: translateX(4px);
        }

        .call-card:hover .cta-action {
          background-color: var(--color-secondary);
          color: white;
          border-color: var(--color-secondary);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
        }

        .whatsapp-card:hover .whatsapp-action {
          background-color: #25D366;
          color: white;
          border-color: #25D366;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
        }

        .email-card:hover .email-action {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
        }

        @media (min-width: 768px) {
          .cta-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .card-content {
            flex-direction: column;
            text-align: center;
            padding: 1.75rem 1.5rem;
            gap: 1rem;
          }

          .card-body {
            text-align: center;
          }

          .cta-icon {
            width: 60px;
            height: 60px;
          }

          .cta-title {
            font-size: 1.25rem;
          }

          .cta-text {
            font-size: 0.9375rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-cta-section {
            padding: 4rem 0;
          }
        }
      `}</style>
        </section>
    );
};

export default ContactCTA;
