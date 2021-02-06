//Funcion crear nodos texto
function createNode(type, child) {
    var node = document.createElement(type);
    var text = document.createTextNode(child);
    node.appendChild(text);
    return node;
}

// Crea un nodo para la tarea
function createTask(task){
    var item = document.createElement('li');
    var wrapper = document.createElement('div');
    var checkBox = document.createElement('input');
    var label = createNode('label', task);
    var deleteButton = createNode('button', 'Delete');
    //
    checkBox.setAttribute('type','checkbox');
    //
    wrapper.appendChild(checkBox);
    wrapper.appendChild(label);
    wrapper.appendChild(deleteButton);
    item.appendChild(wrapper);
    //
    return item;
}

// Añade una tarea
function addTask(text){
    var listItem = createTask(text);
    bindEvents(listItem);
    var taskList = document.getElementsByTagName('ul')[0];
    taskList.insertBefore(listItem, taskList.childNodes[0]);
    inputField.value = '';
}

// Elimina una tarea
function deleteTask(){
    var item = this.parentNode;
    var taskList = item.parentNode;
    taskList.removeChild(item);
}

// Asigna los eventos a los elementos
function bindEvents(listItem){
    var checkBox = listItem.querySelector("input[type='checkbox']");
    var deleteButton = listItem.querySelector('button');
    deleteButton.addEventListener('click', deleteTask);
}

//Crear Titulo
document.body.appendChild(createNode('h1', 'TO DO APP'));
//Crear Formulario
document.body.appendChild(document.createElement('form'));
//Crear Elemento input con atributo type = text y Placeholder = New Task
var fieldBox = document.createElement('INPUT');
fieldBox.setAttribute('type', 'text');
fieldBox.setAttribute('placeholder', 'New Task...');
//Agregar el input, crear un boton y agregarlo al formulario
var bodyForm = document.getElementsByTagName('form')[0];
bodyForm.appendChild(fieldBox);
var button = createNode('BUTTON', 'Add →');
button.setAttribute('type', 'button');
bodyForm.appendChild(button);
//Crear el nodo li, crear el nodo ul y agregar el nodo li (De prueba)
//document.body.appendChild(document.createElement('ul')).appendChild(createNode('li', '-Borrar Solo Prueba-'));
document.body.appendChild(document.createElement('ul'));
//Seleccionar el boton para asignarle evento
var actButton = document.getElementsByTagName('button')[0];
//funcion para ejecutar cuando se active evento click
function cmpButton(event) {
    //Si existe ya un elemento h2 de error, lo elimina para no visualizar dos errores en caso de que el error se repita
    alertMessage = document.getElementsByTagName('h2')[0];
    if (alertMessage != undefined) {
        document.body.removeChild(alertMessage);
    }
    //Si el elemento Input esta vacio, cambia su color a rojo, y crea un nodo h2 que contiene un mensaje de alerta
    inputField = document.getElementsByTagName('input')[0];
    if (inputField.value == '') {
        inputField.setAttribute('style', 'border-bottom: 2px solid red;');
        event.preventDefault();
        var h2 = document.body.appendChild(createNode('h2', '↓ Error: Campo Vacio ↓'));
        tableList = document.getElementsByTagName('form')[0];
        document.body.insertBefore(h2, tableList);
    }else{
        addTask(inputField.value);
    }
}
//Declaracion de Evento 
actButton.addEventListener("click", cmpButton);