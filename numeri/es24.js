/*
  ESERCIZIO RIASSUNTIVO 10 (Sfida) - Analisi numerica

  Dato un numero n passato come parametro:
  - verifica se è positivo (> 0)
  - verifica se è pari
  - calcola il valore assoluto
  - calcola la radice quadrata (se negativo arrotonda a 2 decimali)

  Restituisci: { positivo: true, pari: false, assoluto: 25, radice: 5 }
  Per n = -25: { positivo: false, pari: false, assoluto: 25, radice: NaN }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es24(n) {
  // TODO: scrivi qui la tua soluzione
  const positivo = n > 0;
  const pari = n % 2 === 0;
  const assoluto = Math.abs(n);
  const radice = n >= 0 ? Math.sqrt(n) : NaN;
  return { positivo, pari, assoluto, radice };
}

// --- NON MODIFICARE SOTTO ---
export { es24 };
