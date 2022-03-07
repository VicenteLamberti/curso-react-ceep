import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("trabalho", "trabalho", "estudos").map(cat => {
                    return (
                        <li>
                            <div>{cat}</div>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        )
    }

}
export default ListaDeNotas;