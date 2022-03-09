export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos=[];
    }

    inscrever(qualFuncaoVaiObservar){
        this._inscritos.push(qualFuncaoVaiObservar)

    }
    notificar(){
        this._inscritos.forEach(funcaoInscrita=> {
            funcaoInscrita(this.categorias);
        });
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
       }



}