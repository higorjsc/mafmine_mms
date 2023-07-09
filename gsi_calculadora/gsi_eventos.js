
function Eventos_pop_gsi() {

    Inserir_idioma()
    const balao = document.getElementById("balao")
    //OBS: o off-set do balão é configurado na função Balao_entra() em design.js
    document.addEventListener("mousemove", function (event) {
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })


    const pad = document.getElementById("pad")
    pad.onmousemove = function (event) {
        let rect = pad.getBoundingClientRect() // Obter o retângulo delimitador da div "pad"
        let mouseX = event.clientX - rect.left // Posição X do mouse em relação à div "pad"
        let mouseY = event.clientY - rect.top + pad.scrollTop // Posição Y invertida do mouse em relação à div "pad" com consideração ao scroll vertical
        mouseX = pad.clientWidth - mouseX // Inverter a posição X
        mouseY = pad.clientHeight - mouseY // Inverter a posição Y
        Balao_gsi("pad", mouseX, mouseY)
    }

    pad.onmouseout = () => Balao_sai()
    pad.onclick = function (event) {
        let rect = pad.getBoundingClientRect() // Obter o retângulo delimitador da div "pad"
        let X = event.clientX - rect.left // Posição X do clique em relação à div "pad"
        let Y = event.clientY - rect.top - pad.scrollTop // Posição Y corrigida do clique em relação à div "pad" com consideração ao scroll vertical
        Calculo_gsi(X, Y)
    }



    const select = document.querySelectorAll("select")
    select.forEach(element => {
        element.onchange = () => blur()
        element.onchange = () => Calculo_gsi()
        element.onchange = () => Mostrar_inputs()

    })

    const inputs = document.querySelectorAll("input")
    inputs.forEach(element => {
        element.oninput = () => Calculo_gsi()
    })

    const select_calculo_jc = document.querySelectorAll(".select-calculo-jc")
    select_calculo_jc.forEach(element => {
        element.onchange = () => Calculo_gsi()
    })

    const botao = document.getElementById("botao-input")
    botao.onclick = () => Retornar_valor()
}