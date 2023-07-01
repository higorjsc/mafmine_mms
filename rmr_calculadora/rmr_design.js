//MOSTRA elementos
function Display_block(id) {
    let elemento = document.getElementById(id)
    elemento.style.display = "block"
}
//OCULTA elementos
function Display_none(id) {
    let elemento = document.getElementById(id)
    elemento.style.display = "none"
}

//EVENTO de troca do select visível da rock strenght
function Display_strenght() {
    const strenght = document.getElementById("select-strenght").value
    Display_none("point-load")
    Display_none("ucs")
    Display_block(strenght)
}

//EVENTO de troca do select visível de grownd water conditions
function Display_grownd_water() {
    const gw = document.getElementById("select-gw").value
    Display_none("inflow")
    Display_none("ratio")
    Display_none("general")
    Display_block(gw)
}

//EVENTO de troca do select visível do dip e strike
function Display_dip() {
    const strike = document.getElementById("select-strike").value
    Display_none("dip-1")
    Display_none("dip-2")

    const id_dip = (strike !== "irrelevante") ? "dip-1" : "dip-2"
    Display_block(id_dip)
}

//Obtém o parâmetro incluso na URL para saber se o calculo é para OB, HW ou FW
function Inserir_titulo() {
    let url = (window.location.href).split("-")
    let idioma = "_" + Obter_idioma()
    let texto = {
        "ob_pt": "CÁLCULO RMR: Corpo de Minério",
        "ob_en": "RMR CALCULATION: Orebody",
        "hw_pt": "CÁLCULO RMR: Hanging Wall",
        "hw_en": "RMR CALCULATION: Hanging Wall",
        "fw_pt": "CÁLCULO RMR: Footwall",
        "fw_en": "RMR CALCULATION: Footwall",
    }
    let titulo = document.getElementById("titulo")
    titulo.innerText += texto[(url[2] + idioma)]
}
