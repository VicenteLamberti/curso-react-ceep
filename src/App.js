import { Component } from "react";
import  FormularioCadastro  from "./components/FormularioCadastro";
import  ListaDeNotas  from "./components/ListaDeNotas";
//import {ListaDeNotas} from "./components/ListaDeNotas"; // Assim é se eu colocar export sem default la no componente
class App extends Component {
  render() {
    return (

      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>

    );

  }

}

export default App;
