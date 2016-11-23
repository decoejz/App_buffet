document.addEventListener("DOMContentLoaded", function() {
	var dados = function dados_adicionar() {
		    var x = document.getElementById("desc");
		    var text = "";
		    var i;
		    for (i = 0; i < x.length ;i++) {
		        text += x.elements[i].value + "<br>";
		    }
		    document.getElementById("demo").innerHTML = text;
			window.history.back();
		}


	var voltar_tela = function voltar() {
			window.history.back();
		}

	var salvando = document.querySelector(".salvando");
	var cancelando = document.querySelector(".cancelando");

	salvando.addEventListener("click", dados);

	cancelando.addEventListener("click", voltar_tela);
}