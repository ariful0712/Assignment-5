import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

import Technologies from "./components/Technologies"
import YourStack from "./components/YourStack"
import Footer from "./components/Footer"
import type { Technology } from "./types/technology"


function App() {

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([])


  // Add technology
  const handleAdd = (technology: Technology) => {

    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology
    ])

    toast.success(`${technology.name} added to your stack!`)
  }


  // Remove one technology
  const handleRemove = (id: string) => {

    const technology = selectedTechnologies.find(
      (item) => item.id === id
    )

    setSelectedTechnologies(
      selectedTechnologies.filter(
        (technology) => technology.id !== id
      )
    )

    if (technology) {
      toast.success(`${technology.name} removed from your stack.`)
    }
  }


  // Remove all technologies
  const handleRemoveAll = () => {

    if (selectedTechnologies.length === 0) {
      return
    }

    setSelectedTechnologies([])

    toast.success("All technologies removed from your stack.")
  }


  return (
    <>

      <Navbar />

      <Hero />

      <div className="main-content">

        <Technologies
          selectedTechnologies={selectedTechnologies}
          onAdd={handleAdd}
        />

        <YourStack
          selectedTechnologies={selectedTechnologies}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

      </div>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </>
  )
}


export default App