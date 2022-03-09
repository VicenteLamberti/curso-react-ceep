import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: [],
      categorias:["Jogos","Música"]
    };
  }
  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria};
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayDeNotas
    }
    this.setState(novoEstado);

  }

  deletarNota(index) {
    console.log('oi');
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias,nomeCategoria];
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);

  }


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.state.categorias} adicionarCategoria={this.adicionarCategoria.bind(this)}/>
        </main>
        <ListaDeNotas
          notas={this.state.notas}
          apagarNota={this.deletarNota.bind(this)} />
      </section>
    );
  }
}

export default App;
