/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

// DEFINITION
function thirdAngle(a, b) {
  return 180 - a - b;
}

// APPEL
console.log(thirdAngle(23, 44));
console.log(thirdAngle(55, 66));

module.exports = thirdAngle;
