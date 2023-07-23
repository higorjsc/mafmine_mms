function Mudar_imagem() {
    let select_strike = document.getElementById("select-strike").value
    const imagem = document.getElementById("img-strike")
    imagem.src = `Imagens\\${select_strike}.png`
}

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
    let strenght = document.getElementById("select-strenght").value

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
    let strike = document.getElementById("select-strike").value
    Display_none("dip-1")
    Display_none("dip-2")

    let id_dip = (strike !== "irrelevante") ? "dip-1" : "dip-2"
    Display_block(id_dip)
}

function Balao_sai() {
    const balao = document.getElementById("balao")
    balao.style.display = "none"
}

function Positions(entry, messages, positions) {

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    balao.style.width = entry == "select-strike" ? "300px" : balao.style.width
    if (messages[entry]) {
        balao.innerText = messages[entry]
        balao.style.display = "block"
    }
    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(-200px,-50px)"
    }

}

function Balao_entra(entry) {
    const idioma = Obter_idioma()
    let messages
    if (idioma == "pt") {
        messages = {
            "select-strenght": "Calcular por UCS ou Carga Pontual?",
            "ucs": "Resistência a compressão uniaxial/simples.",
            "point-load": "Resistência a compressão por cargas concentradas.",
            "spacing": "Espaçamento entre as juntas/fraturas.",
            "comprimento": "Comprimento das descontinuidades.",
            "separacao": "Espessura da abertura (ranhura) da fratura.",
            "preenchimento": ""
                + "Duro: quartzo, piritas, rochas ígneas, etc.\n\n"
                + "Macio: argilas, siltes, materiais decompostos, etc.\n",
            "select-strike": ""
                + "- Perpendicular no sentido do dip: fraturas perpendiculares\nao eixo da galeria, que avança em sentido\ncontrário ao mergulho das descontinuidades.\n\n"
                + "- Perpendicular contra o dip: fraturas perpendiculares\nao eixo da galeria, que avança no sentido\ndo mergulho das descontinuidades.\n\n"
                + "- Paralela ao eixo: descontinuidades\nparalelas ao eixo da galeria.\n\n"
                + "- Qualquer strike ou vários: descontinuidades\ncom diversas orientações de strike.\n",
        }
    } else {
        messages = {
            "select-strenght": "Calcular por UCS ou Carga Pontual?",
            "ucs": "Uniaxial compressive strenght",
            "point-load": "Point load strenght",
            "spacing": "Distance between discontinuities",
            "comprimento": "Discontinuity lenght",
            "separacao": "Thickness of discontinuity",
            "preenchimento": "Hard: quartzo, piritas, igneous rocks...\n\nSoft: Clay, silt, decomposed materials...\n",
            "select-strike": ""
                + "- Perpendicular to the dip: fractures perpendicular to the tunnel axis, with galleries advancing in the opposite direction of the dip of discontinuities.\n\n"
                + "- Perpendicular to the dip: fractures perpendicular to the tunnel axis, with galleries advancing in the same direction as the dip of the discontinuities.\n\n"
                + "- Parallel to the tunnel axis: discontinuities parallel to the axis of the tunnel.\n\n"
                + "- Any strike or multiple strikes: discontinuities with various strike orientations.\n",
        }
    }
    const positions = {
        "select-strenght": { x: -200, y: -50 },
        "point-load": { x: -200, y: -50 },
        "preenchimento": { x: -250, y: -75 },
        "select-strike": { x: -320, y: -250 },
    }
    //Mostra e posiciona o balão conforme o dicionário de posições
    Positions(entry, messages, positions)
}
