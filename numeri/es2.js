/*
  ESERCIZIO 2 - NaN e isNaN()

  NaN (Not a Number) è un valore speciale che rappresenta
  un risultato numerico non valido.

  isNaN(valore) restituisce true se il valore è NaN.
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es2_1() {
  // 1. Restituisci NaN (usa un'operazione matematica non valida)
  // TODO: scrivi qui la tua soluzione
return 0/0
}

function es2_2() {
  // 2. Verifica se il valore 0 / 0 è NaN (usa isNaN) e restituisci il risultato
  // TODO: scrivi qui la tua soluzione
return isNaN(0/0)
}

function es2_3(valore) {
  // 3. Riceve un valore e restituisce true se è NaN, false altrimenti
  // TODO: scrivi qui la tua soluzione
  return isNaN(valore);
}

// --- NON MODIFICARE SOTTO ---
export { es2_1, es2_2, es2_3 };
