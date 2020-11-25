var i=0;
const combinazioneVincente = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
let player1,player2=[];

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
              
            }
function disegnaCroce(ctx){
    ctx.beginPath();        
    ctx.lineWidth = "5";
    ctx.strokeStyle = "red";
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(300, 0);
    ctx.lineTo(0, 150);      
    ctx.stroke(); 
}

function disegnaCerchio(ctx){
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();   
}

