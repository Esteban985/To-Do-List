let data = []


//Revisa si en en almacenamiento local tiene algun elemento
if (JSON.parse((localStorage.getItem('data')))) {
    //si si entonces lo guarda en el arreglo llamado data para que no se pierda la informacion a la hora de volvelr a cargar la pagina
    data = JSON.parse((localStorage.getItem('data')))
} else {
    //si no entonces sube en la clave data un arreglo vacio pero como solo recibe texto lo tenemos que convertir a texto con stringify
    localStorage.setItem('data', JSON.stringify([]))
}
//JSON: javaScript objet notation
//Me permite traer la informacion
// localStorage.getItem()
//Me permite ingresar la informacion
// localStorage.setItem()


let input = document.querySelector("#inputTarea")
let btn = document.querySelector("#btnTarea")
let tareas = document.querySelector("#tareas")

const getNextid = () => {
    //funcion creada para que al crear una nueva id no se repitan la que ya tiene con una condicion ternaria que dice si data que es el arreglo es mayor a 0 si si entonces busca data en la posicion data.lentg -1 en la propiedad de id si no devuelve 1
    return data.length > 0 ? data[data.length - 1].id + 1 : 1
}

const dibujarElementos = (info = null, i = null) => {
    //ponemos info = null por si al enviar los parametros no llega nada que sea null
    let div = document.createElement("div")
    div.className = "d-flex align-items-center justify-content-between w-50"

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.className = "checkbox me-2"

    let label = document.createElement("label")


    let sup = document.createElement("sup")
    sup.textContent = "x"
    sup.className = "eliminar fs-5 text-danger"

    if (info == null || i == null) {
        //preguntar porque puso el null
        checkbox.setAttribute("id", getNextid())
        label.textContent = input.value
        sup.setAttribute('id', getNextid())

    } else {
        checkbox.setAttribute("id", info[i].id)
        label.textContent = info[i].texto
        sup.setAttribute('id', info[i].id)
    }

    div.append(checkbox)
    div.append(label)
    div.append(sup)

    return { div, checkbox, label, sup }
}

const dibujarTodo = () => {

    if (data.length > 0) {
        for (let i = 0; i <= data.length - 1; i++) {
            //desestructuracion
            const { div, checkbox, label, sup } = dibujarElementos(data, i)

            if (data[i].estaCompletado) {
                checkbox.checked = true
                label.classList.add("text-decoration-line-through")

            } else {
                checkbox.checked = false
                label.classList.remove("text-decoration-line-through")
            }
            tareas.append(div)
        }
    }
}


btn.addEventListener("click", (event) => {

    if (input.value.trim() == "") {
        alert("¡Por favor, escribe una tarea!");
        return;
    }

    data.push({ id: getNextid(), texto: input.value, estaCompletado: false })
    localStorage.setItem('data', JSON.stringify(data))

    tareas.innerHTML = ""
    dibujarTodo()
    input.value = ""

})

tareas.addEventListener("click", (event) => {
    if (event.target.classList.contains("checkbox")) {

        let tareaBuscar = data.find(item => item.id == event.target.id)
        tareaBuscar.estaCompletado = !tareaBuscar.estaCompletado

        if (tareaBuscar.estaCompletado) {
            event.target.nextSibling.classList.add("text-decoration-line-through")

        } else {
            event.target.nextSibling.classList.remove("text-decoration-line-through")
        }
        localStorage.setItem('data', JSON.stringify(data))
    } else if (event.target.classList.contains('eliminar')) {
        event.target.parentElement.remove()
        data = data.filter(item => item.id != event.target.id)
        localStorage.setItem('data', JSON.stringify(data))

    }
})

dibujarTodo()