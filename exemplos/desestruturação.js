//desetruturaçã de objetos
const usuario = {
  nome: 'Matheus',
  idade: 22,
  endereco: {
    cidade: 'Sorocaba',
    estado: 'SP',
  },
};
//forma tradicional de acessar as variaveis do objeto:
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;

//utilizando desestruturação:
const { nome, idade, endereco: { cidade } } = usuario;

//utilizando destruturação passando como parametro de uma função:
function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
//desetruturaçã de objetos