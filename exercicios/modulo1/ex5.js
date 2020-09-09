//Rest
//5.1

const array = [1, 2, 3, 4, 5, 6];
const {x, ...y} = array;
console.log(x);
console.log(y);

function soma(...params) {
  return params.reduce((a, b) => a + b);
}
console.log(soma(1,2,3,4,5,6));

//Spread
//5.2
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } };

console.log(usuario2);
console.log(usuario3);