export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos[]
    }
    adicionarNota(titulo,texto,categoria){
        const novaNota = new Nota(titulo,texto,categoria);
        this.notas.push(novaNota);
    }

    apagarNota(indice){
        this.notas.splice(indice,1);
    }

    inscrever(qualFuncaoVaiObservar){
        this._inscritos.push(qualFuncaoVaiObservar)

    }
    notificar(){
        this._inscritos.forEach(funcaoInscrita=> {
            funcaoInscrita(this.categorias);
        });
    }

    
}

class Nota{
    constructor(titulo,texto,categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}