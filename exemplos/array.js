// operações em array.
const arr = [1,3,4,5,8,9];
const newArr = map(function(item, index) {
  return item + index;
}) //percorre um array e retorna algo de dentro
console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
});//retorna a "soma" dos elementos do array;
console.log(sum);

const filter = arr.filter(function(item){
  return item % 2 === 0;
});//retorna true ou false
console.log(filter);

const find = arr.find(function(item){
  return item === 4;
});//retorna o item encontrado dentro do array, caso não exista, retornará "undefined";
console.log(find);

//exemplo de arrow function utilizando map()
const newArr = arr.map(item => item * 2);