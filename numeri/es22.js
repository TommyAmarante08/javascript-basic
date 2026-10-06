/*
  ESERCIZIO RIASSUNTIVO 8 - Sconto percentuale

  Dato un prezzo originale di 80€ e uno sconto del 25%:
  - calcola l'importo dello sconto
  - calcola il prezzo finale

  Restituisci: { originale: 80, sconto: 25, importoSconto: 20, finale: 60 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es22() {
  const prezzo = 80;
  const sconto = 25;
  const importoSconto = (prezzo * sconto) / 100;
  const finale = prezzo - importoSconto;
  return { originale: prezzo, sconto, importoSconto, finale };
}

// --- NON MODIFICARE SOTTO ---
export { es22 };
