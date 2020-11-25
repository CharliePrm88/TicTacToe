var i=0;
const combinazioneVincente = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
var player1 = [];
var player2= [];

let test = document.getElementsByClassName("casella");
test[0].addEventListener("click",() => { gioca(1);});
test[1].addEventListener("click",() => { gioca(2);});
test[2].addEventListener("click",() => { gioca(3);});
test[3].addEventListener("click",() => { gioca(4);});            
test[4].addEventListener("click",() => { gioca(5);});
test[5].addEventListener("click",() => { gioca(6);});
test[6].addEventListener("click",() => { gioca(7);});
test[7].addEventListener("click",() => { gioca(8);});
test[8].addEventListener("click",() => { gioca(9);});

function gioca(valore) {
              let ctx=test[valore-1].getContext("2d");
              if(i%2==0){
                  //non permettere al giocatore di riscrivere sulla stessa casella
                if(!player1.includes(valore)&&!player2.includes(valore)){
                  //inserire il valore nell'array 
                  player1.push(valore);
                  disegnaCroce(ctx);
                  i++;
  //verificare che il giocatore abbia vinto
                  let winner = haVinto(player1);
                  if(winner){
                      alert("Croce vince!");
                      azzera();
                  }
                }
              }else{
                if(!player1.includes(valore)&&!player2.includes(valore)){
                  disegnaCerchio(ctx);
                  player2.push(valore);
                  i++;
                  let winner = haVinto(player2);
                  if(winner){
                      alert("Cerchio vince!");
                      azzera();
                  }
                }
              }
              if(i>8){
                  alert("Pareggio!");
                  azzera();
              }
            }

//funzione per verificare che il giocatore abbia vinto
function haVinto(array){
    let risultato = false;
    for(let item of combinazioneVincente){
      let res = item.every(val => array.indexOf(val) !== -1);
      if(res){
        risultato = true;
        break;
      }
    }
    return risultato;
  }

//funzione per azzerare i valori i, player1, player2
function azzera(){
    player1= [];
    player2= [];
    for(i=0; i<9; i++)
    {let ctx = test[i].getContext("2d");
    ctx.clearRect(0, 0, test[i].width, test[i].height);}
    i=0;
}

function disegnaCroce(ctx){
    ctx.beginPath();        
    ctx.lineWidth = "5";
    ctx.strokeStyle = "red";
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
    //seconda stanghetta
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(300, 0);
    ctx.lineTo(0, 150);      
    ctx.stroke(); 
}

function disegnaCerchio(ctx){
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "blue";
    ctx.arc(150, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();   
}

