/*
  ESERCIZIO 12 - toFixed()

  .toFixed() formatta un numero con un numero fisso di
  decimali. Restituisce una stringa.

  Sintassi:  numero.toFixed(decimali)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es12_1(n) {
  // 1. Formatta n con 2 decimali
  // TODO: scrivi qui la tua soluzione
  return n.toFixed(2);
}

function es12_2() {
  // 2. Formatta 5 con 3 decimali
  // TODO: scrivi qui la tua soluzione
  return (5).toFixed(3);
}

function es12_3(n, d) {
  // 3. Riceve un numero n e un numero di decimali d, restituisci n.toFixed(d)
  // TODO: scrivi qui la tua soluzione
  return n.toFixed(d);
}

// --- NON MODIFICARE SOTTO ---
export { es12_1, es12_2, es12_3 };
