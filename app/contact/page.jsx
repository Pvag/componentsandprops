'use client'
import React, { useState } from 'react'

import Agenda from '@/Components/Agenda'

const Contact = () => {
  const [numeroDiAppuntamenti, setNumeroDiAppuntamenti] = useState(0)

  function prenotaClicked() {
    setNumeroDiAppuntamenti((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Contact</h1>
      <button
        onClick={prenotaClicked}
        className="border border-amber-700 p-2 m-2 bg-gray-700"
      >
        Prenota
      </button>
      <Agenda n={numeroDiAppuntamenti} />
    </div>
  )
}

export default Contact
