function Exibir_Tabela(value) {
    const id = "tabela-" + value
    const tables = document.querySelectorAll("table")
    tables.forEach(element => {
        element.style.display = "none"
    })
    document.getElementById(id).style.display = "block"

}

// function Obter_rocha(id) {
//     let rocha = (id.split("-").slice(2))
//     rocha = "tr-" + rocha[0]
//     return rocha
// }

// function Desborda_all() {
//     const valores = document.querySelectorAll(".td-valor")
//     valores.forEach(element => {
//         element.style.border = "none"
//     })
// }

// function Borda_selecionado(id) {
//     const rocha = Obter_rocha(id)
//     const valor = document.getElementById(id)

//     Desborda_all()
//     valor.style.border = "1pt solid blue"
//     const tr = document.getElementById(rocha)
//     tr.style.color = "red"
// }

function Retornar_valor(value) {

    //Obtém ob, hw, ou fw através da url. url[2] = ob, hw ou fw
    let url = (window.location.href).split("-")
    let id = {
        "ob": "ucs-ob",
        "hw": "ucs-hw",
        "fw": "ucs-fw",
    }

    const janela_principal = window.opener  // Acessa a janela principal através de window.opener

    let valor = janela_principal.document.getElementById(id[url[2]])

    if (value != "?") {
        valor.value = value
        let evento_1 = new Event("blur")
        valor.dispatchEvent(evento_1)
        let evento_2 = new Event("input")
        valor.dispatchEvent(evento_2)
        window.close()  // Fechar a janela popup
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