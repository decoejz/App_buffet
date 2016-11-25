document.addEventListener("DOMContentLoaded", function() {
	var dados = function dados_adicionar() {
			var conversao = localStorage.getItem("Infos")
			var infos = JSON.parse(conversao);

			var nome_tarefa = document.getElementById("nome");

		    var descricao_tarefa = document.getElementById("desc");

		    var data_tarefa = document.getElementById("data");
		
		    infos[nome_tarefa]=[descricao_tarefa,data_tarefa];
		    var conversao = JSON.stringify(infos);
			localStorage.setItem("Infos", conversao);

			window.history.back();
		}


	var voltar_tela = function voltar() {
			window.history.back();
		}

	var salvando = document.querySelector(".salvando");
	var cancelando = document.querySelector(".cancelando");

	salvando.addEventListener("click", dados);

	cancelando.addEventListener("click", voltar_tela);

})