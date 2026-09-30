import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const GRAY = '\x1b[90m';

const args = process.argv.slice(2);
let filterFolder = null;
let filterNum = null;

if (args.length >= 1) {
  if (isNaN(args[0])) {
    filterFolder = args[0];
    if (args.length >= 2 && !isNaN(args[1])) {
      filterNum = parseInt(args[1], 10);
    }
  } else {
    filterNum = parseInt(args[0], 10);
  }
}

function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) return true;
  if (a == null || b == null) return a === b;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  if (typeof a === 'object') {
    const ka = Object.keys(a);
    const kb = Object.keys(b);
    if (ka.length !== kb.length) return false;
    return ka.every(k => k in b && deepEqual(a[k], b[k]));
  }
  return false;
}

function format(v) {
  if (typeof v === 'string') return `"${v}"`;
  if (typeof v === 'number') {
    if (isNaN(v)) return 'NaN';
    if (!isFinite(v)) return v > 0 ? 'Infinity' : '-Infinity';
  }
  return JSON.stringify(v);
}

async function main() {
  const { default: cases } = await import(resolve(__dirname, '..', '__tests__/cases.js'));

  const filtered = cases.filter(g => {
    if (filterFolder && g.folder !== filterFolder) return false;
    if (filterNum) {
      const n = parseInt(g.file.replace('es', ''), 10);
      if (n !== filterNum) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    process.stderr.write(`${RED}Nessun esercizio trovato.${RESET}\n`);
    process.exit(1);
  }

  const totalTests = filtered.reduce((n, g) => n + g.tests.length, 0);

  printHeader(totalTests);

  for (const group of filtered) {
    const mod = await import(resolve(__dirname, '..', group.folder, `${group.file}.js`));

    process.stdout.write(`\n${CYAN}${BOLD} ${'─'.repeat(56)}${RESET}\n`);
    process.stdout.write(` ${BOLD}${group.label}${RESET}\n`);
    process.stdout.write(`${CYAN}${BOLD} ${'─'.repeat(56)}${RESET}\n`);

    let groupOk = 0;

    for (const t of group.tests) {
      const fn = mod[t.fn];
      if (typeof fn !== 'function') {
        process.stdout.write(` ${RED}⚠${RESET}  ${t.id}  Funzione "${t.fn}" non trovata\n`);
        results.push(0);
        continue;
      }

      let received;
      try {
        received = fn(...t.args);
      } catch (err) {
        process.stdout.write(` ${RED}❌${RESET}  ${t.id}  ${t.desc}\n`);
        process.stdout.write(`       ${RED}Errore:${RESET} ${err.message}\n`);
        if (t.hint) process.stdout.write(`       ${YELLOW}💡 ${t.hint}${RESET}\n`);
        results.push(0);
        continue;
      }

      if (deepEqual(received, t.expected)) {
        process.stdout.write(` ${GREEN}✅${RESET}  ${t.id}  ${t.desc}  ${GRAY}(${format(received)})${RESET}\n`);
        groupOk++;
        results.push(1);
      } else {
        process.stdout.write(` ${RED}❌${RESET}  ${t.id}  ${t.desc}\n`);
        process.stdout.write(`       ${RED}Ricevuto:${RESET} ${format(received)}\n`);
        process.stdout.write(`       ${GREEN}Atteso:${RESET}   ${format(t.expected)}\n`);
        if (t.hint) process.stdout.write(`       ${YELLOW}💡 ${t.hint}${RESET}\n`);
        results.push(0);
      }
    }

    if (groupOk === group.tests.length) {
      process.stdout.write(` ${GREEN}${BOLD}  ★ Tutti superati!${RESET}\n`);
    }
  }

  const total = results.length;
  const passed = results.filter(r => r === 1).length;
  const pct = total > 0 ? Math.round((passed / total) * 100) : 0;

  process.stdout.write(`\n${'═'.repeat(60)}\n`);
  if (passed === total) {
    process.stdout.write(`${GREEN}${BOLD}  PUNTEGGIO: ${passed}/${total} (${pct}%) ★ PERFETTO!${RESET}\n`);
  } else if (pct >= 70) {
    process.stdout.write(`${YELLOW}${BOLD}  PUNTEGGIO: ${passed}/${total} (${pct}%)${RESET}\n`);
  } else {
    process.stdout.write(`${RED}${BOLD}  PUNTEGGIO: ${passed}/${total} (${pct}%)${RESET}\n`);
  }
  process.stdout.write(`${'═'.repeat(60)}\n`);
}

const results = [];

function printHeader(totalTests) {
  let title;
  if (filterFolder && filterNum) {
    title = `VERIFICA ESERCIZIO ${filterFolder}/${filterNum}`;
  } else if (filterFolder) {
    title = `VERIFICA ESERCIZI — ${filterFolder.toUpperCase()}`;
  } else if (filterNum) {
    title = `VERIFICA ESERCIZIO es${filterNum}`;
  } else {
    title = 'VERIFICA ESERCIZI';
  }

  process.stdout.write(`\n${'╔' + '═'.repeat(58) + '╗'}\n`);
  process.stdout.write(`║${' '.repeat(Math.max(0, Math.floor((58 - title.length) / 2)))}${BOLD}${title}${RESET}${' '.repeat(Math.max(0, Math.ceil((58 - title.length) / 2)))}║\n`);
  process.stdout.write(`${'╚' + '═'.repeat(58) + '╝'}\n\n`);

  process.stdout.write(` ${GRAY}usa: npm run check                     (tutti)${RESET}\n`);
  process.stdout.write(` ${GRAY}usa: npm run check -- N                (es. N)${RESET}\n`);
  process.stdout.write(` ${GRAY}usa: npm run check -- numeri           (cartella)${RESET}\n`);
  process.stdout.write(` ${GRAY}usa: npm run check -- numeri 1         (cartella + es.)${RESET}\n`);
  if (totalTests > 0) {
    process.stdout.write(` ${GRAY}test: ${totalTests}${RESET}\n\n`);
  }
}

main().catch(err => {
  console.error('Errore nel runner:', err);
  process.exit(1);
});
