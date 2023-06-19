function Escrever(id, texto, op) {
    const elemento = document.getElementById(id)
    if (op === undefined) {

        elemento.innerHTML = texto
    } else {
        elemento.options[op].text = texto
    }
}

function English() {
    //HEADER
    Escrever("titulo-pagina", "MINING METHOD SELECTION: Shahriar and Bakhtavar (2007)")

    //SEÇÃO 1
    const paragrafo_explicacao = "The Shahriar and Bakhtavar (Sh&B) mining method selection procedure is a modifiedy version of the UBC (1996) method.<br><br>"
        + "<strong>The modifications include:</strong><br>"
        + "&ensp;&ensp;- The weights of each selection criterion were adjusted, and decimal values were used.<br>"
        + "&ensp;&ensp;- 'Ore value' was introduced as additional new criteria in the selection process<br>"
        + "&ensp;&ensp;- 'Low' and 'Rarely Steep' were included as options in the 'Plunge' selection criteria<br>"
        + "&ensp;&ensp;- 'Rarely Deep' was included as an option in the 'Depth' selection criteria<br><br>"
        + "<strong>Observações:</strong><br>"
        + "&ensp;&ensp;- Shahriar and Bakhtavar (2007) suggest the application of MCDM methods to mining methods with higher rankings in the Sh&B procedure."
    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    //titulos
    Escrever("titulo-section-1", "GENERAL CHARACTERISTICS")
    Escrever("titulo-section-2", "DEPOSIT SIMULATION ")
    Escrever("titulo-section-3", "RANKING")

    //SEÇÃO 2
    Escrever("subtitulo-geometria", "Geometry of deposit")

    //FORMA GERAL
    Escrever("span-forma-geral", "General shape:")
    Escrever("forma-geral", "Equi-dimensional", 0)
    Escrever("forma-geral", "Platy-tabular", 1)
    Escrever("forma-geral", "Irregular", 2)

    //MERGULHO
    Escrever("span-mergulho", "Plunge:")
    Escrever("mergulho", "Flat", 0)
    Escrever("mergulho", "Low", 1)
    Escrever("mergulho", "Intermediate", 2)
    Escrever("mergulho", "Rarely Steep", 3)
    Escrever("mergulho", "Steep", 4)

    //ESPESSURA
    Escrever("span-espessura", "Ore thickness:")
    Escrever("espessura", "Very narrow", 0)
    Escrever("espessura", "Narrow", 1)
    Escrever("espessura", "Intermediate", 2)
    Escrever("espessura", "Thick", 3)
    Escrever("espessura", "Very Thick", 4)

    //DISTRIBUIÇÃO
    Escrever("span-distribuicao", "Grade distribution:")
    Escrever("distribuicao", "Uniform", 0)
    Escrever("distribuicao", "Gradational", 1)
    Escrever("distribuicao", "Erratic", 2)

    //PROFUNDIDADE
    Escrever("span-profundidade", "Depth:")
    Escrever("profundidade", "Shallow", 0)
    Escrever("profundidade", "Intermediate", 1)
    Escrever("profundidade", "Rarely Deep", 2)
    Escrever("profundidade", "Deep", 3)

    //VALOR MINERIO
    Escrever("subtitulo-valor-minerio", "Economic factors")
    Escrever("span-valor-minerio", "Grade value:")
    Escrever("valor-minerio", "Low", 0)
    Escrever("valor-minerio", "Medium", 1)
    Escrever("valor-minerio", "High", 2)

    //INPUTS RSS
    Escrever("subtitulo-densidade", "Density")
    Escrever("span-densidade-ob", "Orebody:")
    Escrever("subtitulo-profundidade", "Depth")
    Escrever("span-profundidade-ob", "Orebody:")
    Escrever("span-ucs-ob", "Orebody:")
    Escrever("span-resultado-rss-ob", "Orebody:")

    //RMR
    Escrever("span-rmr-ob", "Orebody:")
    Escrever("span-gsi-ob", "Orebody:")
    Escrever("span-q-ob", "Orebody:")
    const menu_rmr = document.querySelectorAll(".menu-rmr")
    menu_rmr.forEach((element) => {
        Escrever(element.id, "Very Poor", 0)
        Escrever(element.id, "Poor", 1)
        Escrever(element.id, "Fair", 2)
        Escrever(element.id, "Good", 3)
        Escrever(element.id, "Very Good", 4)
    })

    //FATORES DE PESO
    Escrever("h2-fatores-peso-ubc", "Weighting Factors")
    Escrever("span-cm-ubc", "OB")
    Escrever("botao-ahp-ubc", "CALCULATE BY AHP")
    
    // RODAPÉ
    Escrever("universidade", "Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")
}

