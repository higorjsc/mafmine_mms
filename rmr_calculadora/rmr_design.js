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


function Positions(entry, messages, positions) {

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerText = messages[entry]
        balao.style.display = "block"
    }

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(-100px,-75px)"
    }

}


function Balao_entra(entry, idioma) {

    let messages 
    if (idioma == "en") {
        messages = {
            "matriz": "Pair-wise comparision matrix",
            "pesos": "AHP calculated weights",
            "cons": "Consistence vector",
            "lambda": "Arithmetic mean of the consistent vector and maximum eigenvalue of the matrix",
            "ci": "Consistence index of pair-wise comparision matrix",
            "ri": "Consistency index of a randomly generated reciprocal matrix. (Saaty, 1991)",
            "cr": "CR < 0.1 → Consistent matrix\nCR > 0.1 → Inconsistent matrix",
            "botao-help": "Check method",
            "slider-geo-ob": "Importance of geometry\nrelative to ore body",
            "slider-geo-hw": "Importance of geometry\nrelative to hanging wall",
            "slider-geo-fw": "Importance of geometry\nrelative to footwall",
            "slider-ob-hw": "Importance of ore body\nrelative to hanging wall",
            "slider-ob-fw": "Importance of ore body\nrelative to footwall",
            "slider-hw-fw": "Importance of hanging wall\nrelative to footwall"
        }
    } else {
        messages = {
            "matriz": "Matriz de julgamento",
            "pesos": "Pesos calculados pelo método",
            "cons": "Vetor Consistencia",
            "lambda": "Média aritimética do vetor consistencia e\nmaior autor valor da matriz de julgamento",
            "ci": "Indice de consistencia da matriz de julgamento ",
            "ri": "índice de consistência de uma matriz recíproca\ngerada randomicamente. (Saaty, 1991)",
            "cr": "CR < 0.1 → Matriz de julgamento consistente\nCR > 0.1 → Matriz de julgamento inconsistente",
            "botao-help": "Verificar Método",
            "slider-geo-ob": "Importancia da geometria em\nrelação ao corpo de minério",
            "slider-geo-hw": "Importancia da geometria em\nrelação ao hanging wall",
            "slider-geo-fw": "Importancia da geometria em\nrelação ao footwall",
            "slider-ob-hw": "Importancia do corpo de minerio\nem relação ao hanging wall",
            "slider-ob-fw": "Importancia do corpo de minerio\nem relação ao footwall",
            "slider-hw-fw": "Importancia do hanging wall\nem relação ao footwall",
        }
    }

    const positions = {
        "matriz": { x: -100, y: -50 },
        "pesos": { x: -100, y: -50 },
        "cons": { x: -100, y: -50 },
    }
    //Mostra e posiciona o balão conforme o dicionário de posições
    Positions(entry, messages, positions)
}

function Balao_sai() {
    const balao = document.getElementById("balao")
    balao.style.display = "none"
}