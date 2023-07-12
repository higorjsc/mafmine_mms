function Exibir_Tabela(value) {
    const id = "tabela-" + value
    const tables = document.querySelectorAll("table")
    tables.forEach(element => {
        element.style.display = "none"
    })
    document.getElementById(id).style.display = "block"

}

function Retornar_valor(value) {

    //Obtém ob, hw, ou fw através da url. url[2] = ob, hw ou fw
    let url = (window.location.href).split("?")
    let id = {
        "ob": "ucs-ob",
        "hw": "ucs-hw",
        "fw": "ucs-fw",
    }

    // OBTÉM O INPUT DA JANELA PRINCIPAL
    let input_densidade = parent.document.getElementById(id[url[1]])

    if (value != "?") {
        input_densidade.value = value
        let evento_1 = new Event("blur")
        input_densidade.dispatchEvent(evento_1)
        let evento_2 = new Event("input")
        input_densidade.dispatchEvent(evento_2)

        // FECHA O POP-UP
        const botao_fechar = parent.document.getElementById("fechar-pop-up")
        // Cria um evento "click"
        let Click = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
        })
        // Dispara o "click" no elemento
        botao_fechar.dispatchEvent(Click)
    }
}

function Eventos() {
    const selects = document.querySelectorAll("select")
    selects.forEach(element => {
        element.onchange = () => Exibir_Tabela(element.value)
    })

    const valores = document.querySelectorAll(".td-valor")
    valores.forEach(element => {
        element.onclick = () => Retornar_valor(element.innerText)
    })

}