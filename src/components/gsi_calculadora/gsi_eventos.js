
function Eventos_pop_gsi() {
    Language()
    const balao = document.getElementById("balao")
    document.addEventListener("mousemove", function (event) {
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    // BALÃO SOBRE O PAD
    const pad = document.getElementById("pad")
    pad.onmousemove = function (event) {
        // Obter o retângulo delimitador da div "pad"
        let rect = pad.getBoundingClientRect()
        // Posição X do mouse em relação ao  "pad"
        let mouseX = event.clientX - rect.left
        // Posição Y invertida do mouse em relação ao pad
        let mouseY = event.clientY - rect.top + pad.scrollTop
        // Inverter a posição X
        mouseX = pad.clientWidth - mouseX
        // Inverter a posição Y
        mouseY = pad.clientHeight - mouseY
        Balao_gsi("pad", mouseX, mouseY)
    }

    pad.onmouseout = () => Balao_sai()
    pad.onclick = function (event) {
        let rect = pad.getBoundingClientRect()
        let X = event.clientX - rect.left
        let Y = event.clientY - rect.top - pad.scrollTop
        Calculo_gsi(X, Y)
    }

    // TODOS OS SELECTS
    const select = document.querySelectorAll("select")
    select.forEach(element => {
        element.onchange = () => blur()
        element.onchange = () => Calculo_gsi()
        element.onchange = () => Mostrar_inputs()
    })

    // TODOS OS INPUTS
    const inputs = document.querySelectorAll("input")
    inputs.forEach(element => {
        element.oninput = () => Calculo_gsi()
    })

    const select_calculo_jc = document.querySelectorAll(".select-calculo-jc")
    select_calculo_jc.forEach(element => {
        element.onchange = () => Calculo_gsi()
    })

    // BOTÃO ADICIONAR VALOR
    const botao = document.getElementById("botao-input")
    botao.onclick = () => Retornar_valor()
}