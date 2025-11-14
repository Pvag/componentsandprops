import React from "react";

const Agenda = (props) => {
  // TODO
  // creare due component, ciascuna figlia di Agenda:
  // - logo aziendale
  // - footer della agenda
  //
  // Entrambe le components vanno definite in file separati
  // e renderizzate qui, in Agenda.
  const { n } = props;

  return (
    <div>
      <h1>La mia Agenda</h1>
      <div>{`Oggi ho ${n} appuntamenti`}</div>
    </div>
  );
};

export default Agenda;
