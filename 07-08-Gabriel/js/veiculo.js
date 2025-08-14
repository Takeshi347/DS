class Veiculo{

    set marca(valor){
       this._marca=valor;
    }
    get marca(){
       return this._marca;
    }
    set modelo(valor){
       this._modelo=valor;
    }
    get modelo(){
       return this._modelo;
    }
    set ano(valor){
       this._ano=valor;
    }
    get ano(){
       return this._ano;
    }
    ligar(){
       return `O veículo foi ligado <br>`;
    }
       informacoes(){
           return `
           Marca: ${this._marca} <br>
           Modelo: ${this._modelo} <br>
           Ano: ${this._ano} <br>        
          `
   }
 };
 
 