document.addEventListener("DOMContentLoaded", function() {
	var dados = function dados_adicionar() {
		var conversao = localStorage.getItem("Pagina");
		var pag = JSON.parse(conversao);
		if (pag == 'Iluminacao_Som'){
			var conversao = localStorage.getItem("Infos_iluminacao_som")
			var infos = JSON.parse(conversao);

			var nome_tarefa = document.getElementById("nome").value;
			console.log(nome_tarefa)

		    var descricao_tarefa = document.getElementById("desc").value;
		    console.log(descricao_tarefa)

		    var data_tarefa = document.getElementById("data").value;
			console.log(data_tarefa)

		    infos[nome_tarefa]=[descricao_tarefa,data_tarefa];
		    var conversao = JSON.stringify(infos);
			localStorage.setItem("Infos_iluminacao_som", conversao);

			window.history.back();
		}

		else if (pag == 'Comercial'){
			var conversao = localStorage.getItem("Infos_comercial")
			var infos = JSON.parse(conversao);

			var nome_tarefa = document.getElementById("nome").value;
			console.log(nome_tarefa)

		    var descricao_tarefa = document.getElementById("desc").value;
		    console.log(descricao_tarefa)

		    var data_tarefa = document.getElementById("data").value;
			console.log(data_tarefa)

		    infos[nome_tarefa]=[descricao_tarefa,data_tarefa];
		    var conversao = JSON.stringify(infos);
			localStorage.setItem("Infos_comercial", conversao);

			window.history.back();
		}

		else if (pag == 'Cozinha'){
			var conversao = localStorage.getItem("Infos_cozinha")
			var infos = JSON.parse(conversao);

			var nome_tarefa = document.getElementById("nome").value;
			console.log(nome_tarefa)

		    var descricao_tarefa = document.getElementById("desc").value;
		    console.log(descricao_tarefa)

		    var data_tarefa = document.getElementById("data").value;
			console.log(data_tarefa)

		    infos[nome_tarefa]=[descricao_tarefa,data_tarefa];
		    var conversao = JSON.stringify(infos);
			localStorage.setItem("Infos_cozinha", conversao);

			window.history.back();
		}

		else if (pag == 'Decoracao'){
			var conversao = localStorage.getItem("Infos_decoracao")
			var infos = JSON.parse(conversao);

			var nome_tarefa = document.getElementById("nome").value;
			console.log(nome_tarefa)

		    var descricao_tarefa = document.getElementById("desc").value;
		    console.log(descricao_tarefa)

		    var data_tarefa = document.getElementById("data").value;
			console.log(data_tarefa)

		    infos[nome_tarefa]=[descricao_tarefa,data_tarefa];
		    var conversao = JSON.stringify(infos);
			localStorage.setItem("Infos_decoracao", conversao);

			window.history.back();
		}

		else if (pag == 'Manutencao'){
			var conversao = localStorage.getItem("Infos_manutencao")
			var infos = JSON.parse(conversao);

			var nome_tarefa = document.getElementById("nome").value;
			console.log(nome_tarefa)

		    var descricao_tarefa = document.getElementById("desc").value;
		    console.log(descricao_tarefa)

		    var data_tarefa = document.getElementById("data").value;
			console.log(data_tarefa)

		    infos[nome_tarefa]=[descricao_tarefa,data_tarefa];
		    var conversao = JSON.stringify(infos);
			localStorage.setItem("Infos_manutencao", conversao);

			window.history.back();
		}
	}


	var voltar_tela = function voltar() {
			window.history.back();
		}

	var salvando = document.querySelector(".salvando");
	var cancelando = document.querySelector(".cancelando");

	salvando.addEventListener("click", dados);

	cancelando.addEventListener("click", voltar_tela);

})