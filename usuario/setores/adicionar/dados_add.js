document.addEventListener("DOMContentLoaded", function() {
	var dados = function dados_adicionar() {
			var tarefa = document.getElementById("nome");
		    var text = "";
		    var i;
		    for (i = 0; i < tarefa.length ;i++) {
		        text += tarefa.elements[i].value + "<br>";
		    }
		    document.getElementById("nome_tarefa").innerHTML = text;
		    console.log(text)
		    localStorage.setItem("Tarefa", tarefa);

		    var descricao = document.getElementById("desc");
		    var text = "";
		    var i;
		    for (i = 0; i < descricao.length ;i++) {
		        text += descricao.elements[i].value + "<br>";
		    }
		    document.getElementById("descricao_tarefa").innerHTML = text;
		    console.log(text)
		    localStorage.setItem("Descricao", descricao);

		    var data = document.getElementById("data");
		    var text = "";
		    var i;
		    for (i = 0; i < data.length ;i++) {
		        text += data.elements[i].value + "<br>";
		    }
		    document.getElementById("data_tarefa").innerHTML = text;
		    console.log(text)
		    localStorage.setItem("Data", data);

			//window.history.back();
		}


	var voltar_tela = function voltar() {
			window.history.back();
		}

	var salvando = document.querySelector(".salvando");
	var cancelando = document.querySelector(".cancelando");

	salvando.addEventListener("click", dados);

	cancelando.addEventListener("click", voltar_tela);

})