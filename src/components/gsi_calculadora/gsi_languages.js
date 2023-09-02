window.addEventListener("message", function (event) {
    if (event.data === "CallLanguage") {
        Language() // Chame a função do módulo do iframe
    }
})

function Language() {

    let idioma_janela = parent.document.getElementById("titulo-pagina").innerText
    idioma_janela = idioma_janela.includes("SELEÇÃO") ? "pt" : "en"
    const imagem = document.getElementById("img-gsi-picker")
    imagem.src = "Imagens/gsi_" + idioma_janela + ".png"
    imagem.style.display = "block"

    const idiomas = {
        "pt": {
            span_metodo_calculo: "MÉTODO DE CÁLCULO:",
            select_metodo_calculo_0: "CLIQUE NA ÁREA VERMELHA",
            select_metodo_calculo_1: "INSERIR PARÂMETROS DE CÁLCULO",
            referencia_artigo: "Hoek, E., Carter, T. G., & Diederichs, M. S. (2013).Quantification of the geological strength index chart. In 47th US rock mechanics/geomechanics symposium. OnePetro.",
            select_jc_0: "Inserir RMR Joint Conditions:",
            select_jc_1: "Calcular RMR Joint Conditions:",
            span_persistencia: "Persistencia:",
            span_separacao: "Separação:",
            span_rugosidade: "Rugosidade:",
            select_rugosidade_0: "Muito rugosa",
            select_rugosidade_1: "Rugosa",
            select_rugosidade_2: "Levemente rugosa",
            select_rugosidade_3: "Lisa",
            select_rugosidade_4: "Escorregadia",
            span_preenchimento: "Preenchimento:",
            select_preenchimento_0: "Nenhum",
            select_preenchimento_1: "Duro: <5 mm",
            select_preenchimento_2: "Duro: >5 mm",
            select_preenchimento_3: "Macio: <5 mm",
            select_preenchimento_4: "Macio: >5 mm",
            span_alteracao: "Grau de alteração:",
            select_alteraco_0: "Sem alteração",
            select_alteraco_1: "Baixo",
            select_alteraco_2: "Moderado",
            select_alteraco_3: "Alto",
            select_alteraco_4: "Muito alto",
            botao_input: "ADICIONAR VALOR"
        },
        "en": {
            span_metodo_calculo: "METODOLOGY OF CALCULATION:",
            select_metodo_calculo_0: "CLICK ON RED AREA",
            select_metodo_calculo_1: "CALCULATE FROM INPUTS",
            referencia_artigo: "Hoek, E., Carter, T. G., & Diederichs, M. S. (2013).Quantification of the geological strength index chart. In 47th US rock mechanics/geomechanics symposium. OnePetro.",
            select_jc_0: "Input RMR Joint Conditions:",
            select_jc_1: "Calculate RMR Joint Conditions:",
            span_persistencia: "Persistency:",
            span_separacao: "Separation:",
            span_rugosidade: "Roughness:",
            select_rugosidade_0: "Very rough",
            select_rugosidade_1: "Rough",
            select_rugosidade_2: "Slightly rough",
            select_rugosidade_3: "Smooth",
            select_rugosidade_4: "Slickensided",
            span_preenchimento: "Infilling:",
            select_preenchimento_0: "None",
            select_preenchimento_1: "Hard: <5 mm",
            select_preenchimento_2: "Hard: >5 mm",
            select_preenchimento_3: "Soft: <5 mm",
            select_preenchimento_4: "Soft: >5 mm",
            span_alteracao: "Alteration:",
            select_alteraco_0: "Unweathered",
            select_alteraco_1: "Slightly weathered",
            select_alteraco_2: "Moderatly weathered",
            select_alteraco_3: "Highly weathered",
            select_alteraco_4: "Decomposed",
            botao_input: "ADD VALUE"
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

    Escrever("span-metodo-calculo", "span_metodo_calculo")
    Escrever("select-metodo-calculo", "select_metodo_calculo_0", 0)
    Escrever("select-metodo-calculo", "select_metodo_calculo_1", 1)
    Escrever("referencia-artigo", "referencia_artigo")
    Escrever("select-jc", "select_jc_0", 0)
    Escrever("select-jc", "select_jc_1", 1)
    Escrever("span-persistencia", "span_persistencia")
    Escrever("span-separacao", "span_separacao")
    Escrever("span-rugosidade", "span_rugosidade")
    Escrever("rugosidade", "select_rugosidade_0", 0)
    Escrever("rugosidade", "select_rugosidade_1", 1)
    Escrever("rugosidade", "select_rugosidade_2", 2)
    Escrever("rugosidade", "select_rugosidade_3", 3)
    Escrever("rugosidade", "select_rugosidade_4", 4)
    Escrever("span-preenchimento", "span_preenchimento")
    Escrever("preenchimento", "select_preenchimento_0", 0)
    Escrever("preenchimento", "select_preenchimento_1", 1)
    Escrever("preenchimento", "select_preenchimento_2", 2)
    Escrever("preenchimento", "select_preenchimento_3", 3)
    Escrever("preenchimento", "select_preenchimento_4", 4)
    Escrever("span-alteracao", "span_alteracao")
    Escrever("alteracao", "select_alteraco_0", 0)
    Escrever("alteracao", "select_alteraco_1", 1)
    Escrever("alteracao", "select_alteraco_2", 2)
    Escrever("alteracao", "select_alteraco_3", 3)
    Escrever("alteracao", "select_alteraco_4", 4)
    Escrever("botao-input", "botao_input")
}