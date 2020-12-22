
//Identificando Elementos
const tareaInput = document.getElementById('tareaInput');
const btnAgregar = document.getElementById('btnAgregar');

var lista = document.getElementById('lista');

lista.setAttribute("href", "#");


//Creando arreglos
boxTareas = [];


//AGREGAR EVENTOS

btnAgregar.addEventListener('click', ()=> createTarea(tareaInput.value));

//CREAR FUNCIONES

function createTarea (tareaContent){
	boxTareas.push(tareaContent);
	console.log(boxTareas);

	tareaInput.value = "";

	displayTarea();
}



function displayTarea(){
	lista.innerHTML = "";
	boxTareas.forEach((tarea, id) =>{
		var tareaElemento = document.createElement('li');
		tareaElemento.setAttribute('onclick', `deleteTarea(${id})` );
		tareaElemento.innerHTML = tareaElemento.innerHTML + " " + tarea;
		lista.appendChild(tareaElemento);
	} );
	almacenarTareas();
}







function deleteTarea (id){
	boxTareas.splice(id,1);

	displayTarea();
}

//CREAR ITEM LS

function almacenarTareas () {
	window.localStorage.setItem('ListaDeTareas', JSON.stringify(boxTareas));
}

//OBTENER ITEMS DEL LOCALSTORAGE

getTareas();

function getTareas (){

	let storedTareas = window.localStorage.getItem('ListaDeTareas');

	console.log();


	if (storedTareas !== null ) {
		storedTareas = JSON.parse(storedTareas);
		boxTareas = storedTareas;
		displayTarea();
	}
}





















