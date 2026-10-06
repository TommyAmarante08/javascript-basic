/*
  ESERCIZIO 1 - Operatori di uguaglianza (=== e !==)

  ===  confronta valore E tipo (uguaglianza stretta)
  !==  confronta valore E tipo (diversità stretta)

  Sintassi:  valore === valore
  Sintassi:  valore !== valore
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es1_1(a, b) {
  // 1. Restituisci true se a e b sono uguali (stretti)
  // TODO: scrivi qui la tua soluzione
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

function es1_2(a, b) {
  // 2. Restituisci true se a e b sono diversi (stretti)
  // TODO: scrivi qui la tua soluzione

  if (a !== b) {
    return true;
  } else {
    return false;
  }
}

function es1_3() {
  // 3. Confronta 5 (numero) e "5" (stringa) con === e restituisci il risultato
  // TODO: scrivi qui la tua soluzione
  return 5 === "5";
}

// --- NON MODIFICARE SOTTO ---
export { es1_1, es1_2, es1_3 };
