document.addEventListener("DOMContentLoaded", function() {
	var filhos = document.getElementById("lista_de_tarefas").hasChildNodes();
	if (filhos == true){
		document.getElementById('lista_de_tarefas').innerHTML = '';

		var conversao = localStorage.getItem("Infos_comercial");
		var infos = JSON.parse(conversao);
		
		for (var i in infos) {				
			var a = document.createElement("a");
			var ulist = document.getElementById("lista_de_tarefas");
			var newItem = document.createElement("li");
			newItem.className = "list-group-item lista";
			
			a.textContent = i;
			a.setAttribute('href', "../../cadastro/pag_indisponivel.html");
			newItem.appendChild(a);
			ulist.appendChild(newItem);
		}
	}
	else{
		var conversao = localStorage.getItem("Infos_comercial");
		var infos = JSON.parse(conversao);
		
		for (var i in infos) {				
			var ul = document.getElementById("lista_de_tarefas");
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(i));
			ul.appendChild(li);
		}
	}
	
})