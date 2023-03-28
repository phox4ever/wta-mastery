import * as fs from 'fs';

// Pfad zur Namensliste
const nameFile = './app/data/business/namen.txt';

/**
 * getRandomName
 * 
 * Liest die Datei nameFile und gibt einen zufälligen Namen zurück.
 * 
 * @returns string
 */
export function getRandomName () {
  // Tipps:
  // 1.) Datei einlesen (mit "utf-8" encoding)
  // 2.) Text in Array umwandeln (Zeilenumbrüche werden entweder als "\n" oder als "\r\n" erkannt)
  // 3.) Zufälliges Arrayelement auslesen und zurückgeben
  let randomName = '';
  let names = getNames();
  randomName = names[Math.floor(Math.random() * names.length)];

  return randomName;
};

function getNames() {
    let names = [];
    fs.readFileSync(nameFile, 'utf-8').split(/\r?\n/).forEach((line) => {
        names.push(line);
    });
    return names;
}

/**
 * getAutoComplette
 * 
 * Liest die Datei nameFile und gibt alle Namen zurück, die mit dem übergebenen Query beginnen.
 * 
 * @param {*} query
 * @returns array<string>
 */
export function getAutoComplete (query) {
  // Tipp: Zum Einlesen der Datei kann dieselbe Funktion wie in getRandomName verwendet werden.
  // Du darfst diese Funktion auch gerne in eine eigene Funktion auslagern, statt den Code zu duplizieren.

  let autoComplete = [];
  let names = getNames();

  names.forEach((name) => {
        if (name.startsWith(query)) {
            autoComplete.push(name);
        }
  });

  return autoComplete;
};

/**
 * getStatistik
 * 
 * Liest die Datei nameFile und berechnet die folgende Statistik für alle Namen, die mit dem
 * übergebenen Query beginnen
 * 
 * @param {*} query
 * @returns object {minNameLength: number, maxNameLength: number, averageNameLength: number}
 */
export function getStatistics (query) {
  let stat = {
    minNameLength: 0, // Die Länge des kürzesten gefundenen Namen
    maxNameLength: 0, // Die Länge des längsten gefundenen Namen
    averageNameLength: 0, // Die Durchschnittslänge aller gefundenen Namen
  };

  let count = 0;
  // Tipps:
  // 1. Zum Einlesen der Namen wird dieselbe Funktion wie oben benötigt.
  // 2. Zum Suchen von passenden Namen, wird ähnlicher Code wie in getAutoComplete benötigt.
  getNames().forEach((name) => {
    if (name.startsWith(query)) {
        if (stat.minNameLength === 0 || name.length < stat.minNameLength) {
            stat.minNameLength = name.length;
        }
        if (name.length > stat.maxNameLength) {
            stat.maxNameLength = name.length;
        }
        stat.averageNameLength += name.length;
        count++;
    }
  });

  stat.averageNameLength = Math.round(stat.averageNameLength / count);

  return stat;
};
