window.onload = function language() {
    let idioma = parent.document.getElementById("titulo-pagina").innerText
    idioma = idioma.includes("SELEÇÃO") ? "pt" : "en"

    const idiomas = {
        "pt": {
            span_metodo_calculo: "MÉTODO DE CÁLCULO:",
            select_metodo_calculo_0: "CLIQUE NA ÁREA VERMELHA",
            select_metodo_calculo_1: "INSERIR PARÂMETROS DE CÁLCULO",
            referencia_artigo: "Hoek, E., Carter, T. G., & Diederichs, M. S. (2013).Quantification of the geological strength index chart. In 47th US rock mechanics/geomechanics symposium. OnePetro.",
            inserir_jc: "Inserir RMR Joint Conditions:",
            calcular_jc: "Calcular RMR Joint Conditions:",
            span_persistencia: "Persistencia:",
            span_separacao: "Separação:",
            span_rugosidade: "Rugosidade:",
            select_rugosidade_0: "Muito rugosa",
            select_rugosidade_1: "Rugosa",
            select_rugosidade_2: "Levemente rugosa",
            select_rugosidade_3: "Lisa",
            select_rugosidade_4: "Escorregadia",
            span_preenchimento: "Preenchimento",
            select_preenchimento_0: "Nenhum",
            select_preenchimento_1: "Duro: <5 mm",
            select_preenchimento_2: "Duro: >5 mm",
            select_preenchimento_3: "Macio: <5 mm",
            select_preenchimento_4: "Macio: >5 mm",
            span_alteracao: "Preenchimento",
            select_alteraco_0: "Sem alteração",
            select_alteraco_1: "Baixo",
            select_alteraco_2: "Moderado",
            select_alteraco_3: "Alto",
            select_alteraco_4: "Muito alto",
            botao_input: "ADICIONAR VALOR"
        },
        "en": {
            span_metodo_calculo: "MÉTODO DE CÁLCULO:",
            select_metodo_calculo_0: "CLIQUE NA ÁREA VERMELHA",
            select_metodo_calculo_1: "INSERIR PARÂMETROS DE CÁLCULO",
            referencia_artigo: "Hoek, E., Carter, T. G., & Diederichs, M. S. (2013).Quantification of the geological strength index chart. In 47th US rock mechanics/geomechanics symposium. OnePetro.",
            inserir_jc: "Inserir RMR Joint Conditions:",
            calcular_jc: "Calcular RMR Joint Conditions:",
            span_persistencia: "Persistencia:",
            span_separacao: "Separação:",
            span_rugosidade: "Rugosidade:",
            select_rugosidade_0: "Muito rugosa",
            select_rugosidade_1: "Rugosa",
            select_rugosidade_2: "Levemente rugosa",
            select_rugosidade_3: "Lisa",
            select_rugosidade_4: "Escorregadia",
            span_preenchimento: "Preenchimento",
            select_preenchimento_0: "Nenhum",
            select_preenchimento_1: "Duro: <5 mm",
            select_preenchimento_2: "Duro: >5 mm",
            select_preenchimento_3: "Macio: <5 mm",
            select_preenchimento_4: "Macio: >5 mm",
            span_alteracao: "Preenchimento",
            select_alteraco_0: "Sem alteração",
            select_alteraco_1: "Baixo",
            select_alteraco_2: "Moderado",
            select_alteraco_3: "Alto",
            select_alteraco_4: "Muito alto",
            botao_input: "ADICIONAR VALOR"
        }
    }
    let Escrever = (id, texto, op) => {
        const elemento = document.getElementById(id)
        if (op === undefined) {
            elemento.innerHTML = texto
        } else {
            elemento.options[op].text = texto
        }
    }

    Escrever("span-metodo-calculo", span_metodo_calculo)

}