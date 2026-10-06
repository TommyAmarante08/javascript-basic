/*
  ESERCIZIO RIASSUNTIVO 1 - Calcolo IVA

  Dato un prezzo netto di 100€, calcola il prezzo lordo
  con IVA al 22%.

  Restituisci un oggetto: { netto: 100, iva: 22, lordo: 122 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es15() {
  const netto = 100;
  const iva = 22;
  const lordo = netto + (netto * iva) / 100;
  return { netto, iva, lordo };
}

// --- NON MODIFICARE SOTTO ---
export { es15 };
