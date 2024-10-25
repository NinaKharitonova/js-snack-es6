/**Snack 1
 * 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */

//Creazione dell'array di oggetti
const roadBike = [
  { nome: "Fulmine", peso: 9 },
  { nome: "Fiamma", peso: 10 },
  { nome: "Freccia", peso: 8 },
  { nome: "Breccia", peso: 13 },
  { nome: "Sole", peso: 7 },
  { nome: "Rabbai", peso: 11 },
];

// Funzione per trovare la bicicletta con peso minore
let lightBike = roadBike[0];

for (let i = 1; i < roadBike.length; i++) {
  if (roadBike[i].peso < lightBike.peso) {
    lightBike = roadBike[i];
  }
}

// Stampa la bici con peso minore
console.log(
  `La bici più leggera è ${lightBike.nome} con peso di ${lightBike.peso}`
);

/**
Snack 2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

/** 
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

*/
