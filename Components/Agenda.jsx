import React from "react";

const Agenda = (props) => {
  const { n } = props;

  return (
    <div>
      <h1>La mia Agenda</h1>
      <div>{`Oggi ho ${n} appuntamenti`}</div>
    </div>
  );
};

export default Agenda;
