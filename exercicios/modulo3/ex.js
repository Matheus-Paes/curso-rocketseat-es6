//necessario importar o axios para realizar os exercicios
import axios from 'axios';

//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay(console.log('1s'));
  await delay(console.log('2s'));
  await delay(console.log('3s'));
}

umPorSegundo();

//1.2
const getUserInfoFromGithub = async (user) => {
  try {
    const response = axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuairo nao existe");
  }
}

getUserInfoFromGithub('Matheus-Paes');
getUserInfoFromGithub('aowepifçb');

//1.3
class Github {
  static async getRepo(repo) {
    try {
      const response = axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log("Repositorio nao existe");
    }
  }
}

Github.getRepo('rockeseat/rocketseat.com.br');
Github.getRepo('rockeseat/hasudqhwi');

//1.4
const buscaUsuario = async usuario => {
  try {
  const response = axios.get(`https://api.github.com/users/${usuario}`);
  
  console.log((await response).data);

  } catch (err) {
    console.log("Usuario nao existe");
  }
}

buscaUsuario('Matheus-Paes');