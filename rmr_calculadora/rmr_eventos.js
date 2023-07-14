
//Obtém o idioma da janela principal 
function Obter_idioma() {
    let idioma_janela = parent.document.getElementById("titulo-pagina").innerText
    idioma_janela = idioma_janela.includes("SELEÇÃO") ? "pt" : "en"
    return idioma_janela
}

//Obtém o parâmetro incluso na URL para saber se o calculo é para OB, HW ou FW
function Onde_retornar() {
    let url = (window.location.href)
    url = url.split("?")
    return url[1]
}

//Adiciona eventos ao selementos do Pop Up
function Eventos_pop_rmr() {
    Language()
    Mudar_imagem()
    const balao = document.getElementById("balao")
    document.addEventListener("mousemove", function (event) {
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    document.addEventListener("DOMContentLoaded", function () {
        let select = document.querySelectorAll("select")
        select.forEach(elemento => {
            elemento.addEventListener("change", Calculo_pop_up)
            elemento.onchange = () => Calculo_pop_up()
            elemento.addEventListener("mouseover", () => Balao_entra(elemento.id))
            elemento.addEventListener("mouseout", () => Balao_sai())
        })
    })

    const select_strike = document.getElementById("select-strike")
    select_strike.addEventListener("change", () => Mudar_imagem())

    const select_strenght = document.getElementById("select-strenght")
    select_strenght.addEventListener("change", Display_strenght)

    const select_gw = document.getElementById("select-gw")
    select_gw.addEventListener("change", Display_grownd_water)

    const select_dip = document.getElementById("select-strike")
    select_dip.addEventListener("change", Display_dip)

    const botao = document.getElementById("botao-input")
    botao.onclick = () => Retornar_valor()
}