import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

const Agenda = (props) => {
  // TODO
  // creare due component, ciascuna figlia di Agenda:
  // - logo aziendale
  // - footer della agenda
  //
  // Entrambe le components vanno definite in file separati
  // e renderizzate qui, in Agenda.
  const { n } = props

  return (
    <div>
      <Logo />
      <h1>La mia Agenda</h1>
      <div>{`Oggi ho ${n} appuntamenti`}</div>
      <Footer />
    </div>
  )
}

export default Agenda
