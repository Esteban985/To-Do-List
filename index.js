const data = [
    { id: 1, texto: "Ganar en Among us", estaCompletado: true },
    { id: 2, texto: "Destruir", estaCompletado: false }
]

let input = document.querySelector('#inputTarea')
let btn = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')

if (data.length > 0) {

    for (let i = 0; i <= data.length - 1; i++) {
        //Dibujando Div de Tarea
        let div = document.createElement('div')
        div.className = 'd-flex w-50 justify-content-between align-items-baseline'

        //dibujando checkbox
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('id', data[i].id)

        checkbox.className = 'me-2'


        //dibujando leabel
        let label = document.createElement('label')

        if (data[i].estaCompletado) {
            checkbox.checked = true
            label.classList.add('text-decoration-line-through')
        } else {
            checkbox.checked = false
            label.classList.remove('text-decoration-line-through')
        }

        checkbox.addEventListener('click', (event) => {
            let tareaABuscar = data.find(item => item.id == event.target.id)
            tareaABuscar.estaCompletado = !tareaABuscar.estaCompletado
            
            if (tareaABuscar.estaCompletado) {
                label.classList.add('text-decoration-line-through')
            } else {
                label.classList.remove('text-decoration-line-through')
            }
        })

        //Pendiendte algo.. (insetrar texto en el label)

        //dibujar el sup
        let sup = document.createElement('sup')
        sup.textContent = 'X'

        label.textContent = data[i].texto

        div.append(checkbox)
        div.append(label)
        div.append(sup)

        tareas.append(div)

        sup.addEventListener('click', (event) => {
            div.remove()
        })
    }
}

//Agregar elementos al Div
btn.addEventListener('click', (event) => {
    //Dibujando Div de Tarea
    let div = document.createElement('div')
    div.className = 'd-flex w-50 justify-content-between align-items-baseline'

    //dibujando checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.className = 'me-2'


    //dibujando leabel
    let label = document.createElement('label')

    checkbox.addEventListener('click', (event) => {
        console.log(event.target)
        label.classList.toggle('text-decoration-line-through')
    })


    //Pendiendte algo.. (insetrar texto en el label)


    //dibujar el sup
    let sup = document.createElement('sup')
    sup.textContent = 'X'

    label.textContent = input.value.trim()

    if (label.textContent == "") {
        alert("Por favor escribe una tarea")
    } else {
        div.append(checkbox)
        div.append(label)
        div.append(sup)
        tareas.append(div)

        data.push({ id: data.length + 1, texto: input.value, estaCompletado: false })

        input.value = ""
        sup.addEventListener('click', (event) => {
            div.remove()
        })
    }

})

