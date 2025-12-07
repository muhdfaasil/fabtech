import React from 'react';
import { Map, Compass, Ruler, Building2, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Land Surveying',
      description: 'Comprehensive land surveying services for residential, commercial, and industrial properties. We ensure precise measurements and legal compliance.',
      icon: <Compass size={40} />,
    },
    {
      id: 2,
      title: 'Engineering Services',
      description: 'Expert engineering solutions tailored to your project needs. From planning to execution, we provide technical expertise for successful outcomes.',
      icon: <Building2 size={40} />,
    },
    {
      id: 3,
      title: 'Property Boundary Refixing',
      description: 'Accurate determination and marking of property lines to resolve disputes and ensure clarity for property owners.',
      icon: <Ruler size={40} />,
    },
    {
      id: 4,
      title: 'Topographical Surveys',
      description: 'Detailed mapping of terrain features, essential for architectural design, construction planning, and land development.',
      icon: <Map size={40} />,
    },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center">
          <FadeIn direction="up">
            <h2 className="section-title">Our <span className="text-secondary">Services</span></h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="section-subtitle">
              We offer a wide range of professional surveying and engineering solutions designed to meet the unique needs of our clients.
            </p>
          </FadeIn>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} fullWidth>
              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--color-surface);
        }

        .section-header {
          max-width: 700px;
          margin: 0 auto 4rem;
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.125rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .services-grid > div {
          height: 100%;
        }

        .service-card {
          background-color: var(--color-background);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          border: 1px solid transparent;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-border);
        }

        .service-icon {
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
          background-color: #fef2f2; /* Light red bg */
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .service-description {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
