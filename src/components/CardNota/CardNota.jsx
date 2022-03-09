import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteImg} from '../../assets/img/delete.svg'  // Assim 1 o nome tem que começar com maiusculo e so funciona se criar como npx create react app
// import deleteSVG from "../../assets/img/delete.svg";


class CardNota extends Component {
  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
           <DeleteImg onClick={this.apagar.bind(this)}/>  
           {/* <img src={deleteSVG}/> Assim 1  */}
           <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
       
      </section>
    );
  }
}

export default CardNota;
