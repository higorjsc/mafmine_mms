//Oculta um dos <selector>'s de strenght com base no input
function Display_strenght() {
    const strenght = document.getElementById("select-strenght")
    const point_load = document.getElementById("poin-load")
    const ucs = document.getElementById("ucs")

    if (strenght.value == "point_load") {
        point_load.style.display = "block"
        ucs.style.display = "none"
    } else {
        point_load.style.display = "none"
        ucs.style.display = "block"
    }
}
//Oculta dois dos <selector>'s de grownd water com base no input
function Display_grownd_water() {
    const gw = document.getElementById("select-gw").value
    const inflow = document.getElementById("inflow")
    const ratio = document.getElementById("ratio")
    const general = document.getElementById("general")

    if (gw == "inflow") {
        inflow.style.display = "block"
        ratio.style.display = "none"
        general.style.display = "none"
    } else if (gw == "ratio") {
        inflow.style.display = "none"
        ratio.style.display = "block"
        general.style.display = "none"
    } else if (gw == "general") {
        inflow.style.display = "none"
        ratio.style.display = "none"
        general.style.display = "block"
    }
}
//Oculta um dos <selector>'s de dip com base no input do strike
function Display_dip() {
    const strike = document.getElementById("select-strike").value
    const dip_1 = document.getElementById("dip-1")
    const dip_2 = document.getElementById("dip-2")
    if (strike != "irrelevante") {
        dip_1.style.display = "block"
        dip_2.style.display = "none"
    } else {
        dip_1.style.display = "none"
        dip_2.style.display = "block"
    }
}
//Obtém o parâmetro incluso na URL para informar o idioma e objetivo do cálculo ao pop up
function Inserir_titulo() {
    let url = window.location.href

    if (url.includes("calculadora-rmr-ob")) {
        url = url.includes("pt") ? "Calculo RMR: Corpo de Minério" : "RMR calculation: Orebody"
    } else if (url.includes("calculadora-rmr-hw")) {
        url = url.includes("pt") ? "Calculo RMR: Hanging Wall" : "RMR calculation: Hanging Wall"
    } else if (url.includes("calculadora-rmr-fw")) {
        url = url.includes("pt") ? "Calculo RMR: Footwall" : "RMR calculation: Footwall"
    }

    let titulo = document.getElementById("titulo")
    titulo.innerText += url
}

