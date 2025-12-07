import React from 'react';
import { Target, Eye, Award, Users, Briefcase, Calendar } from 'lucide-react';
import FadeIn from './FadeIn';
import Counter from './Counter';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Text Content */}
        <div className="about-content">
          <FadeIn direction="right">
            <h2 className="section-title">About <span className="text-secondary">FAB TECH</span></h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="lead-text">
              We are a leading provider of professional land surveying and engineering services, offering a wide array of solutions that cater to both public and private sector projects.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.3}>
            <p className="body-text">
              Our highly skilled team has a deep understanding of the surveying industry and works closely with our clients to deliver reliable, accurate, and timely results. With over 8+ years of experience, we have established ourselves as a trusted partner in the industry.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="stats-container">
              <div className="stat-item">
                <Counter from={0} to={1500} duration={2} className="stat-number" />
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <Counter from={0} to={2500} duration={2} className="stat-number" />
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <Counter from={0} to={8} duration={2} className="stat-number" />
                <span className="stat-label">Years Of Experience</span>
              </div>
              <div className="stat-item">
                <Counter from={0} to={20} duration={2} className="stat-number" />
                <span className="stat-label">Professional Team</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Cards/Visuals */}
        <div className="about-cards">
          <FadeIn direction="up" delay={0.6}>
            <div className="card vision-card">
              <div className="card-header">
                <div className="card-icon">
                  <Eye size={24} />
                </div>
                <h3>Our Vision</h3>
              </div>
              <p>To be the go-to partner for land surveying and engineering services, renowned for our reliability, accuracy, and dedication to client satisfaction.</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <div className="card mission-card">
              <div className="card-header">
                <div className="card-icon">
                  <Target size={24} />
                </div>
                <h3>Our Mission</h3>
              </div>
              <p>To deliver precise, innovative surveying and engineering services with excellence, ensuring every project is built on a solid foundation of accuracy.</p>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--color-background);
        }

        .about-content {
          max-width: 100%;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .lead-text {
          font-size: 1.25rem;
          color: var(--color-text-main);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .body-text {
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 3rem;
          padding: 3rem 0;
          margin-top: 3rem;
          border-top: 1px solid var(--color-border);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--color-secondary);
          line-height: 1;
          margin: 0 auto 0.75rem;
          min-width: 180px;
          font-variant-numeric: tabular-nums;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          text-align: center;
        }

        .stat-label {
          font-size: 1rem;
          color: var(--color-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
        }

        @media (min-width: 768px) {
          .stats-container {
            grid-template-columns: repeat(4, 1fr);
            gap: 4rem;
            padding: 4rem 0;
          }

          .stat-number {
            font-size: 4rem;
            min-width: 220px;
          }

          .stat-label {
            font-size: 1.125rem;
          }
        }

        .about-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 1rem;
        }

        .card {
          background-color: var(--color-surface);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-secondary);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .card-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .card h3 {
          font-size: 1.25rem;
          margin: 0;
          color: var(--color-primary);
        }

        .card p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        @media (min-width: 768px) {
          .about-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
