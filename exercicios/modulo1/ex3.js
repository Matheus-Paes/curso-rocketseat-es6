//3.1

const array = [1, 2, 3, 4, 5];

array.map((item) => {
  return item + 10;
});

//3.2

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => {
  return usuario.idade;
}

//3.3

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => {
  return {nome, idade};
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

//3.4

const promise = () => {
  return new Promise((resolve, reject) => {
    return resolve;
  })
}