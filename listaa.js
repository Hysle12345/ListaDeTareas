var tareas = [];
recuperartarea();



// Variables

let lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");


//-----------------------------------------------------------------------------//



// Funciones


let agregarTarea = function () {
    let tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"), //La variable nuevaTarea está almacenando el elemento li
        enlace = document.createElement("a") //La variable enlace está almacenando el elemento a
    tareas.push(tarea);
    displaytarea();
    console.log(tareas);


    //-----------------------------------------------------------------------------//


    if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega una Tarea valida");
        tareaInput.className = "error";
        return false;
    }


    //-----------------------------------------------------------------------------//
    
    // Le establecemos un atributo href
    enlace.setAttribute("href", "#");
    //Agregamos el enlace a la nueva tarea (li)
    nuevaTarea.appendChild(enlace);
    //Agregamos la nueva tarea a la lista
    lista.appendChild(nuevaTarea);
    //Limpiar tarea del input
    tareaInput.value = "";

    for (let i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", function () {
            this.parentNode.removeChild(this);
        });
    }
};



function recuperartarea() {
    let localStorageTareas = window.localStorage.getItem('tareas');

    if (localStorageTareas !== null) {
        localStorageTareas = JSON.parse(localStorageTareas);
        tareas = localStorageTareas;
        displaytarea();

    }
}




function saveInLocalStorage() {

    window.localStorage.setItem('tareas', JSON.stringify(tareas));



}


//-----------------------------------------------------------------------------//

function displaytarea() {

    const contenedortareas = document.querySelector('.lista');
    contenedortareas.innerHTML = '<ul>';

    tareas.forEach(task => {
        contenedortareas.innerHTML = contenedortareas.innerHTML + '<li>' + task + '</li>';
    });

    contenedortareas.innerHTML = contenedortareas.innerHTML + '</ul>';

    saveInLocalStorage()

}

//-----------------------------------------------------------------------------//


let comprobarInput = function () {
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea"); // Comprobación de eliminar el error de agregar una tarea válida


};

var eliminarTarea = function(){
    this.parentNode.removeChild(this);
}


//-----------------------------------------------------------------------------//

//Eventos


//Agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);


//Comprobar Input
tareaInput.addEventListener("click", comprobarInput);

//Eliminar elementos de la lista


/**
 * Elimina una tarea por su ID
 * @param {Number} id 
 */
function deleteTask(id) {
  tareas.splice(id, 1);
  displaytarea();
}

/**
 * Crea un boton para eliminar tarea
 * @param {Number} id 
 */
function createDeleteButton(id) {
  return ` <button class="danger delete-button" onclick="deleteTask(${id})">X</button>`
}