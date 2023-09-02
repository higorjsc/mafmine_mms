window.addEventListener("message", function (event) {
    if (event.data === "CallLanguage") {
        Language() // Chame a função do módulo do iframe
    }
})

function Language() {

    let idioma_janela = parent.document.getElementById("titulo-pagina").innerText
    idioma_janela = idioma_janela.includes("SELEÇÃO") ? "pt" : "en"
    const imagem = document.getElementById("img-ahp-escala")
    imagem.src = "Imagens/ahp_" + idioma_janela + ".png"

    const idiomas = {
        "pt": {
            help_button: "HELP",
            h1_section_1: "ANALYTIC HIERARCHY PROCESS",
            h2_slider: "COMPARAÇÃO DE PARES",
            span_geo_ob: "GEOMETRIA vs MINÉRIO",
            span_geo_hw: "GEOMETRIA vs HANGING WALL",
            span_geo_fw: "GEOMETRIA vs FOOTWALL",
            span_ob_hw: "MINÉRIO vs HANGING WALL",
            span_ob_fw: "MINÉRIO vs FOOTWALL",
            span_hw_fw: "HANGING WALL vs FOOTWALL",
            titulo_pesos: "PESOS",
            lambda: "Coeficiente <strong>&lambda;</strong>:",
            ci: "Índice de consistencia",
            ri: "Índice de aleatoriedade:",
            cr: "Razão de consistencia:",
            botao_input: "ADICIONAR<br/>VALOR",
        },
        "en": {
            help_button: "HELP",
            h1_section_1: "ANALYTIC HIERARCHY PROCESS",
            h2_slider: "PAIR-WISE COMPARISION",
            span_geo_ob: "GEOMETRY vs OREBODY",
            span_geo_hw: "GEOMETRY vs HANGING WALL",
            span_geo_fw: "GEOMETRY vs FOOTWALL",
            span_ob_hw: "OREBODY vs HANGING WALL",
            span_ob_fw: "OREBODY vs FOOTWALL",
            span_hw_fw: "HANGING WALL vs FOOTWALL",
            titulo_pesos: "WEIGHT",
            lambda: "Coefficient <strong>&lambda;</strong>:",
            ci: "Consistence Index:",
            ri: "Random Index: ",
            cr: "Consistence Ratio:",
            botao_input: "ADD<br/>VALUE",
        }
    }

    idioma_selecionado = idiomas[idioma_janela]
    let Escrever = (id, texto, op) => {
        const elemento = document.getElementById(id)
        if (op === undefined) {
            elemento.innerHTML = idioma_selecionado[texto]
        } else {
            elemento.options[op].text = idioma_selecionado[texto]
        }
    }

    Escrever("help-button", "help_button")
    Escrever("h1-section-1", "h1_section_1")
    Escrever("h2-slider", "h2_slider")
    Escrever("span-geo-ob", "span_geo_ob")
    Escrever("span-geo-hw", "span_geo_hw")
    Escrever("span-geo-fw", "span_geo_fw")
    Escrever("span-ob-hw", "span_ob_hw")
    Escrever("span-ob-fw", "span_ob_fw")
    Escrever("span-hw-fw", "span_hw_fw")
    Escrever("titulo-pesos", "titulo_pesos")
    Escrever("lambda", "lambda")
    Escrever("ci", "ci")
    Escrever("ri", "ri")
    Escrever("cr", "cr")
    Escrever("botao-input", "botao_input")


}