
function Language(idioma_janela) {
    const idiomas = {
        pt: {
            titulo_pagina: "SELEÇÃO DE METODOS DE LAVRA: Nicholas (1992)",
            li_titulo: "SELECIONE O MÉTODO",
            paragrafo_explicacao: ""
                + "O Método de Nicholas de 1992 é uma versão modificada do método de Nicholas de 1981, publicada pelo mesmo autor."
                + "A nova versão tem o objetivo de corrigir o  &ldquo;problema&rdquo; clássico do procedimento orignal, onde todos os critérios de seleção possuem a mesma importância.<br><br>"
                + "<strong>As modificações incluem:<br></strong>"
                + "&ensp;&ensp;- O somatório das notas de cada critério de seleção é multiplicado por um  &ldquo;Fator de peso&rdquo;.<br>"
                + "&ensp;&ensp;-  &ldquo;Fatores de pesos&rdquo; são sugeridos pelo autor para a geometria do depósito, e características geotécnicas do corpo de minério, hanging wall e footwall.<br><br>"
                + "<strong>Observações:<br></strong>"
                + "&ensp;&ensp; - Nicholas afirma que os valores propostos para cada característica em seu método"
                + "&ldquo;pode ser&rdquo; alterado, conforme a  nossa expertise tecnica, equipamentos de mineração, e o processo de mineração em geral evoluem e melhoram.<br>",
            titulo_section_1: "CARACTERÍSTICAS GERAIS",
            titulo_section_2: "SIMULAÇÃO DO DEPÓSITO",
            titulo_section_3: "PREFERENCIAS",
            subtitulo_geometria: "Geometria do depósito",
            span_forma_geral: "Forma geral:",
            forma_geral_0: "Massiva",
            forma_geral_1: "Tabular",
            forma_geral_2: "Irregular",
            span_mergulho: "Mergulho:",
            mergulho_0: "Plano",
            mergulho_1: "Intermediário",
            mergulho_2: "Inclinado",
            span_espessura: "Espessura do minério:",
            espessura_0: "Estreito",
            espessura_1: "Intermediário",
            espessura_2: "Espesso",
            espessura_3: "Muito espesso",
            span_distribuicao: "Distribuição de teores:",
            distribuicao_0: "Uniforme",
            distribuicao_1: "Gradacional",
            distribuicao_2: "Errática",
            subtitulo_densidade: "Densidade",
            span_densidade_ob: "Corpo de minério:",
            subtitulo_profundidade: "Profundidade",
            span_profundidade_ob: "Corpo de minério:",
            span_ucs_ob: "Corpo de minério:",
            span_resultado_rss_ob: "Corpo de minério:",
            subtitulo_fracture_spacing: "Espaçamento das Fraturas",
            span_fracture_spacing_ob: "Corpo de minério:",
            menu_fracture_spacing_0: "Muito próximas",
            menu_fracture_spacing_1: "Próximas",
            menu_fracture_spacing_2: "Distantes",
            menu_fracture_spacing_3: "Muito distantes",
            subtitulo_fracture_strenght: "Espaçamento das Fraturas",
            span_fracture_strenght_ob: "Corpo de minério:",
            menu_fracture_strenght_0: "Fraca",
            menu_fracture_strenght_1: "Moderada",
            menu_fracture_strenght_2: "Forte",
            h2_fatores_peso: "Fatores de Peso",
            span_cm: "OB",
            calculadora_ahp_nicholas: "CALCULAR POR AHP",
        },
        en: {
            titulo_pagina: "MINING METHOD SELECTION: Shahriar and Bakhtavar (2007)",
            li_titulo: "SELECT METHOD",
            paragrafo_explicacao: ""
                + "The Nicholas selection procedure of 1992 is an modified version of the Nicholas approach from 1981, published by the same author."
                + "The 1992 edition aims to correct the classic issue in the original approach where all criteria were assigned equal importance.<br><br>"
                + "<strong>The modifications include:<br></strong>"
                + "&ensp;&ensp;- The sum of each value assigned to the selection criteria is multiplied by a  &ldquo;Weighting Factor&rdquo;.<br>"
                + "&ensp;&ensp;- Weighting Factors are suggested by the author for deposit geometry, and rock mechanics characteristics of the orebody, hanging wall and footwall.<br><br>"
                + "<strong>Notes:<br></strong>"
                + "&ensp;&ensp; - Nicholas states that the proposed values for each characteristic in this method  &ldquo;can be&rdquo;"
                + "adjusted as our technical expertise, mining equipment, and overall mining processes evolve and improve.<br>",
            titulo_section_1: "GENERAL CHARACTERISTICS",
            titulo_section_2: "DEPOSIT SIMULATION",
            titulo_section_3: "RANKING",
            subtitulo_geometria: "Geometry of deposit",
            span_forma_geral: "General shape:",
            forma_geral_0: "Equi-dimensional",
            forma_geral_1: "Platy-tabular",
            forma_geral_2: "Irregular",
            span_mergulho: "Plunge:",
            mergulho_0: "Flat",
            mergulho_1: "Intermediate",
            mergulho_2: "Steep",
            span_espessura: "Ore thickness:",
            espessura_0: "Narrow",
            espessura_1: "Intermediate",
            espessura_2: "Thick",
            espessura_3: "Very thick",
            span_distribuicao: "Grade distribution:",
            distribuicao_0: "Uniform",
            distribuicao_1: "Gradational",
            distribuicao_2: "Erratic",
            subtitulo_densidade: "Density",
            span_densidade_ob: "Orebody:",
            subtitulo_profundidade: "Depth",
            span_profundidade_ob: "Orebody:",
            span_ucs_ob: "Orebody:",
            span_resultado_rss_ob: "Orebody:",
            subtitulo_fracture_spacing: "Fracture Spacing",
            span_fracture_spacing_ob: "Orebody:",
            menu_fracture_spacing_0: "Very close",
            menu_fracture_spacing_1: "Close",
            menu_fracture_spacing_2: "Wide",
            menu_fracture_spacing_3: "Very wide",
            subtitulo_fracture_strenght: "Fracture Stenght",
            span_fracture_strenght_ob: "Orebody:",
            menu_fracture_strenght_0: "Weak",
            menu_fracture_strenght_1: "Moderate",
            menu_fracture_strenght_2: "Strongh",
            h2_fatores_peso: "Weighting Factors",
            span_cm: "OB",
            calculadora_ahp_nicholas: "CALCULATE BY AHP",
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

    //HEADER
    Escrever("titulo-pagina", "titulo_pagina")
    Escrever("li-titulo", "li_titulo")
    Escrever("paragrafo-explicacao", "paragrafo_explicacao")

    //TITULOS
    Escrever("titulo-section-1", "titulo_section_1")
    Escrever("titulo-section-2", "titulo_section_2")
    Escrever("titulo-section-3", "titulo_section_3")

    //SEÇÃO 2
    Escrever("subtitulo-geometria", "subtitulo_geometria")

    //FORMA GERAL
    Escrever("span-forma-geral", "span_forma_geral")
    Escrever("forma-geral", "forma_geral_0", 0)
    Escrever("forma-geral", "forma_geral_1", 1)
    Escrever("forma-geral", "forma_geral_2", 2)

    // MERGULHO
    Escrever("span-mergulho", "span_mergulho")
    Escrever("mergulho", "mergulho_0", 0)
    Escrever("mergulho", "mergulho_1", 1)
    Escrever("mergulho", "mergulho_2", 2)

    // ESPESSURA
    Escrever("span-espessura", "span_espessura")
    Escrever("espessura", "espessura_0", 0)
    Escrever("espessura", "espessura_1", 1)
    Escrever("espessura", "espessura_2", 2)
    Escrever("espessura", "espessura_3", 3)

    // DISTRIBUIÇÃO DE TEORES
    Escrever("span-distribuicao", "span_distribuicao")
    Escrever("distribuicao", "distribuicao_0", 0)
    Escrever("distribuicao", "distribuicao_1", 1)
    Escrever("distribuicao", "distribuicao_2", 2)

    // INPUTS RSS
    Escrever("subtitulo-densidade", "subtitulo_densidade")
    Escrever("span-densidade-ob", "span_densidade_ob")
    Escrever("subtitulo-profundidade", "subtitulo_profundidade")
    Escrever("span-profundidade-ob", "span_profundidade_ob")
    Escrever("span-ucs-ob", "span_ucs_ob")
    Escrever("span-resultado-rss-ob", "span_resultado_rss_ob")

    //ESPAÇAMENTO FRATURAS
    Escrever("subtitulo-fracture-spacing", "subtitulo_fracture_spacing")
    Escrever("span-fracture-spacing-ob", "span_fracture_spacing_ob")
    const menu_fracture_spacing = document.querySelectorAll(".menu-fracture-spacing")
    menu_fracture_spacing.forEach(element => {
        Escrever(element.id, "menu_fracture_spacing_0", 0)
        Escrever(element.id, "menu_fracture_spacing_1", 1)
        Escrever(element.id, "menu_fracture_spacing_2", 2)
        Escrever(element.id, "menu_fracture_spacing_3", 3)
    })

    //QUALIDADE FRATURAS
    Escrever("subtitulo-fracture-strenght", "subtitulo_fracture_strenght")
    Escrever("span-fracture-strenght-ob", "span_fracture_strenght_ob")
    const menu_fracture_strenght = document.querySelectorAll(".menu-fracture-strenght")
    menu_fracture_strenght.forEach(element => {
        Escrever(element.id, "menu_fracture_strenght_0", "0")
        Escrever(element.id, "menu_fracture_strenght_1", "1")
        Escrever(element.id, "menu_fracture_strenght_2", "2")
    })

    // FATORES DE PESO 
    Escrever("h2-fatores-peso", "h2_fatores_peso")
    Escrever("span-cm", "span_cm")
    Escrever("calculadora-ahp-nicholas", "calculadora_ahp_nicholas")

}