function Portuguese() {
    //HEADER
    Escrever("titulo-pagina", "SELEÇÃO DE METODOS DE LAVRA: Shahriar e Bakhtavar (2007)")

    //SEÇÃO 1
    let paragrafo_explicacao = "O procedimento de seleção de métodos de lavra de Shahriar e Bakhtavar (Sh&B) é mais uma grande modificação do método UBC (1996).<br><br>"
        + "<strong>As modificações incluem:</strong><br>"
        + "&ensp;&ensp;- Ajuste dos valores atribuidos a cada critério de seleção que não seguem mais um padrão de números inteiros;<br>"
        + "&ensp;&ensp;- 'Valor do minério' foi adicionado como critério de seleção<br>"
        + "&ensp;&ensp;- Adição dos valores 'Baixo' e 'Pouco inclinado' como opções para o mergulho do minério<br>"
        + "&ensp;&ensp;- Adição do valor 'Pouco profunda' como opção para a Profundidade do depósito<br><br>"
        + "<strong>Observações:</strong><br>"
        + "&ensp;&ensp;- Shahriar e Bakhtavar (2007) sugerem a aplicação de métodos de MCDM nos métodos de lavra com melhores classificações no procedimento Sh&B."
    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    //TITULOS
    Escrever("titulo-section-1", "CARACTERÍSTICAS GERAIS")
    Escrever("titulo-section-2", "SIMULAÇÃO DO DEPÓSITO")
    Escrever("titulo-section-3", "PREFERENCIAS")

    //SEÇÃO 2
    Escrever("subtitulo-geometria", "Geometria do depósito")

    //FORMA GERAL
    Escrever("span-forma-geral", "Forma geral:")
    Escrever("forma-geral", "Massiva", 0)
    Escrever("forma-geral", "Tabular", 1)
    Escrever("forma-geral", "Irregular", 2)

    //MERGULHO
    Escrever("span-mergulho", "Mergulho:")
    Escrever("mergulho", "Plano", 0)
    Escrever("mergulho", "Baixo", 1)
    Escrever("mergulho", "Intermediário", 2)
    Escrever("mergulho", "Pouco inclinado", 3)
    Escrever("mergulho", "Inclinado", 4)

    //ESPESSURA
    Escrever("span-espessura", "Espessura do minério:")
    Escrever("espessura", "Muito Estreito", 0)
    Escrever("espessura", "Estreito", 1)
    Escrever("espessura", "Intermediário", 2)
    Escrever("espessura", "Espesso", 3)
    Escrever("espessura", "Muito Espesso", 4)

    //DISTRIBUIÇÃO
    Escrever("span-distribuicao", "Distribuição de teores:")
    Escrever("distribuicao", "Uniforme", 0)
    Escrever("distribuicao", "Gradacional", 1)
    Escrever("distribuicao", "Errática", 2)

    //PROFUNDIDADE
    Escrever("span-profundidade", "Profundidade:")
    Escrever("profundidade", "Rasa", 0)
    Escrever("profundidade", "Intermediária", 1)
    Escrever("profundidade", "Pouco profunda", 2)
    Escrever("profundidade", "Profunda", 3)

    //VALOR MINERIO
    Escrever("subtitulo-valor-minerio", "Fatores econômicos")
    Escrever("span-valor-minerio", "Valor do minério:")
    Escrever("valor-minerio", "Baixo", 0)
    Escrever("valor-minerio", "Médio", 1)
    Escrever("valor-minerio", "Alto", 2)

    //INPUTS RSS
    Escrever("subtitulo-densidade", "Densidade")
    Escrever("span-densidade-ob", "Corpo de minério:")
    Escrever("subtitulo-profundidade", "Profundidade")
    Escrever("span-profundidade-ob", "Corpo de minério:")
    Escrever("span-ucs-ob", "Corpo de minério:")
    Escrever("span-resultado-rss-ob", "Corpo de minério:")

    //RMR
    Escrever("span-rmr-ob", "Corpo de minério:")
    Escrever("span-gsi-ob", "Corpo de minério:")
    Escrever("span-q-ob", "Corpo de minério:")
    const menu_rmr = document.querySelectorAll(".menu-rmr")
    menu_rmr.forEach((element) => {
        Escrever(element.id, "Muito Pobre", 0)
        Escrever(element.id, "Pobre", 1)
        Escrever(element.id, "Razoável", 2)
        Escrever(element.id, "Boa", 3)
        Escrever(element.id, "Muito Boa", 4)
    })

    //FATORES DE PESO
    Escrever("h2-fatores-peso-ubc", "Fatores de Peso")
    Escrever("span-cm-ubc", "CM")
    Escrever("botao-ahp-ubc", "CALCULAR POR AHP")


    // RODAPÉ
    Escrever("universidade", "Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")
}