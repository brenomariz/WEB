window.onload = init;
var linhas ='';

function Exibe(a) {
  linhas = linhas.concat('\n' + a.value + '\n');
}

function init() {	
	var ex1 = document.getElementById('ex1');
	var ex2 = document.getElementById('ex2');
	var vrau = document.getElementsByName('op');
	var ex3 = document.getElementsByName('cb');
	var froz = document.getElementById('confirm');
	var ex7 = document.getElementById('sel');
	var ex8 = document.getElementById('cxtexto');
	var ex9 = document.getElementById('ex9');
    var data = document.getElementById('data1');
	var data1 = document.getElementById('data2');
	var ex11 = document.getElementById('cor');
	var ex12 = document.getElementById('ex12');
	var ex13 = document.getElementById('ex13');
	var ex14 = document.getElementById('ex14');
	var ex15 = document.getElementById('ex15');
	var ex16 = document.getElementById('ex16');



document.getElementById('gravar').addEventListener('click', function() {

	Exibe(ex1);
	Exibe(ex2);
	for (var i = 0; i < vrau.length; i++) {       
		if (vrau[i].checked===true) {
				Exibe(vrau[i]);
		}
	}
	for (var i=0; i < ex3.length; i++) {
		if (ex3[i].checked===true) {
			Exibe(ex3[i]);
		}
	}
	
	Exibe(froz);
	Exibe(ex7);
	Exibe(ex8);
	Exibe(ex9);
	Exibe(data);
	Exibe(data1);
	Exibe(ex11);
	Exibe(ex12);
	Exibe(ex13);
	Exibe(ex14);
	Exibe(ex15);
	Exibe(ex16);

	alert(linhas);
	});

}






	/*document.getElementById('bcaixa').addEventListener( 'click', function(){
		for (var i = 0; i < vrau.length; i++) {       
			if (vrau[i].checked===true) {
				if (var == v)
				alert("Op" + (i + 1));
			}
		}
	});


	document.getElementById('bcaixaex4').addEventListener('click', function(){
		for (var i=0; i < ex3.length; i++) {
			if (ex3[i].checked===true) {
				alert("chk" + (1+i) );
			}
		}
	});

	/*document.getElementById('confirm').addEventListener('click', function(){
		alert("Confirmado!");
	});

	document.getElementById('bcaixaex7').addEventListener( 'click', function(){
		alert(ex7.value);
	});

	document.getElementById('bcaixaex8').addEventListener( 'click', function(){
		alert(ex8.value);
	});		

	document.getElementById('bcaixaex9').addEventListener( 'click', function(){
		alert(ex9.value);
	});	

	document.getElementById('bcaixaex10').addEventListener('click', function(){
		for (var i=0; i < ex10.length; i++) {
			alert(ex10[i].value);
		}
	});	

	document.getElementById('bcaixaex11').addEventListener( 'click', function(){
		alert(ex11.value);
	});	

	document.getElementById('bcaixaex12').addEventListener( 'click', function(){
		alert(ex12.value);
	});	

	document.getElementById('bcaixaex13').addEventListener( 'click', function(){
		alert(ex13.value);
	});	

	document.getElementById('bcaixaex14').addEventListener( 'click', function(){
		alert(ex14.value);
	});	

	document.getElementById('bcaixaex15').addEventListener( 'click', function(){
		alert(ex15.value);
	});	*/
