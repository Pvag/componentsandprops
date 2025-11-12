"use client";

import React from "react";
import Agenda from "../../Components/Agenda";

const contact = () => {
  let numeroDiAppuntamenti = 3;

  function prenotaClicked() {
    numeroDiAppuntamenti = numeroDiAppuntamenti + 1;

    console.log("nuova prenotazione, appuntamenti:", numeroDiAppuntamenti);
  }

  return (
    <div>
      <h1>contact</h1>
      <button onClick={prenotaClicked} className="border border-amber-700 p-2 m-2 bg-gray-700">
        Prenota
      </button>
      <Agenda n={numeroDiAppuntamenti} />
    </div>
  );
};

export default contact;
