import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <FadeIn delay={0.1}>
          <h1 className="hero-title">
            Precision in <span className="text-highlight">Surveying</span> & <span className="text-highlight">Engineering</span> Solutions
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="hero-subtitle">
            FAB TECH is a leading provider of professional land surveying and engineering services, delivering reliable, accurate, and timely results for public and private sector projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              Our Services <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Contact Us
            </a>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .hero {
          background: linear-gradient(135deg, var(--color-primary) 0%, #1e293b 100%);
          color: white;
          padding: 8rem 0 6rem;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(circle at center, var(--color-secondary) 0%, transparent 70%);
          opacity: 0.1;
          filter: blur(60px);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          text-align: center;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .text-highlight {
          color: var(--color-secondary);
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: #cbd5e1;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-outline-light {
          border: 2px solid white;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .btn-outline-light:hover {
          background-color: white;
          color: var(--color-primary);
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
