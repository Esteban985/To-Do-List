let input = document.querySelector('#inputTarea')
let btn = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')

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
        input.value = ""
        div.append(checkbox)
        div.append(label)
        div.append(sup)

        tareas.append(div)

        sup.addEventListener('click', (event) => {
            div.remove()
        })
    }

})

