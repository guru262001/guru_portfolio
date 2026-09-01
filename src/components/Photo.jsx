import React from "react";
import "./Photo.css";

const Photo = () => {
  return (
    <section className="photo-hero">

      {/* Background Image */}
      <div className="hero-image" />

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Main Content */}
      <div className="hero-container">

        <div className="hero-content">

          {/* Small Label */}
          <div className="hero-eyebrow">
            ARCHITECTURE. INTERIORS. ANIMATION.
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Bringing Spaces
            <br />
            to <span>Life.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            3D Architectural Visualizer crafting <strong>photorealistic renders</strong> and{' '}
            <strong>real-time walkthroughs</strong> that win client approval &mdash; from raw
            CAD to client-ready visuals for residential &amp; commercial spaces.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#work" className="hero-btn hero-btn-primary">
              <span>View selected work</span>

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">

              <svg
                className="spark-icon"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                <path
                  d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Start a project</span>
            </a>

          </div>

        </div>

        {/* Statistics */}
        <div className="hero-stats">

          {/* Stat 1 */}
          <div className="hero-stat">

            <div className="stat-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 3L27 9.2V22.2L16 29L5 22.2V9.2L16 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M5 9.2L16 16L27 9.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M16 16V29"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>

            <div className="stat-text">
              <strong>20+</strong>
              <span>Projects completed</span>
            </div>

          </div>

          <div className="stat-divider" />

          {/* Stat 2 */}
          <div className="hero-stat">

            <div className="stat-icon">
              <svg
                width="31"
                height="31"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect
                  x="4"
                  y="9"
                  width="24"
                  height="18"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M10 9L12 5H20L22 9"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <circle
                  cx="16"
                  cy="18"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <circle
                  cx="16"
                  cy="18"
                  r="1.5"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="stat-text">
              <strong>50+</strong>
              <span>High quality renders</span>
            </div>

          </div>

          <div className="stat-divider" />

          {/* Stat 3 */}
          <div className="hero-stat">

            <div className="stat-icon">
              <svg
                width="31"
                height="31"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M13 11L21 16L13 21V11Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="stat-text">
              <strong>8</strong>
              <span>Walkthrough animations</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Photo;