// console.log('Hello Boolean');

// BONUS // 
// PASSARE DA TERMINARE UNA FRASE DIVERSA DALLA PRECEDENTE, IN PIU' UN CONTROLLO SUL VALORE PASSATO CHE NON SIA UNDEFINED,
//  SE DOVESSE ESSERE INDEFINITO RESTITUISCE LA STRINGA Boolean 
const param = process.argv[2] ? process.argv[2] : 'Boolean';
console.log(`Hello ${param}`);