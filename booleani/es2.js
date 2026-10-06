/*
  ESERCIZIO 2 - Operatori di confronto (>, <, >=, <=)

  >   maggiore
  <   minore
  >=  maggiore o uguale
  <=  minore o uguale

  Sintassi:  valore > valore
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es2_1(a, b) {
  // 1. Restituisci true se a è maggiore di b
  // TODO: scrivi qui la tua soluzione
if (a > b) {
  return true;
} else {
  return false;
}
}

function es2_2(a, b) {
  // 2. Restituisci true se a è minore o uguale a b
  // TODO: scrivi qui la tua soluzione
  if (a <= b) {
    return true;
  } else {
    return false;
  }
}

function es2_3(eta) {
  // 3. Restituisci true se eta è >= 18 (maggiorenne)
  // TODO: scrivi qui la tua soluzione
  if (eta >= 18) {
    return true;
  } else {
    return false;
  }
}

// --- NON MODIFICARE SOTTO ---
export { es2_1, es2_2, es2_3 };
