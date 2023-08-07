const div = document.getElementById('contenedor');

div.addEventListener('click', function(event) {
    if (event.target !== document.getElementById('contenedor')) {
        return
    } else {
        return alert('Hola! Soy el div')
    }
});