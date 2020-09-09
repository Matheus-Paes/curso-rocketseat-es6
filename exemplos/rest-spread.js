//operador rest/spread
//(nessa aula foi instalada um pack do balbel  @babel/plugin-proposal-object-rest-spread)

//REST (serve pra pegar o resto das propriedades)
//exemplo utilizando objeto:
const usuario = {
  nome: 'Matheus',
  idade: 22,
  empresa: 'Project Shadow'
};
const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
//nesse exemplo, o operado '...'(rest) atribui todo o resto do objeto á da varivel 'resto'.

//exemplo com array

const arr = [1,2,3,4];

const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);
//nesse exemplo, o valor '1' é atribuído a variavel 'a', valor '2' a variavel 'b', e os valores '3' e '4' a variavel c.

//exemplo passando como parametro de função:
function soma (a, b, ...params) {
  return params;
}

console.log(soma(1,3,4,4,5,6,7));
//REST

//SPREAD
// spread tem a função de propagar os dados para outra estrutura de dados
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2]
console.log(arr3);

const usuario1 = {
  nome: 'Matheus',
  idade: 22,
  empresa: 'Shadow Project',
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2);
//operador rest/spread

