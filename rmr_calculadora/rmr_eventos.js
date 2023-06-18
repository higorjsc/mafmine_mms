function Obter_idioma() {
    let url = window.location.href
    if (url.includes("pt")) {
        return "pt"
    } else {
        return "en"
    }
}

function Eventos_pop_rmr() {

    let select = document.querySelectorAll("select")
    select.forEach(elemento => {
        elemento.addEventListener("change", Calculo_pop_up)
    })

    const select_strenght = document.getElementById("select-strenght")
    select_strenght.addEventListener("change", Display_strenght)

    const select_gw = document.getElementById("select-gw")
    select_gw.addEventListener("change", Display_grownd_water)

    const select_dip = document.getElementById("select-strike")
    select_dip.addEventListener("change", Display_dip)

    const botao = document.getElementById("botao-input")
    botao.addEventListener("click", Retornar_valor)

}
