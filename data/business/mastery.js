import * as fs from 'fs';

const nameFile = './data/business/namen.txt';
/**
 * getRandomName
 * Lesen Sie aus der Namens liste (file Path oben) einen Zufälligen Namen aus und geben Sie diesen zurück.
 * @returns string "nadine"
 */
export function getRandomName () {
  // Tips:
  // 1.) File einlesen (mit "utf-8" encoding)
  // 2.) Text in Array umwandeln (Zeilenumbrüche werden als "\r\n" erkannt.)
  // 3.) Zufälliges Arrayelement auslesen (von Dimension 0 bis Array Länge)
  // 4.) return name

  // Lösung:
  // File einlesen:
  const data = fs.readFileSync(nameFile, "utf-8");

  // Text To Array:
  const nameList = data.split("\r\n");

  // Get Random Array Node:
  const listLength = nameList.length;
  const randomIndex = Math.floor(Math.random() * listLength);
  const randomName = nameList[randomIndex];

  // Return Random Name
  return randomName;
};

/**
 * getAutoComplette
 * Für jede Änderung im Textfeld wird diese Methode aufgerufen.
 * Lesen Sie aus der Namens liste (file Path oben) sämtliche Möglichen Namen aus und geben Sie diese als Array zurück.
 * ACHTUNG: Grosskleinschreibung ignorieren.
 * @param {*} name "Nad"
 * @returns array ["Nadia", "Nadine"...]
 */
export function getAutoComplete (name) {
  // Lösung:

  // File einlesen:
  const data = fs.readFileSync(nameFile, "utf-8");

  // Text To Array:
  const nameList = data.split("\r\n");

  // Get all Entrys from NameListe that beginns like name
  let autoComplete = [];
  for (let index in nameList) {
    const checkName = nameList[index];
    const nameCompare = checkName.substring(0, name.length);

    if (nameCompare.toLocaleLowerCase() === name.toLocaleLowerCase()) {
      autoComplete.push(checkName);
    }
  }
  return autoComplete;
};

/**
 * getStatistik
 * Für jede Änderung im Textfeld wird diese Methode aufgerufen.
 * LLesen Sie aus der Namens liste (file Path oben) sämtliche Möglichen Namen aus und berechnen Sie sämltiche Statisik Werte.
 * @param {*} name
 * @returns object {minNameLength: 4, maxNameLength: 10, averageNameLength: 6}
 */
export function getStatistics (name) {
  /*
  const stat = {
      minNameLength: 0, // Die länge des Kleinsten gefundenen Namen
      maxNameLength: 0, // Die Lönge des Grösten gefundenen Namen
      averageNameLength: 0, // Die Durchschnitts länge aller gefundenen Namen (runden mit Math.floor) ACHTUNG division by zero unterbinden !
  };
  return stat;
  */

  // Lösung:

  // Init Result
  let stat = {
    minNameLength: 0, // Die Länge des kleinsten gefundenen Namen
    maxNameLength: 0, // Die Länge des grössten gefundenen Namen
    averageNameLength: 0, // Die Durchschnittslänge aller gefundenen Namen
  };

  // File einlesen:
  const data = fs.readFileSync(nameFile, "utf-8");

  // Text To Array:
  const nameList = data.split("\r\n");

  // Get all Entrys from NameListe that beginns like name
  let avgLength = 0;
  let avgDivider = 0;
  for (let index in nameList) {
    const checkName = nameList[index];
    const nameCompare = checkName.substring(0, name.length);
    if (nameCompare.toLocaleLowerCase() === name.toLocaleLowerCase()) {
      if (stat.minNameLength > checkName.length || stat.minNameLength === 0) stat.minNameLength = checkName.length;
      if (stat.maxNameLength < checkName.length) stat.maxNameLength = checkName.length;
      avgDivider++;
      avgLength += checkName.length;
    }
  }

  // No division by zero
  if (avgDivider > 0) {
    stat.averageNameLength = Math.floor(avgLength / avgDivider);
  }

  // Return
  return stat;
};
