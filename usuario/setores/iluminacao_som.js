document.addEventListener("DOMContentLoaded", function() {
	var filhos = document.getElementById("lista_de_tarefas").hasChildNodes();
	if (filhos == true){
		document.getElementById('lista_de_tarefas').innerHTML = '';

		//console.log(document.referrer);
		var conversao = localStorage.getItem("Infos_iluminacao_som");
		var infos = JSON.parse(conversao);
		
		for (var i in infos) {				
			var ul = document.getElementById("lista_de_tarefas");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(i));
			ul.appendChild(li);
		}
	}
	else{
		var conversao = localStorage.getItem("Infos_iluminacao_som");
		var infos = JSON.parse(conversao);
		
		for (var i in infos) {				
			var ul = document.getElementById("lista_de_tarefas");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(i));
			ul.appendChild(li);
		}
	}
	
})