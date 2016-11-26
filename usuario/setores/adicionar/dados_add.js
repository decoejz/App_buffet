document.addEventListener("DOMContentLoaded", function() {
	var dados = function dados_adicionar() {
			var conversao = localStorage.getItem("Infos")
			var infos = JSON.parse(conversao);

			var nome_tarefa = document.getElementById("nome").value;
			console.log(nome_tarefa)

		    var descricao_tarefa = document.getElementById("desc").value;
		    console.log(descricao_tarefa)

		    var data_tarefa = document.getElementById("data").value;
			console.log(data_tarefa)

		    infos[nome_tarefa]=[descricao_tarefa,data_tarefa];
		    //var conversao = JSON.stringify(nome_tarefa);
		    //var conversao = JSON.stringify(descricao_tarefa);
		    //var conversao = JSON.stringify(data_tarefa);
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