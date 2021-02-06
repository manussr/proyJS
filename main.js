function createNode(type, child) {
    var node = document.createElement(type);

    if (typeof child === "string") {
        var text = document.createTextNode(child);
        node.appendChild(text);
    } else {
        node.appendChild(child);
    }

    return node;
}


document.body.appendChild(createNode('h1', 'To Do App'));
document.body.appendChild(document.createElement('form'));

var field = document.createElement('INPUT');
field.setAttribute('type', 'text');
field.setAttribute('placeholder', 'New Task...');


document.getElementsByTagName('form')[0].appendChild(field);
document.getElementsByTagName('form')[0].appendChild(createNode('BUTTON', 'Add'));


document.body.appendChild(document.createElement('ul')).appendChild(createNode('li', 'Introduzca texto'));