export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos=[];
    }

    inscrever(qualFuncaoVaiObservar){
        this._inscritos.push(qualFuncaoVaiObservar)

    }
    desinscrever(qualFuncaoVaiPararDeObservar){
        console.log(this._inscritos.length);
        this._inscritos = this._inscritos.filter(funcao => funcao != qualFuncaoVaiPararDeObservar);
        console.log(this._inscritos.length);

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