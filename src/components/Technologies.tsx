import { useEffect, useState } from "react"
import TechnologyCard from "./TechnologyCard"
import type { Technology } from "../types/technology"
import "./Technologies.css"

type TechnologiesProps = {
  selectedTechnologies: Technology[]
  onAdd: (technology: Technology) => void
}

function Technologies({
  selectedTechnologies,
  onAdd
}: TechnologiesProps) {

  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/technologies.json')
      .then(response => response.json())
      .then(data => {
        setTechnologies(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="technologies-section">
        <p className="loading">Loading technologies...</p>
      </section>
    )
  }

  return (
    <section className="technologies-section" id="technologies">
      <div className="section-heading">
        <h2>
          Explore the <span>Technologies</span>
        </h2>
        <p>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="technology-layout">
        <div className="technology-grid">
          {technologies.map(technology => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={onAdd}
              isAdded={selectedTechnologies.some(
                item => item.id === technology.id
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies