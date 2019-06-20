var score = 0;
var aff= document.getElementById('affichage');
var multi = document.getElementById('multiplicateur');
var compteur = 1;
var MC= document.getElementById('achat');
var prix = 5;
var ramp =document.getElementById('Rampage')
var achat = 20;
var auto = 0;
//var waou = new Audio('car_horn.wav');
//waou.play();
//bredele. clicker

	function putaclic() {
		
		score = score + compteur;
		aff.innerHTML = score;
	}

	function incrementer (){

		if(score >= prix){
			compteur++;
		score = score - prix;
		aff.innerHTML = score;
		prix = prix*2;
		}else{
			alert("Pas assez de cookie ! ")
		}
		multi.value=("Power up X"+compteur+"!!!!!  "+prix+" cookies!!");
	}

	function boost(){
		score++;
		aff.innerHTML = score;
	}

	function inter(){

	 	if(score >= achat){
	 	setInterval("boost()",2000);
	 	score= score-achat;
	 	achat=achat*2;
	 	console.log(achat);
	 	auto++;
	 	}else{
			alert("Pas assez de cookie ! ")
	 	}
	 	ramp.value=("Rampage "+auto+"cookies/sec "+achat+" cookies!!");
	}





