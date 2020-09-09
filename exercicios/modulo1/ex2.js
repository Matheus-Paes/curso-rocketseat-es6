const usuarios = [
  {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
  {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
  {nome: 'Lucas', idade: 30, empresa: 'Facebook'},
];
//2.1
const idade = usuarios.map(user => user.idade);
console.log(idade);

//2.2
const filter = usuarios.filter(user => user.empresa === 'Rocketseat' && user.idade > 18);
console.log(filter);

//2.3
const find = usuarios.find(user => user.empresa === 'Google');
console.log(find);

//2.4
const calculo = usuarios.map(user => ({...user, idade: user.idade*2})).filter(user => user.idade <= 50);
console.log(calculo);