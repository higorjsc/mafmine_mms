window.addEventListener("message", function (event) {
    if (event.data === "CallLanguage") {
        Language() // Chame a função do módulo do iframe
    }
})

function Language() {
    let idioma_janela = parent.document.getElementById("titulo-pagina").innerText
    idioma_janela = idioma_janela.includes("SELEÇÃO") ? "pt" : "en"
    const idiomas = {
        "pt": {
            condicoes_gerais: "Condições Gerais",
            span_parametro_1: "Resistência da rocha intacta:",
            select_strenght_1: "Point Load",
            span_espacamento: "Espaçamento das descontinuidades:",
            condicionamento_descontinuidades: "Condicionamento das Descontinuidades",
            span_comprimento: "Persistencia/Continuidade:",
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
            agua_subterranea: "Água Subterrânea",
            select_gw_0: "Condições gerais",
            select_gw_1: "Fluxo por 10m comp. túnel",
            select_gw_2: "Joint Water/Sigma1",
            general_0: "Seco",
            general_1: "Úmido",
            general_2: "Molhado",
            general_3: "Gotejando",
            general_4: "Vertendo",
            strike_dip: "Orientação do Strike e Dip das Descontinuidades",
            span_strike: "Orientação do Strike",
            select_strike_0: "Perpend. no sentido do dip",
            select_strike_1: "Perpend. contrário ao dip",
            select_strike_2: "Paralelo. ao eixo do túnel",
            select_strike_3: "Qualquer strike ou vários",
            span_dip: "Angulo de mergulho",
            resultados: "Resultados:",
            botao_input: "ADICIONAR VALOR"
        },
        "en": {
            condicoes_gerais: "General Conditions",
            span_parametro_1: "Strenght of intact rock material:",
            select_strenght_1: "Point Load",
            span_espacamento: "Spacing of discontinuities:",
            condicionamento_descontinuidades: "Conditioning of Discontinuities",
            span_comprimento: "Persistency/Continuity:",
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
            agua_subterranea: "Ground Water Conditions",
            select_gw_0: "General conditions",
            select_gw_1: "Inflow per 10m tunnel lenght",
            select_gw_2: "Joint Water/Sigma1",
            general_0: "Dry",
            general_1: "Damp",
            general_2: "Wet",
            general_3: "Dripping",
            general_4: "Flowing",
            strike_dip: "Dip and Strike Orientations of Discontinuities",
            span_strike: "Strike orientation",
            select_strike_0: "Perpendicular with dip",
            select_strike_1: "Perpendicular against dip",
            select_strike_2: "Paralel to tunnel axis",
            select_strike_3: "Irrespective of strike",
            span_dip: "Dip angle",
            resultados: "Results:",
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

    Escrever("condicoes-gerais", "condicoes_gerais")
    Escrever("span-parametro-1", "span_parametro_1")
    Escrever("select-strenght", "select_strenght_1", 1)
    Escrever("span-espacamento", "span_espacamento")
    Escrever("condicionamento-descontinuidades", "condicionamento_descontinuidades")
    Escrever("span-comprimento", "span_comprimento")
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
    Escrever("agua-subterranea", "agua_subterranea")
    Escrever("select-gw", "select_gw_0", 0)
    Escrever("select-gw", "select_gw_1", 1)
    Escrever("select-gw", "select_gw_2", 2)
    Escrever("general", "general_0", 0)
    Escrever("general", "general_1", 1)
    Escrever("general", "general_2", 2)
    Escrever("general", "general_3", 3)
    Escrever("general", "general_4", 4)
    Escrever("strike-dip", "strike_dip")
    Escrever("span-strike", "span_strike")
    Escrever("select-strike", "select_strike_0", 0)
    Escrever("select-strike", "select_strike_1", 1)
    Escrever("select-strike", "select_strike_2", 2)
    Escrever("select-strike", "select_strike_3", 3)
    Escrever("span-dip", "span_dip")
    Escrever("resultados", "resultados")
    Escrever("botao-input", "botao_input")
}