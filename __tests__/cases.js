export default [
  // ──────────────────────────────────────────────
  // STRINGHE
  // ──────────────────────────────────────────────
  {
    folder: 'stringhe',
    file: 'es1',
    label: 'length',
    tests: [
      { id: '1.1', desc: 'Restituisce la lunghezza del nome',        fn: 'es1_1', args: ['Mattia'],  expected: 6,   hint: 'Usa .length sulla stringa' },
      { id: '1.2', desc: 'Lunghezza di "JavaScript" = 10',           fn: 'es1_2', args: [],         expected: 10,  hint: '"JavaScript" ha 10 caratteri' },
      { id: '1.3', desc: 'Lunghezza di una frase',                   fn: 'es1_3', args: ['Ciao!'],  expected: 5,   hint: '.length conta spazi e punteggiatura' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es2',
    label: 'at()',
    tests: [
      { id: '2.1', desc: 'Primo carattere di "Computer"',            fn: 'es2_1', args: ['Computer'], expected: 'C', hint: 'Usa at(0)' },
      { id: '2.2', desc: 'Ultimo carattere di "JavaScript"',         fn: 'es2_2', args: ['JavaScript'], expected: 't', hint: 'Usa at(-1) per l\'ultimo carattere' },
      { id: '2.3', desc: 'Terzo carattere di "Programma"',           fn: 'es2_3', args: ['Programma'], expected: 'o', hint: 'at(2) dà il terzo carattere (indice parte da 0)' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es3',
    label: 'includes()',
    tests: [
      { id: '3.1', desc: '"JavaScript" contiene "Script"',           fn: 'es3_1', args: [],    expected: true,  hint: 'includes() restituisce true/false' },
      { id: '3.2', desc: '"Programmazione" NON contiene "Python"',   fn: 'es3_2', args: [],    expected: false, hint: 'includes() restituisce false se non trova' },
      { id: '3.3', desc: 'Verifica presenza "@" in una mail',        fn: 'es3_3', args: ['a@b.it'], expected: true, hint: 'Usa stringa.includes(carattere)' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es4',
    label: 'startsWith()',
    tests: [
      { id: '4.1', desc: '"JavaScript" inizia con "Java"',           fn: 'es4_1', args: [],    expected: true,  hint: 'Usa startsWith("Java")' },
      { id: '4.2', desc: 'URL inizia con "https"',                   fn: 'es4_2', args: ['https://google.com'], expected: true, hint: 'startsWith() controlla l\'inizio' },
      { id: '4.3', desc: '"Milano" NON inizia con "Roma"',           fn: 'es4_3', args: [],    expected: false, hint: 'startsWith("Roma") su "Milano" è false' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es5',
    label: 'endsWith()',
    tests: [
      { id: '5.1', desc: '"documento.pdf" termina con ".pdf"',       fn: 'es5_1', args: [],    expected: true,  hint: 'Usa endsWith(".pdf")' },
      { id: '5.2', desc: '"ciao" termina con "o"',                   fn: 'es5_2', args: [],    expected: true,  hint: 'endsWith() controlla la fine' },
      { id: '5.3', desc: '"musica.mp3" NON termina con ".wav"',      fn: 'es5_3', args: [],    expected: false, hint: 'endsWith(".wav") su ".mp3" è false' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es6',
    label: 'indexOf()',
    tests: [
      { id: '6.1', desc: 'Posizione di "a" in "banana"',             fn: 'es6_1', args: [],    expected: 1,    hint: 'indexOf("a") in "banana" trova la prima a in posizione 1' },
      { id: '6.2', desc: 'Posizione di "sole" in frase',             fn: 'es6_2', args: [],    expected: 3,    hint: '"sole" inizia alla posizione 3 in "Il sole splende"' },
      { id: '6.3', desc: 'Parola inesistente restituisce -1',        fn: 'es6_3', args: ['ciao', 'x'], expected: -1, hint: 'Se non trova, indexOf() restituisce -1' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es7',
    label: 'slice()',
    tests: [
      { id: '7.1', desc: 'Prime tre lettere di "JavaScript"',        fn: 'es7_1', args: ['JavaScript'], expected: 'Jav', hint: 'slice(0, 3) estrae dal 0 al 2' },
      { id: '7.2', desc: 'Dominio da "mario@gmail.com"',            fn: 'es7_2', args: [],    expected: 'gmail.com', hint: 'Il dominio inizia dopo "@" (indice 6)' },
      { id: '7.3', desc: 'Ultimi 4 caratteri con indice negativo',   fn: 'es7_3', args: ['JavaScript'], expected: 'ript',  hint: 'slice(-4) prende gli ultimi 4 caratteri' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es8',
    label: 'replace()',
    tests: [
      { id: '8.1', desc: 'Sostituisce "rosso" con "blu"',            fn: 'es8_1', args: [],    expected: 'blu', hint: 'replace("rosso", "blu") sulla parola "rosso"' },
      { id: '8.2', desc: 'Cambia nome in una frase',                 fn: 'es8_2', args: ['Ciao Mario'], expected: 'Ciao Luca', hint: 'replace("Mario", "Luca")' },
      { id: '8.3', desc: 'Sostituisce "2024" con "2025"',            fn: 'es8_3', args: [],    expected: '2025', hint: 'replace("2024", "2025")' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es9',
    label: 'replaceAll()',
    tests: [
      { id: '9.1', desc: 'Spazi sostituiti con "_"',                 fn: 'es9_1', args: ['ciao mondo'], expected: 'ciao_mondo', hint: 'replaceAll(" ", "_")' },
      { id: '9.2', desc: 'Virgole sostituite con ";"',               fn: 'es9_2', args: ['a,b,c'], expected: 'a;b;c', hint: 'replaceAll(",", ";")' },
      { id: '9.3', desc: 'Tutte le "a" diventano "@"',               fn: 'es9_3', args: ['mamma'], expected: 'm@mm@', hint: 'replaceAll("a", "@")' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es10',
    label: 'split()',
    tests: [
      { id: '10.1', desc: 'Divide lista di nomi separati da virgole', fn: 'es10_1', args: ['Anna,Bob,Clara'], expected: ['Anna', 'Bob', 'Clara'], hint: 'split(",")' },
      { id: '10.2', desc: 'Divide data "12/06/2026"',                fn: 'es10_2', args: [],    expected: ['12', '06', '2026'], hint: 'split("/")' },
      { id: '10.3', desc: 'Divide frase parola per parola',          fn: 'es10_3', args: ['buona giornata'], expected: ['buona', 'giornata'], hint: 'split(" ") con spazio' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es11',
    label: 'trim()',
    tests: [
      { id: '11.1', desc: 'Rimuove spazi intorno al nome',           fn: 'es11_1', args: ['  Mario  '], expected: 'Mario', hint: 'trim() toglie spazi iniziali e finali' },
      { id: '11.2', desc: 'Pulisce email con spazi',                  fn: 'es11_2', args: ['  mario@mail.it  '], expected: 'mario@mail.it', hint: 'trim() funziona su qualsiasi stringa' },
      { id: '11.3', desc: 'Confronta lunghezza prima e dopo trim',   fn: 'es11_3', args: ['  a  '], expected: [5, 1], hint: 'Restituisci [originale.length, trimmed.length]' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es12',
    label: 'toUpperCase()',
    tests: [
      { id: '12.1', desc: 'Nome in maiuscolo',                       fn: 'es12_1', args: ['mattia'], expected: 'MATTIA', hint: 'usa .toUpperCase()' },
      { id: '12.2', desc: 'Frase in maiuscolo',                      fn: 'es12_2', args: ['ciao mondo'], expected: 'CIAO MONDO', hint: '' },
      { id: '12.3', desc: 'Email in maiuscolo',                      fn: 'es12_3', args: ['mario@mail.it'], expected: 'MARIO@MAIL.IT', hint: '' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es13',
    label: 'toLowerCase()',
    tests: [
      { id: '13.1', desc: 'Cognome in minuscolo',                    fn: 'es13_1', args: ['ROSSI'], expected: 'rossi', hint: 'usa .toLowerCase()' },
      { id: '13.2', desc: 'Frase tutta minuscola',                   fn: 'es13_2', args: ['CIAO MONDO'], expected: 'ciao mondo', hint: '' },
      { id: '13.3', desc: 'Confronto email case-insensitive',        fn: 'es13_3', args: ['Mario@Mail.It', 'mario@mail.it'], expected: true, hint: 'Confronta dopo aver convertito entrambe in minuscolo' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es14',
    label: 'substring()',
    tests: [
      { id: '14.1', desc: 'Estrae sottostringa con substring',       fn: 'es14_1', args: ['JavaScript', 0, 4], expected: 'Java', hint: 'substring(inizio, fine)' },
      { id: '14.2', desc: 'Prime 5 lettere di una parola',           fn: 'es14_2', args: ['Computer'], expected: 'Compu', hint: 'substring(0, 5)' },
      { id: '14.3', desc: 'Indice negativo in substring',            fn: 'es14_3', args: ['JavaScript', -2, 4], expected: 'Java', hint: 'substring() tratta indici negativi come 0' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es15',
    label: 'Riassuntivo 1 - Email',
    tests: [
      { id: '15.1', desc: 'Pulisce e valida email',                  fn: 'es15', args: [], expected: { pulita: 'mario.rossi@gmail.com', valida: true }, hint: 'Usa trim() → toLowerCase() → includes("@")' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es16',
    label: 'Riassuntivo 2 - Array colori',
    tests: [
      { id: '16.1', desc: 'Divide stringa in array',                 fn: 'es16', args: [], expected: ['rosso', 'verde', 'giallo', 'blu'], hint: 'Usa split(",")' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es17',
    label: 'Riassuntivo 3 - File',
    tests: [
      { id: '17.1', desc: 'Verifica estensione ed estrae nome',      fn: 'es17', args: [], expected: { isJpg: true, nome: 'vacanze_estate_2026' }, hint: 'endsWith(".jpg") e replace(".jpg", "") o slice(-4) + slice(0, ...)' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es18',
    label: 'Riassuntivo 4 - Nome',
    tests: [
      { id: '18.1', desc: 'Rimuove spazi, maiuscolo, lunghezza',    fn: 'es18', args: [], expected: { pulito: 'MATTIA', lunghezza: 6 }, hint: 'trim() → toUpperCase() → .length' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es19',
    label: 'Riassuntivo 5 - Sostituzione',
    tests: [
      { id: '19.1', desc: 'Sostituisce "oggi" con "domani"',        fn: 'es19', args: [], expected: 'domani piove e domani fa freddo', hint: 'replaceAll("oggi", "domani")' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es20',
    label: 'Riassuntivo 6 - URL',
    tests: [
      { id: '20.1', desc: 'Analisi URL completa',                    fn: 'es20', args: [], expected: { isHttps: true, hasMozilla: true, dominio: 'developer.mozilla.org' }, hint: 'startsWith("https"), includes("mozilla"), slice(8) dopo "https://"' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es21',
    label: 'Riassuntivo 7 - Frase utente',
    tests: [
      { id: '21.1', desc: 'Pulisce frase: trim + lower + replace spazi', fn: 'es21', args: ['  Ciao Mondo  '], expected: 'ciao_mondo', hint: 'trim() → toLowerCase() → replaceAll(" ", "_")' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es22',
    label: 'Riassuntivo 8 - Nome e cognome',
    tests: [
      { id: '22.1', desc: 'Divide in nome e cognome',               fn: 'es22', args: [], expected: { nome: 'Mario', cognome: 'Rossi' }, hint: 'split(" ") sullo spazio' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es23',
    label: 'Riassuntivo 9 - Parola',
    tests: [
      { id: '23.1', desc: 'Analisi completa della parola',           fn: 'es23', args: [], expected: { primo: 'P', ultimo: 'e', lunghezza: 14, primeSei: 'Progra' }, hint: 'at(0), at(-1), .length, slice(0, 6)' },
    ],
  },
  {
    folder: 'stringhe',
    file: 'es24',
    label: 'Riassuntivo 10 (Sfida) - Email',
    tests: [
      { id: '24.1', desc: 'Estrae utente, dominio e verifica .com',  fn: 'es24', args: [], expected: { utente: 'utente', dominio: 'example.com', endsWithCom: true }, hint: 'split("@")[0], split("@")[1], endsWith(".com")' },
    ],
  },

  // ──────────────────────────────────────────────
  // NUMERI
  // ──────────────────────────────────────────────
  {
    folder: 'numeri',
    file: 'es1',
    label: '+ - * / %',
    tests: [
      { id: 'N1.1', desc: 'Somma 3 + 5 = 8',             fn: 'es1_1', args: [3, 5],   expected: 8,   hint: 'usa +' },
      { id: 'N1.2', desc: 'Prodotto 4 * 6 = 24',          fn: 'es1_2', args: [4, 6],   expected: 24,  hint: 'usa *' },
      { id: 'N1.3', desc: 'Resto 17 % 5 = 2',             fn: 'es1_3', args: [17, 5],  expected: 2,   hint: 'usa %' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es2',
    label: 'NaN e isNaN()',
    tests: [
      { id: 'N2.1', desc: 'Produce NaN (es. 0/0)',        fn: 'es2_1', args: [],        expected: NaN,    hint: 'usa 0/0' },
      { id: 'N2.2', desc: 'isNaN(0/0) = true',            fn: 'es2_2', args: [],        expected: true,   hint: 'isNaN(0/0)' },
      { id: 'N2.3', desc: 'isNaN("test") = true',         fn: 'es2_3', args: ["test"],  expected: true,   hint: 'isNaN() su stringa non numerica' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es3',
    label: 'Infinity e isFinite()',
    tests: [
      { id: 'N3.1', desc: 'Produce Infinity',              fn: 'es3_1', args: [],        expected: Infinity, hint: 'usa 1/0' },
      { id: 'N3.2', desc: 'isFinite(Infinity) = false',    fn: 'es3_2', args: [],        expected: false,    hint: 'Infinity non è finito' },
      { id: 'N3.3', desc: 'isFinite(42) = true',           fn: 'es3_3', args: [42],      expected: true,     hint: '42 è un numero finito' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es4',
    label: 'Math.round()',
    tests: [
      { id: 'N4.1', desc: 'round(4.3) = 4',               fn: 'es4_1', args: [4.3],     expected: 4,  hint: 'Math.round()' },
      { id: 'N4.2', desc: 'round(4.5) = 5',               fn: 'es4_2', args: [],        expected: 5,  hint: '.5 arrotonda per eccesso' },
      { id: 'N4.3', desc: 'round(-2.5) = -2',             fn: 'es4_3', args: [],        expected: -2, hint: '.5 arrotonda per eccesso (verso l\'alto)' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es5',
    label: 'Math.floor()',
    tests: [
      { id: 'N5.1', desc: 'floor(3.7) = 3',               fn: 'es5_1', args: [3.7],     expected: 3,  hint: 'Math.floor() arrotonda verso il basso' },
      { id: 'N5.2', desc: 'floor(3.99) = 3',              fn: 'es5_2', args: [],        expected: 3,  hint: 'Math.floor(3.99)' },
      { id: 'N5.3', desc: 'floor(-3.1) = -4',             fn: 'es5_3', args: [],        expected: -4, hint: 'floor(-3.1) arrotonda VERSO IL BASSO → -4' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es6',
    label: 'Math.ceil()',
    tests: [
      { id: 'N6.1', desc: 'ceil(3.2) = 4',                fn: 'es6_1', args: [3.2],     expected: 4,  hint: 'Math.ceil() arrotonda verso l\'alto' },
      { id: 'N6.2', desc: 'ceil(3.01) = 4',               fn: 'es6_2', args: [],        expected: 4,  hint: 'Math.ceil(3.01)' },
      { id: 'N6.3', desc: 'ceil(-3.9) = -3',              fn: 'es6_3', args: [],        expected: -3, hint: 'ceil(-3.9) arrotonda VERSO L\'ALTO → -3' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es7',
    label: 'Math.min() e Math.max()',
    tests: [
      { id: 'N7.1', desc: 'min(10, 5) = 5',               fn: 'es7_1', args: [10, 5],      expected: 5,  hint: 'Math.min()' },
      { id: 'N7.2', desc: 'max(3, 8, 1) = 8',            fn: 'es7_2', args: [3, 8, 1],    expected: 8,  hint: 'Math.max() accetta più parametri' },
      { id: 'N7.3', desc: 'min(10, 20, 5, 15) = 5',      fn: 'es7_3', args: [10, 20, 5, 15], expected: 5, hint: 'Math.min() con 4 parametri' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es8',
    label: 'Math.pow() e **',
    tests: [
      { id: 'N8.1', desc: 'pow(2, 3) = 8',               fn: 'es8_1', args: [2, 3],     expected: 8,   hint: 'Math.pow(base, esponente)' },
      { id: 'N8.2', desc: '5 ** 2 = 25',                  fn: 'es8_2', args: [5, 2],     expected: 25,  hint: 'usa **' },
      { id: 'N8.3', desc: 'Quadrato di 6 = 36',           fn: 'es8_3', args: [6],       expected: 36,  hint: '6 * 6 o Math.pow(6, 2) o 6 ** 2' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es9',
    label: 'Math.sqrt()',
    tests: [
      { id: 'N9.1', desc: 'sqrt(9) = 3',                  fn: 'es9_1', args: [9],       expected: 3,   hint: 'Math.sqrt()' },
      { id: 'N9.2', desc: 'sqrt(144) = 12',               fn: 'es9_2', args: [],        expected: 12,  hint: 'Math.sqrt(144)' },
      { id: 'N9.3', desc: 'sqrt(-1) = NaN',               fn: 'es9_3', args: [],        expected: NaN, hint: 'La radice di un negativo non è definita' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es10',
    label: 'Math.abs()',
    tests: [
      { id: 'N10.1', desc: 'abs(-7) = 7',                 fn: 'es10_1', args: [-7],     expected: 7,   hint: 'Math.abs()' },
      { id: 'N10.2', desc: 'abs(-42) = 42',               fn: 'es10_2', args: [],       expected: 42,  hint: 'Math.abs(-42)' },
      { id: 'N10.3', desc: 'Distanza tra 10 e 3 = 7',    fn: 'es10_3', args: [10, 3],  expected: 7,   hint: 'Math.abs(a - b)' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es11',
    label: 'parseInt() e parseFloat()',
    tests: [
      { id: 'N11.1', desc: 'parseInt("42") = 42',          fn: 'es11_1', args: ["42"],     expected: 42,   hint: 'parseInt() da stringa a intero' },
      { id: 'N11.2', desc: 'parseFloat("3.14") = 3.14',   fn: 'es11_2', args: [],         expected: 3.14, hint: 'parseFloat() legge decimali' },
      { id: 'N11.3', desc: 'parseInt("101", 2) = 5',      fn: 'es11_3', args: [],         expected: 5,    hint: 'parseInt("101", 2) interpreta in binario' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es12',
    label: 'toFixed()',
    tests: [
      { id: 'N12.1', desc: '(3.14159).toFixed(2) = "3.14"', fn: 'es12_1', args: [3.14159], expected: "3.14", hint: '.toFixed(2) restituisce una stringa' },
      { id: 'N12.2', desc: '(5).toFixed(3) = "5.000"',      fn: 'es12_2', args: [],        expected: "5.000", hint: 'toFixed() aggiunge zeri' },
      { id: 'N12.3', desc: '(2.456).toFixed(1) = "2.5"',   fn: 'es12_3', args: [2.456, 1], expected: "2.5",  hint: 'toFixed() arrotonda' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es13',
    label: 'Number()',
    tests: [
      { id: 'N13.1', desc: 'Number("42") = 42',             fn: 'es13_1', args: ["42"],     expected: 42,   hint: 'Number() converte in numero' },
      { id: 'N13.2', desc: 'Number("42") da stringa',       fn: 'es13_2', args: [],         expected: 42,   hint: 'Number("42")' },
      { id: 'N13.3', desc: 'Number da "3.14" = 3.14',       fn: 'es13_3', args: [],         expected: 3.14, hint: 'Number("3.14")' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es14',
    label: '++ -- += -=',
    tests: [
      { id: 'N14.1', desc: '5 += 1 = 6',                    fn: 'es14_1', args: [5],        expected: 6,  hint: 'usa += 1' },
      { id: 'N14.2', desc: 'Post-incremento: 3++ = 3',      fn: 'es14_2', args: [3],        expected: 3,  hint: 'n++ restituisce il valore originale' },
      { id: 'N14.3', desc: '10 -= 3 = 7',                   fn: 'es14_3', args: [10],       expected: 7,  hint: 'usa -= 3' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es15',
    label: 'Riassuntivo 1 - Calcolo IVA',
    tests: [
      { id: 'N15.1', desc: 'Calcola IVA 22% su 100€',      fn: 'es15', args: [], expected: { netto: 100, iva: 22, lordo: 122 }, hint: 'lordo = netto + netto * 22 / 100' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es16',
    label: 'Riassuntivo 2 - Media voti',
    tests: [
      { id: 'N16.1', desc: 'Media di [7,8,6,9,8]',         fn: 'es16', args: [], expected: { somma: 38, media: 7.6, mediaArrotondata: 8 }, hint: 'Somma i voti, dividi per il numero, arrotonda con Math.round' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es17',
    label: 'Riassuntivo 3 - Cerchio',
    tests: [
      { id: 'N17.1', desc: 'Cerchio raggio 5',              fn: 'es17', args: [], expected: { circonferenza: "31.42", area: "78.54" }, hint: 'Usa Math.PI e toFixed(2)' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es18',
    label: 'Riassuntivo 4 - IMC',
    tests: [
      { id: 'N18.1', desc: 'IMC 70kg 1.75m',                fn: 'es18', args: [], expected: { peso: 70, altezza: 1.75, imc: "22.9" }, hint: 'peso / (altezza * altezza), poi toFixed(1)' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es19',
    label: 'Riassuntivo 5 - Pari o dispari',
    tests: [
      { id: 'N19.1', desc: '4 è pari',                     fn: 'es19', args: [4], expected: true,  hint: 'n % 2 === 0' },
      { id: 'N19.2', desc: '7 è dispari',                  fn: 'es19', args: [7], expected: false, hint: 'n % 2 !== 0' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es20',
    label: 'Riassuntivo 6 - Minimo tra tre',
    tests: [
      { id: 'N20.1', desc: 'min(12, 5, 8) = 5',            fn: 'es20', args: [12, 5, 8], expected: 5, hint: 'Math.min(a, b, c)' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es21',
    label: 'Riassuntivo 7 - Secondi in HH:MM:SS',
    tests: [
      { id: 'N21.1', desc: '3661 secondi = 1h 1m 1s',      fn: 'es21', args: [3661], expected: { ore: 1, minuti: 1, secondi: 1 }, hint: 'ore = Math.floor(s/3600), minuti = Math.floor((s%3600)/60)' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es22',
    label: 'Riassuntivo 8 - Sconto',
    tests: [
      { id: 'N22.1', desc: '25% sconto su 80€',            fn: 'es22', args: [], expected: { originale: 80, sconto: 25, importoSconto: 20, finale: 60 }, hint: 'importoSconto = prezzo * sconto / 100' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es23',
    label: 'Riassuntivo 9 - Calcolatrice',
    tests: [
      { id: 'N23.1', desc: '10 + 5 = 15',                  fn: 'es23', args: [10, 5, "+"], expected: 15, hint: 'usa if/else sull\'operatore' },
      { id: 'N23.2', desc: '20 / 4 = 5',                   fn: 'es23', args: [20, 4, "/"], expected: 5, hint: '' },
      { id: 'N23.3', desc: '6 * 7 = 42',                   fn: 'es23', args: [6, 7, "*"],  expected: 42, hint: '' },
    ],
  },
  {
    folder: 'numeri',
    file: 'es24',
    label: 'Riassuntivo 10 (Sfida) - Analisi numero',
    tests: [
      { id: 'N24.1', desc: 'Analisi di 25',                fn: 'es24', args: [25],  expected: { positivo: true, pari: false, assoluto: 25, radice: 5 }, hint: 'positivo: > 0, pari: % 2 === 0' },
      { id: 'N24.2', desc: 'Analisi di -25',               fn: 'es24', args: [-25], expected: { positivo: false, pari: false, assoluto: 25, radice: NaN }, hint: 'sqrt(-1) → NaN' },
    ],
  },

  // ──────────────────────────────────────────────
  // BOOLEANI
  // ──────────────────────────────────────────────
  {
    folder: 'booleani',
    file: 'es1',
    label: '=== e !==',
    tests: [
      { id: 'B1.1', desc: '3 === 3 è true',                fn: 'es1_1', args: [3, 3],     expected: true,  hint: '=== confronta valore E tipo' },
      { id: 'B1.2', desc: '3 !== 4 è true',                fn: 'es1_2', args: [3, 4],     expected: true,  hint: '!== è vero se diversi' },
      { id: 'B1.3', desc: '5 === "5" è false',             fn: 'es1_3', args: [],         expected: false, hint: 'number !== string' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es2',
    label: '> < >= <=',
    tests: [
      { id: 'B2.1', desc: '7 > 3 è true',                  fn: 'es2_1', args: [7, 3],     expected: true,  hint: 'usa >' },
      { id: 'B2.2', desc: '5 <= 5 è true',                 fn: 'es2_2', args: [5, 5],     expected: true,  hint: '<= minore o uguale' },
      { id: 'B2.3', desc: '20 >= 18 è true',               fn: 'es2_3', args: [20],       expected: true,  hint: '>= 18 per maggiorenne' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es3',
    label: '&& (AND)',
    tests: [
      { id: 'B3.1', desc: 'true && true = true',           fn: 'es3_1', args: [true, true],   expected: true,  hint: '&& vero solo se entrambi veri' },
      { id: 'B3.2', desc: 'true && false = false',         fn: 'es3_2', args: [],              expected: false, hint: 'Basta un false per avere false' },
      { id: 'B3.3', desc: '18+ e patente = può guidare',   fn: 'es3_3', args: [18, true],      expected: true,  hint: 'eta >= 18 && patente' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es4',
    label: '|| (OR)',
    tests: [
      { id: 'B4.1', desc: 'false || true = true',           fn: 'es4_1', args: [false, true],  expected: true,  hint: '|| vero se almeno uno vero' },
      { id: 'B4.2', desc: 'false || false = false',         fn: 'es4_2', args: [],              expected: false, hint: 'Tutti false → false' },
      { id: 'B4.3', desc: 'admin OR editor può accedere',   fn: 'es4_3', args: [true, false],   expected: true,  hint: 'Basta uno dei due' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es5',
    label: '! (NOT)',
    tests: [
      { id: 'B5.1', desc: '!true = false',                  fn: 'es5_1', args: [true],          expected: false, hint: '! inverte' },
      { id: 'B5.2', desc: '!true = false',                  fn: 'es5_2', args: [],              expected: false, hint: '!true' },
      { id: 'B5.3', desc: 'Disconnesso → Accesso negato',   fn: 'es5_3', args: [true],          expected: "Accesso negato", hint: 'Usa if/else con !' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es6',
    label: '?? (Nullish coalescing)',
    tests: [
      { id: 'B6.1', desc: 'null ?? "default" = "default"',  fn: 'es6_1', args: [null],         expected: "default",         hint: '?? usa il default solo se null/undefined' },
      { id: 'B6.2', desc: '0 ?? "default" = 0',             fn: 'es6_2', args: [],              expected: 0,                 hint: '0 non è null/undefined' },
      { id: 'B6.3', desc: 'null ?? "non presente"',         fn: 'es6_3', args: [],              expected: "valore non presente", hint: 'null → default' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es7',
    label: 'Truthy e Falsy',
    tests: [
      { id: 'B7.1', desc: '1 è truthy',                     fn: 'es7_1', args: [1],             expected: true,  hint: 'Boolean(1) o !!1' },
      { id: 'B7.2', desc: '0 è falsy',                      fn: 'es7_2', args: [],              expected: false, hint: '0 è falsy' },
      { id: 'B7.3', desc: '"false" (stringa) è truthy',     fn: 'es7_3', args: [],              expected: true,  hint: 'Solo stringa vuota è falsy' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es8',
    label: 'Boolean()',
    tests: [
      { id: 'B8.1', desc: 'Boolean(1) = true',              fn: 'es8_1', args: [1],             expected: true,  hint: 'Boolean() converte in booleano' },
      { id: 'B8.2', desc: 'Boolean("") = false',            fn: 'es8_2', args: [],              expected: false, hint: 'Stringa vuota → false' },
      { id: 'B8.3', desc: 'Boolean(42) = true',             fn: 'es8_3', args: [],              expected: true,  hint: 'Numero non-zero → true' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es9',
    label: 'Ternario ? :',
    tests: [
      { id: 'B9.1', desc: 'true ? "sì" : "no" = "sì"',     fn: 'es9_1', args: [true],          expected: "sì",  hint: 'cond ? val1 : val2' },
      { id: 'B9.2', desc: '18 anni = maggiorenne',          fn: 'es9_2', args: [18],            expected: "maggiorenne", hint: 'eta >= 18 ? "maggiorenne" : "minorenne"' },
      { id: 'B9.3', desc: '4 è pari',                       fn: 'es9_3', args: [4],             expected: "pari", hint: 'n % 2 === 0 ? "pari" : "dispari"' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es10',
    label: 'Combinazione operatori',
    tests: [
      { id: 'B10.1', desc: '17enne accompagnato → ok',     fn: 'es10_1', args: [17, true],      expected: true,  hint: 'eta >= 18 || (eta >= 16 && accompagnato)' },
      { id: 'B10.2', desc: '5 è tra 1 e 10',               fn: 'es10_2', args: [5],             expected: true,  hint: 'n >= 1 && n <= 10' },
      { id: 'B10.3', desc: '"ciao" non vuota e non null',   fn: 'es10_3', args: ["ciao"],        expected: true,  hint: 's !== "" && s !== null' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es11',
    label: 'Riassuntivo 1 - Validazione età',
    tests: [
      { id: 'B11.1', desc: 'Mario 25 è valido',            fn: 'es11', args: [{ nome: "Mario", eta: 25 }], expected: true,  hint: 'nome !== "" && eta >= 18' },
      { id: 'B11.2', desc: 'Nome vuoto invalido',           fn: 'es11', args: [{ nome: "", eta: 30 }],      expected: false, hint: 'Il nome non può essere vuoto' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es12',
    label: 'Riassuntivo 2 - Accesso',
    tests: [
      { id: 'B12.1', desc: 'Admin non loggato → accesso',  fn: 'es12', args: ["admin", false],  expected: true,  hint: 'admin ha sempre accesso' },
      { id: 'B12.2', desc: 'Viewer loggato → accesso',     fn: 'es12', args: ["viewer", true],  expected: true,  hint: 'viewer solo se loggato' },
      { id: 'B12.3', desc: 'Viewer non loggato → negato',  fn: 'es12', args: ["viewer", false], expected: false, hint: '' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es13',
    label: 'Riassuntivo 3 - Sconto',
    tests: [
      { id: 'B13.1', desc: 'No coupon, 80€, fedele → no',  fn: 'es13', args: [false, 80, true],  expected: false, hint: 'coupon || (totale >= 100 && fedele)' },
      { id: 'B13.2', desc: 'Coupon → sconto',              fn: 'es13', args: [true, 50, false],    expected: true,  hint: 'Con coupon sempre sconto' },
      { id: 'B13.3', desc: '150€ + fedele → sconto',       fn: 'es13', args: [false, 150, true],   expected: true,  hint: 'supera 100€ ed è fedele' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es14',
    label: 'Riassuntivo 4 - Anno bisestile',
    tests: [
      { id: 'B14.1', desc: '2000 è bisestile',              fn: 'es14', args: [2000], expected: true,  hint: 'Divisibile per 400 → true' },
      { id: 'B14.2', desc: '2024 è bisestile',              fn: 'es14', args: [2024], expected: true,  hint: 'Divisibile per 4 e non per 100' },
      { id: 'B14.3', desc: '1900 NON è bisestile',          fn: 'es14', args: [1900], expected: false, hint: 'Divisibile per 100 ma non per 400' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es15',
    label: 'Riassuntivo 5 - Password',
    tests: [
      { id: 'B15.1', desc: '"ciao1234" è valida',           fn: 'es15', args: ["ciao1234"], expected: true,  hint: 'length >= 8 && non vuota && contiene numero' },
      { id: 'B15.2', desc: '"ciao" è troppo corta',         fn: 'es15', args: ["ciao"],     expected: false, hint: 'Solo 5 caratteri' },
    ],
  },
  {
    folder: 'booleani',
    file: 'es16',
    label: 'Riassuntivo 6 (Sfida) - Login',
    tests: [
      { id: 'B16.1', desc: 'admin/1234 = completo',        fn: 'es16', args: ["admin", "1234"],      expected: "completo", hint: 'admin + 1234 → completo' },
      { id: 'B16.2', desc: 'user/abc = limitato',           fn: 'es16', args: ["user", "abc"],       expected: "limitato", hint: 'user + abc → limitato' },
      { id: 'B16.3', desc: 'admin/sbagliata = negato',     fn: 'es16', args: ["admin", "sbagliata"], expected: "negato",   hint: 'Password errata' },
    ],
  },

  // ──────────────────────────────────────────────
  // ARRAY
  // ──────────────────────────────────────────────
  {
    folder: 'array',
    file: 'es1',
    label: '.length',
    tests: [
      { id: 'A1.1', desc: 'Lunghezza [1,2,3] = 3',        fn: 'es1_1', args: [[1, 2, 3]],     expected: 3, hint: '.length' },
      { id: 'A1.2', desc: 'Lunghezza [a,b,c,d] = 4',      fn: 'es1_2', args: [],              expected: 4, hint: '["a","b","c","d"] ha 4 elementi' },
      { id: 'A1.3', desc: 'Array vuoto = 0',               fn: 'es1_3', args: [],              expected: 0, hint: 'Array vuoto → length 0' },
    ],
  },
  {
    folder: 'array',
    file: 'es2',
    label: 'push() e pop()',
    tests: [
      { id: 'A2.1', desc: 'push 3 in [1,2]',               fn: 'es2_1', args: [[1, 2], 3],    expected: [1, 2, 3], hint: 'push() aggiunge alla fine' },
      { id: 'A2.2', desc: 'pop da [1,2,3]',                fn: 'es2_2', args: [[1, 2, 3]],    expected: [1, 2],    hint: 'pop() rimuove l\'ultimo' },
      { id: 'A2.3', desc: 'unshift 1 in [2,3]',            fn: 'es2_3', args: [[2, 3], 1],    expected: [1, 2, 3], hint: 'unshift() aggiunge all\'inizio' },
    ],
  },
  {
    folder: 'array',
    file: 'es3',
    label: 'unshift() e shift()',
    tests: [
      { id: 'A3.1', desc: 'unshift 1 in [2,3]',            fn: 'es3_1', args: [[2, 3], 1],    expected: [1, 2, 3], hint: 'unshift() aggiunge all\'inizio' },
      { id: 'A3.2', desc: 'shift da [1,2,3]',              fn: 'es3_2', args: [[1, 2, 3]],    expected: [2, 3],    hint: 'shift() rimuove il primo' },
      { id: 'A3.3', desc: 'push poi unshift',              fn: 'es3_3', args: [[2], 1],       expected: [1, 2, 1], hint: 'push(1) poi unshift(1)' },
    ],
  },
  {
    folder: 'array',
    file: 'es4',
    label: 'includes()',
    tests: [
      { id: 'A4.1', desc: 'include 2 in [1,2,3]',          fn: 'es4_1', args: [[1, 2, 3], 2],   expected: true,  hint: 'includes() restituisce boolean' },
      { id: 'A4.2', desc: '"giallo" in colori?',           fn: 'es4_2', args: [],                expected: false, hint: 'includes() su array di colori' },
      { id: 'A4.3', desc: 'Contiene sia a che b?',         fn: 'es4_3', args: [["a", "b", "c"], "a", "b"], expected: true, hint: 'Usa &&' },
    ],
  },
  {
    folder: 'array',
    file: 'es5',
    label: 'indexOf() e lastIndexOf()',
    tests: [
      { id: 'A5.1', desc: 'indexOf 2 in [1,2,3]',          fn: 'es5_1', args: [[1, 2, 3], 2],      expected: 1,    hint: 'indexOf() dà la posizione' },
      { id: 'A5.2', desc: 'lastIndexOf 2 in [1,2,2,3]',    fn: 'es5_2', args: [[1, 2, 2, 3], 2],   expected: 2,    hint: 'lastIndexOf() ultima occorrenza' },
      { id: 'A5.3', desc: 'Cerca 4 in [1,2,3]',            fn: 'es5_3', args: [[1, 2, 3], 4],      expected: "non trovato", hint: 'indexOf() === -1 → non trovato' },
    ],
  },
  {
    folder: 'array',
    file: 'es6',
    label: 'join()',
    tests: [
      { id: 'A6.1', desc: 'join con virgola',               fn: 'es6_1', args: [["a", "b", "c"]], expected: "a,b,c", hint: 'join() default è virgola' },
      { id: 'A6.2', desc: 'join con spazio',                fn: 'es6_2', args: [["a", "b", "c"]], expected: "a b c", hint: 'join(" ") con spazio' },
      { id: 'A6.3', desc: 'join senza separatore',          fn: 'es6_3', args: [["a", "b", "c"]], expected: "abc",   hint: 'join("")' },
    ],
  },
  {
    folder: 'array',
    file: 'es7',
    label: 'concat()',
    tests: [
      { id: 'A7.1', desc: 'concat [1,2] + [3,4]',          fn: 'es7_1', args: [[1, 2], [3, 4]],       expected: [1, 2, 3, 4], hint: 'concat() unisce' },
      { id: 'A7.2', desc: 'concat tre array',              fn: 'es7_2', args: [[1], [2], [3]],         expected: [1, 2, 3],    hint: 'a.concat(b, c)' },
      { id: 'A7.3', desc: 'concat elemento',               fn: 'es7_3', args: [[1, 2], 3],            expected: [1, 2, 3],    hint: 'concat() accetta anche non-array' },
    ],
  },
  {
    folder: 'array',
    file: 'es8',
    label: 'slice()',
    tests: [
      { id: 'A8.1', desc: 'Primi 3 di [1,2,3,4,5]',        fn: 'es8_1', args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3],    hint: 'slice(0, 3)' },
      { id: 'A8.2', desc: 'Ultimi 2 con indice negativo',   fn: 'es8_2', args: [[1, 2, 3, 4, 5]], expected: [4, 5],       hint: 'slice(-2)' },
      { id: 'A8.3', desc: 'Copia intero array',             fn: 'es8_3', args: [[1, 2, 3]],       expected: [1, 2, 3],    hint: 'slice() senza parametri copia tutto' },
    ],
  },
  {
    folder: 'array',
    file: 'es9',
    label: 'splice()',
    tests: [
      { id: 'A9.1', desc: 'Rimuovi indice 1 da [1,2,3,4]',    fn: 'es9_1', args: [[1, 2, 3, 4]],       expected: [1, 3, 4],    hint: 'splice(1, 1) rimuove 1 elemento' },
      { id: 'A9.2', desc: 'Sostituisci indice 0 con 9',        fn: 'es9_2', args: [[1, 2, 3], 9],       expected: [9, 2, 3],    hint: 'splice(0, 1, elemento)' },
      { id: 'A9.3', desc: 'Rimuovi a indice 2 da [10,20,30]',  fn: 'es9_3', args: [[10, 20, 30, 40], 2], expected: [10, 20, 40], hint: 'splice(indice, 1)' },
    ],
  },
  {
    folder: 'array',
    file: 'es10',
    label: 'reverse()',
    tests: [
      { id: 'A10.1', desc: 'Inverti [1,2,3]',               fn: 'es10_1', args: [[1, 2, 3]],    expected: [3, 2, 1], hint: 'reverse() inverte' },
      { id: 'A10.2', desc: 'Inverti [1,2,3] in reverse',    fn: 'es10_2', args: [],             expected: [3, 2, 1], hint: '[1, 2, 3].reverse()' },
      { id: 'A10.3', desc: '[1,2,1] è palindromo',           fn: 'es10_3', args: [[1, 2, 1]],    expected: true,     hint: 'Confronta copia.reverse() con originale' },
    ],
  },
  {
    folder: 'array',
    file: 'es11',
    label: 'sort()',
    tests: [
      { id: 'A11.1', desc: 'Ordina [c,a,b]',                 fn: 'es11_1', args: [["c", "a", "b"]],          expected: ["a", "b", "c"],       hint: 'sort() ordina alfabeticamente' },
      { id: 'A11.2', desc: 'Ordina numeri [10,3,1,20]',      fn: 'es11_2', args: [[10, 3, 1, 20]],            expected: [1, 3, 10, 20],        hint: 'sort((a,b) => a - b)' },
      { id: 'A11.3', desc: 'Ordina decrescente',             fn: 'es11_3', args: [[10, 3, 1, 20]],            expected: [20, 10, 3, 1],        hint: 'sort((a,b) => b - a)' },
    ],
  },
  {
    folder: 'array',
    file: 'es12',
    label: 'map()',
    tests: [
      { id: 'A12.1', desc: 'Raddoppia [1,2,3]',              fn: 'es12_1', args: [[1, 2, 3]],      expected: [2, 4, 6],      hint: 'map(x => x * 2)' },
      { id: 'A12.2', desc: 'Maiuscolo [a,b,c]',              fn: 'es12_2', args: [["a", "b", "c"]], expected: ["A", "B", "C"], hint: 'map(s => s.toUpperCase())' },
      { id: 'A12.3', desc: 'Lunghezza stringhe',             fn: 'es12_3', args: [["ciao", "mondo"]], expected: [4, 5],         hint: 'map(s => s.length)' },
    ],
  },
  {
    folder: 'array',
    file: 'es13',
    label: 'filter()',
    tests: [
      { id: 'A13.1', desc: 'Numeri > 10',                    fn: 'es13_1', args: [[5, 12, 8, 15, 3]],       expected: [12, 15],            hint: 'filter(n => n > 10)' },
      { id: 'A13.2', desc: 'Stringhe >= 5 caratteri',        fn: 'es13_2', args: [["mela", "banana", "kiwi", "fragola"]], expected: ["banana", "fragola"], hint: 'filter(s => s.length >= 5)' },
      { id: 'A13.3', desc: 'Numeri pari',                    fn: 'es13_3', args: [[1, 2, 3, 4, 5, 6]],      expected: [2, 4, 6],           hint: 'filter(n => n % 2 === 0)' },
    ],
  },
  {
    folder: 'array',
    file: 'es14',
    label: 'find() e findIndex()',
    tests: [
      { id: 'A14.1', desc: 'Primo > 10 in [3,8,12,5]',       fn: 'es14_1', args: [[3, 8, 12, 5]],              expected: 12,           hint: 'find(n => n > 10)' },
      { id: 'A14.2', desc: 'Indice primo che inizia con A',  fn: 'es14_2', args: [["pippo", "Anna", "pluto"]], expected: 1,            hint: 'findIndex(s => s.startsWith("A"))' },
      { id: 'A14.3', desc: 'Cerca 5 in [1,2,3]',             fn: 'es14_3', args: [[1, 2, 3]],                   expected: "non trovato", hint: 'find() o indexOf()' },
    ],
  },
  {
    folder: 'array',
    file: 'es15',
    label: 'Riassuntivo 1 - Lista spesa',
    tests: [
      { id: 'A15.1', desc: 'Manipola lista spesa',           fn: 'es15', args: [], expected: ["olio", "pane", "latte", "uova", "farina"], hint: 'push, unshift, pop' },
    ],
  },
  {
    folder: 'array',
    file: 'es16',
    label: 'Riassuntivo 2 - Unione liste',
    tests: [
      { id: 'A16.1', desc: 'Unisce due liste',               fn: 'es16', args: [], expected: ["Anna", "Bob", "Clara", "Davide", "Elena"], hint: 'concat()' },
    ],
  },
  {
    folder: 'array',
    file: 'es17',
    label: 'Riassuntivo 3 - Numeri pari',
    tests: [
      { id: 'A17.1', desc: 'Pari raddoppiati',               fn: 'es17', args: [], expected: [16, 24, 40, 28], hint: 'filter pari → map raddoppia' },
    ],
  },
  {
    folder: 'array',
    file: 'es18',
    label: 'Riassuntivo 4 - Maiuscolo',
    tests: [
      { id: 'A18.1', desc: 'Parole in maiuscolo unite',      fn: 'es18', args: [], expected: "CIAO MONDO JAVASCRIPT", hint: 'map + join' },
    ],
  },
  {
    folder: 'array',
    file: 'es19',
    label: 'Riassuntivo 5 - Media',
    tests: [
      { id: 'A19.1', desc: 'Media [7,8,9,6,10]',            fn: 'es19', args: [[7, 8, 9, 6, 10]], expected: { somma: 40, media: 8 }, hint: 'Ciclo for per sommare, poi dividi' },
    ],
  },
  {
    folder: 'array',
    file: 'es20',
    label: 'Riassuntivo 6 - Cerca elemento',
    tests: [
      { id: 'A20.1', desc: 'Trova 3 in [1,2,3,4,5]',        fn: 'es20', args: [[1, 2, 3, 4, 5], 3], expected: 2,  hint: 'indexOf()' },
      { id: 'A20.2', desc: 'Cerca 9 in [1,2,3]',            fn: 'es20', args: [[1, 2, 3], 9],       expected: -1, hint: 'indexOf() → -1 se non trovato' },
    ],
  },
  {
    folder: 'array',
    file: 'es21',
    label: 'Riassuntivo 7 - Rimuovi duplicati',
    tests: [
      { id: 'A21.1', desc: 'Rimuove duplicati da [1,2,2,3,4,4,5]', fn: 'es21', args: [], expected: [1, 2, 3, 4, 5], hint: 'filter con indexOf' },
    ],
  },
  {
    folder: 'array',
    file: 'es22',
    label: 'Riassuntivo 8 - Ordine alfabetico',
    tests: [
      { id: 'A22.1', desc: 'Frutta in ordine alfabetico',    fn: 'es22', args: [], expected: ["arancia", "banana", "fragola", "melone"], hint: 'sort()' },
    ],
  },
  {
    folder: 'array',
    file: 'es23',
    label: 'Riassuntivo 9 - Somma array',
    tests: [
      { id: 'A23.1', desc: 'Somma [1,2,3,4,5] = 15',         fn: 'es23', args: [[1, 2, 3, 4, 5]], expected: 15, hint: 'Ciclo for per sommare' },
      { id: 'A23.2', desc: 'Somma [10,-5,3] = 8',            fn: 'es23', args: [[10, -5, 3]],      expected: 8,  hint: '' },
    ],
  },
  {
    folder: 'array',
    file: 'es24',
    label: 'Riassuntivo 10 (Sfida) - Rubrica',
    tests: [
      { id: 'A24.1', desc: 'Cerca Anna → 123',               fn: 'es24', args: ["Anna"],  expected: "123",         hint: 'find() per cercare nella rubrica' },
      { id: 'A24.2', desc: 'Cerca Zorro → non trovato',      fn: 'es24', args: ["Zorro"], expected: "non trovato", hint: 'Se non trovato → "non trovato"' },
    ],
  },
];
