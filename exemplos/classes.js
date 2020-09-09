class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{ //key word "extends" vai extender a classe "List" para essa classe
  constructor() {
    super();

    this.usuario = 'Matheus';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();