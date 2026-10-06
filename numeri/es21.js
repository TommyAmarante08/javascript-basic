/*
  ESERCIZIO RIASSUNTIVO 7 - Conversione secondi

  Dato un numero di secondi passato come parametro:
  - converti in ore, minuti, secondi (HH:MM:SS)
  - esempio: 3661 → 1 ora, 1 minuto, 1 secondo

  Restituisci: { ore: 1, minuti: 1, secondi: 1 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es21(secondi) {
  const ore = Math.floor(secondi / 3600);
  const minuti = Math.floor((secondi % 3600) / 60);
  const secondiRimanenti = secondi % 60;
  return { ore, minuti, secondi: secondiRimanenti };
}

// --- NON MODIFICARE SOTTO ---
export { es21 };
