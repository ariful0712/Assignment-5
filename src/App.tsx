import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import type { Technology } from "./types/technology"

function App() {

  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])

  const handleAdd = (technology: Technology) => {
    setSelectedTechnologies([
      ...selectedTechnologies,
      technology
    ])
  }

  return (
    <>
      <Navbar />

      <Hero />

      <Technologies
        selectedTechnologies={selectedTechnologies}
        onAdd={handleAdd}
      />
    </>
  )
}

export default App