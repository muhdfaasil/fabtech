import React from 'react';
import { CheckCircle, Zap, Shield, ThumbsUp } from 'lucide-react';
import FadeIn from './FadeIn';
import Counter from './Counter';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Cutting-Edge Technology',
      description: 'We utilize the latest surveying equipment and software to ensure the highest level of precision.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Customized Solutions',
      description: 'Every project is unique. We tailor our services to meet your specific requirements and goals.',
      icon: <CheckCircle size={24} />,
    },
    {
      title: 'Commitment to Accuracy',
      description: 'Accuracy is our hallmark. We adhere to strict quality control standards in all our surveys.',
      icon: <Shield size={24} />,
    },
    {
      title: 'Strong Reputation',
      description: 'Trusted by clients across public and private sectors for our reliability and professionalism.',
      icon: <ThumbsUp size={24} />,
    },
  ];

  return (
    <section id="why-choose-us" className="section why-choose-us-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-column">
            <FadeIn direction="right">
              <h2 className="section-title">Why Choose <span className="text-secondary">FAB TECH</span>?</h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <p className="lead-text">
                We combine expertise, technology, and dedication to deliver exceptional results for every client.
              </p>
            </FadeIn>

            <div className="feature-list">
              {features.map((feature, index) => (
                <FadeIn key={index} direction="right" delay={0.3 + (index * 0.1)}>
                  <div className="feature-item">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="stats-column">
            <FadeIn direction="left" delay={0.2}>
              <div className="stat-card">
                <div className="progress-circle" style={{ '--percent': '89%' }}>
                  <span className="percent-text">
                    <Counter from={0} to={89} duration={1.5} />%
                  </span>
                </div>
                <h3 className="stat-title">Accurate Survey</h3>
                <p className="stat-desc">Consistently delivering precise data.</p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.4}>
              <div className="stat-card">
                <div className="progress-circle" style={{ '--percent': '88%' }}>
                  <span className="percent-text">
                    <Counter from={0} to={88} duration={1.5} />%
                  </span>
                </div>
                <h3 className="stat-title">Time Saving</h3>
                <p className="stat-desc">Efficient workflows to meet deadlines.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        .why-choose-us-section {
          background-color: var(--color-background);
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }

        .feature-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .feature-icon {
          color: var(--color-secondary);
          background-color: #fef2f2;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .feature-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--color-primary);
        }

        .feature-description {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .stats-column {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .stats-column > div {
          height: 100%;
        }

        .stat-card {
          background-color: var(--color-surface);
          padding: 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          border: 1px solid var(--color-border);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .progress-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: conic-gradient(var(--color-secondary) var(--percent), #e2e8f0 0);
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .progress-circle::before {
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          background-color: var(--color-surface);
          border-radius: 50%;
        }

        .percent-text {
          position: relative;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
        }

        .stat-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--color-primary);
        }

        .stat-desc {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        @media (min-width: 768px) {
          .stats-column {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 992px) {
          .content-wrapper {
            grid-template-columns: 1.5fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
