/*
  ESERCIZIO 5 - NOT logico (!)

  ! inverte il valore booleano: true diventa false e viceversa.

  Sintassi:  !valore
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es5_1(val) {
  // 1. Restituisci il contrario di val
  // TODO: scrivi qui la tua soluzione
return !val;
}

function es5_2() {
  // 2. Restituisci il risultato di !true
  // TODO: scrivi qui la tua soluzione
return !true;
}

function es5_3(disconnesso) {
  // 3. Se disconnesso è true, restituisci "Accesso negato", altrimenti "Benvenuto"
  // (usa l'operatore ! per invertire la condizione)
  // TODO: scrivi qui la tua soluzione
return !disconnesso ? "Benvenuto" : "Accesso negato";
}

// --- NON MODIFICARE SOTTO ---
export { es5_1, es5_2, es5_3 };
