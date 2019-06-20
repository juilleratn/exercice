var i=0;

function player1(e){
    event.target.classList.add("player1")
}

function player2(e){
    event.target.classList.add("player2")

}
function tour(){
    console.log ('on entre dans tour');
    console.log('i = ' +i)
        if(i%2==0){
            player1();
        }
        else{
               player2();
        }
        i++;
win();
console.log('win');
function win(){
    var c1 = document.getElementById("x1y1");
    var c2 = document.getElementById("x1y2");
    var c3 = document.getElementById("x1y3");
    var c4 = document.getElementById("x2y1");
    var c5 = document.getElementById("x2y2");
    var c6 = document.getElementById("x2y3");
    var c7 = document.getElementById("x3y1");
    var c8 = document.getElementById("x3y2");
    var c9 = document.getElementById("x3y3");
    var comb1 = (c1).classList.contains("player1") && (c2).classList.contains("player1") && (c3).classList.contains("player1");
    var comb2 = (c4).classList.contains("player1") && (c5).classList.contains("player1") && (c6).classList.contains("player1");
    var comb3 = (c7).classList.contains("player1") && (c8).classList.contains("player1") && (c9).classList.contains("player1");
    var comb4 = (c1).classList.contains("player1") && (c4).classList.contains("player1") && (c7).classList.contains("player1");
    var comb5 = (c2).classList.contains("player1") && (c5).classList.contains("player1") && (c8).classList.contains("player1");
    var comb6 = (c3).classList.contains("player1") && (c6).classList.contains("player1") && (c9).classList.contains("player1");
    var comb7 = (c1).classList.contains("player1") && (c5).classList.contains("player1") && (c9).classList.contains("player1");
    var comb8 = (c3).classList.contains("player1") && (c5).classList.contains("player1") && (c7).classList.contains("player1");
    var combplay1 = (comb1  comb2  comb3  comb4  comb5 comb6  comb7 || comb8);
    /-----------------------Combinaisons Player 1-------------------------------------/
    var comb9 = (c1).classList.contains("player2") && (c2).classList.contains("player2") && (c3).classList.contains("player2");
    var comb10 = (c4).classList.contains("player2") && (c5).classList.contains("player2") && (c6).classList.contains("player2");
    var comb11 = (c7).classList.contains("player2") && (c8).classList.contains("player2") && (c9).classList.contains("player2");
    var comb12= (c1).classList.contains("player2") && (c4).classList.contains("player2") && (c7).classList.contains("player2");
    var comb13= (c2).classList.contains("player2") && (c5).classList.contains("player2") && (c8).classList.contains("player2");
    var comb14= (c3).classList.contains("player2") && (c6).classList.contains("player2") && (c9).classList.contains("player2");
    var comb15= (c1).classList.contains("player2") && (c5).classList.contains("player2") && (c9).classList.contains("player2");
    var comb16= (c3).classList.contains("player2") && (c5).classList.contains("player2") && (c7).classList.contains("player2");
    var combplay2 = (comb9  comb10  comb11  comb12  comb13 comb14  comb15 || comb16);
    /-----------------------Combinaisons Player 2-------------------------------------/
    if(combplay1){
        alert('joueur 1 à gagner');
        refresh.click();
    }

    if(combplay2){
        alert('joueur 2 à gagner');
        refresh.click();
    }

}
function effacer(){
    document.location.reload(false);
}

function play(){
    tour();

}