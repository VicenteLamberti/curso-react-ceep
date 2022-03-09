import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/ArrayDeNotas";
class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

    // this.state = {
    //   Movi para a classe ArrayDeNotas
    //   notas: [],
    //   Movi para a classe Categorias
    //   categorias:["Jogos","Música"]
    // };
  }

  // Mudei para a class ArrayDeNotas
  // criarNota(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria};
  //   const novoArrayDeNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas: novoArrayDeNotas
  //   }
  //   this.setState(novoEstado);

  // }

  //  Mudei para a class ArrayDeNotas
  // deletarNota(index) {
  //   console.log('oi');
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index, 1);
  //   this.setState({ notas: arrayNotas });
  // }



  // Movi para a classe Categorias
  // adicionarCategoria(nomeCategoria){
  //   const novoArrayCategorias = [...this.state.categorias,nomeCategoria];
  //   const novoEstado = {...this.state, categorias:novoArrayCategorias};
  //   this.setState(novoEstado);
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        // categorias={this.state.categoria} 
        // criarNota={this.criarNota.bind(this)}
               
        categorias={this.categorias} 
        criarNota={this.notas.adicionarNota.bind(this.notas)} />

        <main className="conteudo-principal">
          <ListaDeCategorias 
          // categorias={this.state.categorias} 
          // adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.categorias} 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}/>
        </main>
        <ListaDeNotas
          notas={this.notas}
          apagarNota={this.notas.apagarNota.bind(this.notas)} />
      </section>
    );
  }
}

export default App;
