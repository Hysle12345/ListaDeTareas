
var tarea = [];
recuperarTarea();



	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");






	// Funciones
	let agregarTarea = function () {
    let tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"), //La variable nuevaTarea está almacenando el elemento li
        enlace = document.createElement("a") //La variable enlace está almacenando el elemento a
    tareas.push(tarea);
    displaytarea();
    console.log(tarea);

		//	tarea.push(tarea);
			


		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		


		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";



		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};






	let comprobarInput = function () {
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea"); // Comprobación de eliminar el error de agregar una tarea válida


    var eliminarTarea = function(){
    	this.parentNode.removeChild(this);
    };

};

 	
function recuperarTarea() {
    let localStorageTarea = window.localStorage.getItem('tarea');

    if (localStorageTarea !== null) {
        localStorageTarea = JSON.parse(localStorageTarea);
        tarea = localStorageTarea;
        displaytarea(tarea);

    }
}




function saveInLocalStorage() {

    window.localStorage.setItem('tareas', JSON.stringify(tarea));



}


//-----------------------------------------------------------------------------//

function displaytarea() {

    const contenedortarea = document.querySelector('.lista');
    contenedortarea.innerHTML = '<ul>';

    tarea.forEach(task => {
        contenedortarea.innerHTML = contenedortarea.innerHTML + '<li>' + task + '</li>';
    });

    contenedortarea.innerHTML = contenedortarea.innerHTML + '</ul>';

    saveInLocalStorage()

}

//-----------------------------------------------------------------------------//













	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	}
	
