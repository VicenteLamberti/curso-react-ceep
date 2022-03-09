import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo="";
    this.texto="";
    this.categoria="Sem Categoria"
    this.state={categorias:[]};
    this._novasCategorias= this._novasCategorias.bind(this);
  

  }

  componentDidMount(){
    
    this.props.categorias.inscrever(this._novasCategorias);
    
  }

  _novasCategorias(categorias){
    this.setState({...this.state,categorias});
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _hanleMudancaTitulo(evento){
    console.log(evento);
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _hanleMudancaTexto(evento){
    console.log(evento);
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evt){
    evt.preventDefault();
    evt.stopPropagation();
    console.log(this.props)
    this.props.criarNota(this.titulo,this.texto,this.categoria);
  }
  _handleMudancaCategoria(evt){
    evt.stopPropagation();
    this.categoria = evt.target.value;
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._criarNota.bind(this)}
      >
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria,index) =>{
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._hanleMudancaTitulo.bind(this)}
          
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._hanleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
