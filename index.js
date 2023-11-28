
let placar = subtracao(85, 9)

function subtracao(vitorias, derrotas){
    let somatoria = vitorias - derrotas
    return somatoria
}

 let vitorias = 76
 let heroi = "O Herói tem saldo de: "
 let nivel = " E está no nivel: "

       if(vitorias <= 10){
       console.log(heroi + placar + nivel + "Ferro") 
      }else if(vitorias >= 11 && vitorias <= 20) {
        console.log(heroi + placar + nivel + "Bronze")
      }else if(vitorias >= 21 && vitorias <= 50) {
        console.log(heroi + placar + nivel + "Prata")
      }else if(vitorias >= 51 && vitorias <= 80) {
        console.log(heroi + placar + nivel + "Ouro")
      }else if(vitorias >= 81 && vitorias <= 90) {
        console.log(heroi + placar + nivel + "Diamante") 
      }else if(vitorias >= 91 && vitorias <= 100) {
        console.log(heroi + placar + nivel + "Lendário")
      }else{
        console.log(heroi + placar + nivel + "Imortal")
      } 
      
          
    
  
