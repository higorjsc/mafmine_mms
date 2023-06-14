function Balao_entra(entry) {

    let url = window.location.href

    let messages = {}
    if (url.includes("en")) { //Verifica se o titulo da seção 1 está em ingles
        messages = {
            "matriz": "Pair-wise comparision matrix",
            "pesos": "AHP calculated weights",
            "cons": "Consistence vector",
            "lambda": "Arithmetic mean of the consistent vector and maximum eigenvalue of the matrix",
            "ci": "Consistence index of pair-wise comparision matrix",
            "ri": "Consistency index of a randomly generated reciprocal matrix. (Saaty, 1991)",
            "cr": "CR < 0.1 → Consistent matrix\nCR > 0.1 → Inconsistent matrix",
            "botao_help": "Check method",
            "slider_geo_ob": "Importance of geometry\nrelative to ore body",
            "slider_geo_hw": "Importance of geometry\nrelative to hanging wall",
            "slider_geo_fw": "Importance of geometry\nrelative to footwall",
            "slider_ob_hw": "Importance of ore body\nrelative to hanging wall",
            "slider_ob_fw": "Importance of ore body\nrelative to footwall",
            "slider_hw_fw": "Importance of hanging wall\nrelative to footwall"
        }
    } else { //caso o titulo da seção 1 esteja em português
        messages = {
            "matriz": "Matriz de julgamento",
            "pesos": "Pesos calculados pelo método",
            "cons": "Vetor Consistencia",
            "lambda": "Média aritimética do vetor consistencia e\nmaior autor valor da matriz de julgamento",
            "ci": "Indice de consistencia da matriz de julgamento ",
            "ri": "índice de consistência de uma matriz recíproca\ngerada randomicamente. (Saaty, 1991)",
            "cr": "CR < 0.1 → Matriz de julgamento consistente\nCR > 0.1 → Matriz de julgamento inconsistente",
            "botao_help": "Verificar Método",
            "slider_geo_ob": "Importancia da geometria em\nrelação ao corpo de minério",
            "slider_geo_hw": "Importancia da geometria em\nrelação ao hanging wall",
            "slider_geo_fw": "Importancia da geometria em\nrelação ao footwall",
            "slider_ob_hw": "Importancia do corpo de minerio\nem relação ao hanging wall",
            "slider_ob_fw": "Importancia do corpo de minerio\nem relação ao footwall",
            "slider_hw_fw": "Importancia do hanging wall\nem relação ao footwall",
        }
    }

    const positions = {
        "matriz": { x: -100, y: -50 },
        "pesos": { x: -100, y: -50 },
        "cons": { x: -100, y: -50 },
    }

    const balao = document.getElementById("balao")
    balao.innerText = messages[entry]
    balao.style.display = "block"

    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(-100px,-75px)"
    }
}

function Balao_sai() {
    const balao = document.getElementById("balao")
    balao.style.display = "none"
}



