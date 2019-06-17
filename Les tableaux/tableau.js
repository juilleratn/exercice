




	var tab =[" Bob " , " Julien ", " Roger "];
	var i ;
	var liste = document.getElementById("liste");
		/*for (var i = 0; i < tab.length; i++) {
			console.log(tab[i]);
		}
		console.log(tab.pop());
		tab.push("Toto")
		console.log(tab);*/


/*
	$liste = document.getElementById(liste); 
 	$li = document.createElement("li"); 
	$liste.appendChild($li); 
	$text = document.create.TextNode(li);  */
	//tab.push("Toto");   intituler
	

/*for (var i = 0; i < tab.length; i++) {
	$li = document.createElement("li");
	$li.innerHTML= tab[i];
	console.log($li);
	document.getElementById("liste").appendChild($li);
}
		a garder*/
	/*function ajouter(){
	$li=document.getElementById("prenom");
	for (var i = 0; i < tab.length; i++) {
		$li = document.createElement("li");
		$li.innerHTML= tab[i];
		console.log($li);
		document.getElementById("liste").appendChild($li);
	}
	}  */
 

 function ajouter(){                                                 
    for(var i=0; i<tab.length;i++)                                        
        {     
            var li = document.createElement("li"); 
            var prenom = document.createTextNode(tab[i]); 
            liste.appendChild(li);   
            li.appendChild(prenom);
            console.log("hi");                                                     
        }                                                                   
}  
function btnajouter(){
    var prenomvalue = document.getElementById("Pn").value;
    tab.push(prenomvalue);
    ajouter();
    console.log("ici"); 
    return false;
} function btnefface(){
	tab.pop();
	ajouter();
	console.log("là");
}


	
	