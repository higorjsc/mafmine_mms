
function Language(idioma_janela) {
    const idiomas = {
        pt: {
            titulo_pagina: "SELEÇÃO DE METODOS DE LAVRA: Shahriar e Bakhtavar (2007)",
            li_titulo: "SELECIONE O MÉTODO",
            paragrafo_explicacao:
                "O procedimento de seleção de métodos de lavra de Shahriar e Bakhtavar (Sh&B) é mais uma grande modificação do método UBC (1996).<br><br>"
                + "<strong>As modificações incluem:</strong><br>"
                + "&ensp;&ensp;- Ajuste dos valores atribuidos a cada critério de seleção que não seguem mais um padrão de números inteiros;<br>"
                + "&ensp;&ensp;- &ldquo;Valor do minério&rdquo; foi adicionado como critério de seleção<br>"
                + "&ensp;&ensp;- Adição dos valores &ldquo;Baixo&rdquo; e &ldquo;Pouco inclinado&rdquo; como opções para o mergulho do minério<br>"
                + "&ensp;&ensp;- Adição do valor &ldquo;Pouco profunda&rdquo; como opção para a Profundidade do depósito<br><br>"
                + "<strong>Observações:</strong><br>"
                + "&ensp;&ensp;- Shahriar e Bakhtavar (2007) sugerem a aplicação de métodos de MCDM nos métodos de lavra com melhores classificações no procedimento Sh&B."
            ,
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
            mergulho_1: "Baixo",
            mergulho_2: "Intermediário",
            mergulho_3: "Pouco inclinado",
            mergulho_4: "Inclinado",
            span_espessura: "Espessusra do minério:",
            espessura_0: "Muito estreito",
            espessura_1: "Estreito",
            espessura_2: "Intermediário",
            espessura_3: "Espesso",
            espessura_4: "Muito espesso",
            span_distribuicao: "Distribuição de teores:",
            distribuicao_0: "Uniforme",
            distribuicao_1: "Gradacional",
            distribuicao_2: "Errática",
            span_profundidade: "Profundidade:",
            profundidade_0: "Rasa",
            profundidade_1: "Intermediária",
            profundidade_2: "Pouco profunda",
            profundidade_3: "Profunda",
            subtitulo_valor_minerio: "Fatores econômicos",
            span_valor_minerio: "Valor do minério",
            valor_minerio_0: "Baixo",
            valor_minerio_1: "Médio",
            valor_minerio_2: "Alto",
            subtitulo_densidade: "Densidade",
            span_densidade_ob: "Corpo de minério:",
            subtitulo_profundidade: "Profundidade",
            span_profundidade_ob: "Corpo de minério:",
            span_ucs_ob: "Corpo de minério:",
            span_resultado_rss_ob: "Corpo de minério:",
            span_rmr_ob: "Corpo de minério:",
            span_gsi_ob: "Corpo de minério:",
            span_q_ob: "Corpo de minério:",
            menu_rmr_0: "Muito pobre",
            menu_rmr_1: "Pobre",
            menu_rmr_2: "Razoável",
            menu_rmr_3: "Boa",
            menu_rmr_4: "Muito boa",
            h2_fatores_peso_ubc: "Fatores de Peso",
            span_cm_ubc: "OB",
            botao_ahp_ubc: "CALCULAR POR AHP",
            universidade: "UFRGS Universidade Federal do Rio Grande do Sul",
            laboratorio: "LAPROM Laboratório de Processamento Mineral",
            localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            contato: "Contato: email@ufrgs.com",
            desenvolvedor: "Desenvolvedor: Higor Campos",
            contato_desenvolvedor: "Contato: hhigor1217@gmail.com",
        },
        en: {
            titulo_pagina: "MINING METHOD SELECTION: Shahriar and Bakhtavar (2007)",
            li_titulo: "SELECT METHOD",
            paragrafo_explicacao:
                "The Shahriar and Bakhtavar (Sh&B) mining method selection procedure is a modifiedy version of the UBC (1996) method.<br><br>"
                + "<strong>The modifications include:</strong><br>"
                + "&ensp;&ensp;- The weights of each selection criterion were adjusted, and decimal values were used.<br>"
                + "&ensp;&ensp;- &ldquo;Ore value&rdquo; was introduced as additional new criteria in the selection process<br>"
                + "&ensp;&ensp;- &ldquo;Low&rdquo; and &ldquo;Rarely Steep&rdquo; were included as options in the &ldquo;Plunge&rdquo; selection criteria<br>"
                + "&ensp;&ensp;- &ldquo;Rarely Deep&rdquo; was included as an option in the &ldquo;Depth&rdquo; selection criteria<br><br>"
                + "<strong>Observações:</strong><br>"
                + "&ensp;&ensp;- Shahriar and Bakhtavar (2007) suggest the application of MCDM methods to mining methods with higher rankings in the Sh&B procedure."
            ,
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
            mergulho_1: "Low",
            mergulho_2: "Intermediate",
            mergulho_3: "Rarely steep",
            mergulho_4: "Steep",
            span_espessura: "Ore thickness:",
            espessura_0: "Very narrow",
            espessura_1: "Narrow",
            espessura_2: "Intermediate",
            espessura_3: "Thick",
            espessura_4: "Very thick",
            span_distribuicao: "Grade distribution:",
            distribuicao_0: "Uniform",
            distribuicao_1: "Gradational",
            distribuicao_2: "Erratic",
            span_profundidade: "Depth:",
            profundidade_0: "Shallow",
            profundidade_1: "Intermediate",
            profundidade_2: "Rarely deep",
            profundidade_3: "Deep",
            subtitulo_valor_minerio: "Economic factors",
            span_valor_minerio: "Grade value:",
            valor_minerio_0: "Low",
            valor_minerio_1: "Medium",
            valor_minerio_2: "High",
            subtitulo_densidade: "Density",
            span_densidade_ob: "Orebody:",
            subtitulo_profundidade: "Profundidade",
            span_profundidade_ob: "Orebody:",
            span_ucs_ob: "Orebody:",
            span_resultado_rss_ob: "Orebody:",
            span_rmr_ob: "Orebody:",
            span_gsi_ob: "Orebody:",
            span_q_ob: "Orebody:",
            menu_rmr_0: "Very poor",
            menu_rmr_1: "Poor",
            menu_rmr_2: "Fair",
            menu_rmr_3: "Good",
            menu_rmr_4: "Very good",
            h2_fatores_peso_ubc: "Weighting Factors",
            span_cm_ubc: "OB",
            botao_ahp_ubc: "CALCULATE BY AHP",
            universidade: "UFRGS Universidade Federal do Rio Grande do Sul",
            laboratorio: "LAPROM Laboratório de Processamento Mineral",
            localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            contato: "Contato: email@ufrgs.com",
            desenvolvedor: "Desenvolvedor: Higor Campos",
            contato_desenvolvedor: "Contato: hhigor1217@gmail.com",
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
    Escrever("mergulho", "mergulho_3", 3)
    Escrever("mergulho", "mergulho_4", 4)

    // ESPESSURA
    Escrever("span-espessura", "span_espessura")
    Escrever("espessura", "espessura_0", 0)
    Escrever("espessura", "espessura_1", 1)
    Escrever("espessura", "espessura_2", 2)
    Escrever("espessura", "espessura_3", 3)
    Escrever("espessura", "espessura_4", 4)

    // DISTRIBUIÇÃO DE TEORES
    Escrever("span-distribuicao", "span_distribuicao")
    Escrever("distribuicao", "distribuicao_0", 0)
    Escrever("distribuicao", "distribuicao_1", 1)
    Escrever("distribuicao", "distribuicao_2", 2)

    // PROFUNDIDADE
    Escrever("span-profundidade", "span_profundidade")
    Escrever("profundidade", "profundidade_0", 0)
    Escrever("profundidade", "profundidade_1", 1)
    Escrever("profundidade", "profundidade_2", 2)
    Escrever("profundidade", "profundidade_3", 3)
    
    // FATORES ECONOMICOS
    Escrever("subtitulo-valor-minerio", "subtitulo_valor_minerio")
    Escrever("span-valor-minerio", "span_valor_minerio")
    Escrever("valor-minerio", "valor_minerio_0", 0)
    Escrever("valor-minerio", "valor_minerio_1", 1)
    Escrever("valor-minerio", "valor_minerio_2", 2)

    // INPUTS RSS
    Escrever("subtitulo-densidade", "subtitulo_densidade")
    Escrever("span-densidade-ob", "span_densidade_ob")
    Escrever("subtitulo-profundidade", "subtitulo_profundidade")
    Escrever("span-profundidade-ob", "span_profundidade_ob")
    Escrever("span-ucs-ob", "span_ucs_ob")
    Escrever("span-resultado-rss-ob", "span_resultado_rss_ob")

    // SPANS RMR-GSI-Q
    Escrever("span-rmr-ob", "span_rmr_ob")
    Escrever("span-gsi-ob", "span_gsi_ob")
    Escrever("span-q-ob", "span_q_ob")

    // MENU RMR
    const menu_rmr = document.querySelectorAll(".menu-rmr")
    menu_rmr.forEach((element) => {
        Escrever(element.id, "menu_rmr_0", 0)
        Escrever(element.id, "menu_rmr_1", 1)
        Escrever(element.id, "menu_rmr_2", 2)
        Escrever(element.id, "menu_rmr_3", 3)
        Escrever(element.id, "menu_rmr_4", 4)
    })

    // FATORES DE PESO 
    Escrever("h2-fatores-peso-ubc", "h2_fatores_peso_ubc")
    Escrever("span-cm-ubc", "span_cm_ubc")
    Escrever("botao-ahp-ubc", "botao_ahp_ubc")

    //FOOTER
    Escrever("universidade", "universidade")
    Escrever("laboratorio", "laboratorio")
    Escrever("localizacao", "localizacao")
    Escrever("contato", "contato")
    Escrever("desenvolvedor", "desenvolvedor")
    Escrever("contato-desenvolvedor", "contato_desenvolvedor")

}