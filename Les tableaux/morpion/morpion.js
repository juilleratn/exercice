var pts ;
		var l1 = ['c1l1', 'c2l1', 'c3l1'];
		var l2 = ['c1l2', 'c2l2', 'c3l2'];
		var l3 = ['c1l3', 'c2l3', 'c3l3'];

		var c1 = ['c1l1', 'c1l2', 'c1l3'];
		var c2 = ['c2l1', 'c2l2', 'c2l3'];
		var c3 = ['c3l1', 'c3l2', 'c3l3'];

		var d1 = ['c1l1', 'c2l2', 'c3l3'];
		var d2 = ['c3l1', 'c2l2', 'c1l3'];
		
		c1l1 = document.getElementById('c1l1'); 
		c2l1 = document.getElementById('c2l1');
		c3l1 = document.getElementById('c3l1');
		c1l2 = document.getElementById('c1l2');
		c2l2 = document.getElementById('c2l2');
		c3l2 = document.getElementById('c3l2');
		c1l3 = document.getElementById('c1l3');
		c2l3 = document.getElementById('c2l3');
		c3l3 = document.getElementById('c3l3');
		//joueur 1 attribue une valeur 1 au clic
		//joueur 2 attribue une valeur -1 au clic

		function idClick(j1){
			event.target.classList.toggle("player1");
			pts=1;
			//console.log("case "+ event.target.id);
			return pts;
		}
		function dbclic(j2){
			event.target.classList.toggle("player2");
			pts=-1;
			//console.log("case "+ event.target.id);
			return pts;
		}