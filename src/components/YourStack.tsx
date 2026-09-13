import type { Technology } from "../types/technology"
import "./YourStack.css"
type YourStackProps = {
  selectedTechnologies: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function YourStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll
}: YourStackProps) {

  return (
    <aside className="your-stack">

      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>
          <p>{selectedTechnologies.length} selected</p>
        </div>
        {selectedTechnologies.length > 0 && (
          <button
            className="remove-all-button"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>
      {selectedTechnologies.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
          <span>Add technologies to build your stack.</span>
        </div>
      ) : (
        <div className="stack-list">
          {selectedTechnologies.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="stack-icon"
              />
              <div className="stack-info">
                <h3>{technology.name}</h3>
                <p>{technology.category}</p>
              </div>

              <button
                className="remove-button"
                onClick={() => onRemove(technology.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  )
}

export default YourStack