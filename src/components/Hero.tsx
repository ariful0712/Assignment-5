import "./Hero.css"
import heroImage from "../assets/hero.png"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">
              Explore Technologies
            </button>

            <button className="learn-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Development Stack" />
        </div>

      </div>
    </section>
  )
}

export default Hero