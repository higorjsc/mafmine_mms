
//Obtém o idioma da janela principal através da URL
function Obter_idioma() {
    let url = window.location.href
    if (url.includes("pt")) {
        return "pt"
    } else {
        return "en"
    }
}

//Obtém o parâmetro incluso na URL para saber se o calculo é para OB, HW ou FW
function Onde_retornar() {
    let url = (window.location.href)
    url = url.split("?")
    return url[1]
}

//Adiciona eventos ao selementos do Pop Up
function Eventos_pop_rmr() {
    const balao = document.getElementById("balao")
    document.addEventListener("mousemove", function (event) {
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    let select = document.querySelectorAll("select")
    select.forEach(elemento => {
        elemento.onchange = () => Calculo_pop_up()
        elemento.onmouseover = () => Balao_entra(elemento.id)
        elemento.onmouseout = () => Balao_sai()
    })

    const select_strenght = document.getElementById("select-strenght")
    select_strenght.onchange = () => Display_strenght()

    const select_gw = document.getElementById("select-gw")
    select_gw.onchange = () => Display_grownd_water()

    const select_dip = document.getElementById("select-strike")
    select_dip.onchange = () => Display_dip()

    const botao = document.getElementById("botao-input")
    botao.onclick = () => Retornar_valor()
}