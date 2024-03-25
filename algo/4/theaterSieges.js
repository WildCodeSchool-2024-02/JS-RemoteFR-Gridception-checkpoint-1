/*
Un employé de théâtre souhaite obtenir la liste de tous les sièges de sa salle principale.
Dans la salle les places sont réparties comme suit :
   - Il y a 26 colonnes de sièges, numérotées de "1" » à "26".
   - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

Complète la fonction theaterSieges pour qu'elle renvoie un tableau
où chaque sous-tableau répertorie les positions des sièges dans une rangée.

exemple du résultat final :

[
  ["1-1", "1-2", "1-3", ..., "1-100"],
  ["2-1", "2-2", "2-3", ..., "2-100"],
  ...
  ["26-1", "26-2", "26-3", ..., "26-100"]
]
*/

function theaterSieges() {

  const finalArray = [];

  for (let column = 1; column <= 26; column += 1) {
    const columnArray = [];
    for (let seat = 1; seat <= 100; seat += 1) {
      columnArray.push(`${column}-${seat}`)
    }
    finalArray.push(columnArray);
  }
  return finalArray;
}

console.log(theaterSieges());


module.exports = theaterSieges;
