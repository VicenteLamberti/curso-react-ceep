import React, { Component } from "react";

class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="titulo no component" />
                <textarea placeholder="escreva sua nota" />
                <button>Criar Nota</button>
            </form >
        )
    }
}
export default FormularioCadastro;