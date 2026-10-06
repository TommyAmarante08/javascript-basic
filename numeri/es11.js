/*
  ESERCIZIO 11 - parseInt() e parseFloat()

  parseInt() converte una stringa in un numero intero.
  parseFloat() converte una stringa in un numero decimale.

  Sintassi:  parseInt(stringa)
  Sintassi:  parseInt(stringa, base)
  Sintassi:  parseFloat(stringa)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es11_1(s) {
  // 1. Converti la stringa s in un numero intero
  // TODO: scrivi qui la tua soluzione
  return parseInt(s);
}

function es11_2() {
  // 2. Converti la stringa "3.14" in un numero decimale
  // TODO: scrivi qui la tua soluzione
  return parseFloat("3.14");
}

function es11_3() {
  // 3. Converti la stringa "101" in base 2 (binario) usando parseInt
  // TODO: scrivi qui la tua soluzione
  return parseInt("101", 2);
}

// --- NON MODIFICARE SOTTO ---
export { es11_1, es11_2, es11_3 };
