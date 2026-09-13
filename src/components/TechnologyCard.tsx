import type { Technology } from "../types/technology"
import "./TechnologyCard.css"

type TechnologyCardProps = {
  technology: Technology
  onAdd: (technology: Technology) => void
  isAdded: boolean
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded
}: TechnologyCardProps) {

  return (
    <div className="technology-card">
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />
        <span className="badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>
      <p className="technology-description">
        {technology.description}
      </p>
      <div className="technology-info">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span>⭐ {technology.rating}</span>
      </div>
      <button
        className="add-button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  )
}

export default TechnologyCard
