/*
  ESERCIZIO RIASSUNTIVO 3 - Circonferenza e area

  Dato un raggio di 5, calcola:
  - la circonferenza (2 * π * r)
  - l'area (π * r²)

  Usa Math.PI per π.
  Arrotonda entrambi i risultati con 2 decimali usando toFixed.

  Restituisci: { circonferenza: "31.42", area: "78.54" }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es17() {
  const raggio = 5;
  const circonferenza = (2 * Math.PI * raggio).toFixed(2);
  const area = (Math.PI * raggio * raggio).toFixed(2);
  return { circonferenza, area };
}

// --- NON MODIFICARE SOTTO ---
export { es17 };
