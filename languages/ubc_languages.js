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
    Escrever("titulo-pagina", "MINING METHOD SELECTION: UBC (1995)")

    //SEÇÃO 1
    let paragrafo_explicacao = "The UBC mining method selection is a modified version of the Nicholas (1981) approach developed by the University of British Columbia in Vancouver, B.C., Canada.<br><br>" +
        "<strong>The modifications include:<br></strong>" +
        "&ensp;&ensp;- The weights of each selection criteria were adjusted;<br>" +
        "&ensp;&ensp;- A value of &quot;-10&quot; is assigned to significantly discount a mining method without completely eliminating it;<br>" +
        "&ensp;&ensp;- &ldquo;Depth&rdquo; and Bieniawski (1989) RMR were introduced as additional new criteria in the selection process;<br>" +
        "&ensp;&ensp;- &ldquo;Fracture Spacing&rdquo; and &ldquo;Fracture Strenght&rdquo; were removed from the selection criteria;<br>" +
        "&ensp;&ensp;- &ldquo;Very Narrow&rdquo; was included as an option in the &ldquo;Ore thickness&rdquo; selection criteria;<br>" +
        "&ensp;&ensp;- &ldquo;Very Weak&rdquo; was included as an option in the &ldquo;Rock Substance Strength&rdquo; selection criteria.<br><br>" +
        "<strong>Notes:<br></strong>" +
        "&ensp;&ensp; - The UBC procedure modifies Nicholas approach to put emphasis  on stope mining rather than caving techniques"
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
    Escrever("mergulho", "Intermediate", 1)
    Escrever("mergulho", "Steep", 2)

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
    Escrever("profundidade", "Deep", 2)


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
    Escrever("titulo-pagina", "SELEÇÃO DE METODOS DE LAVRA: Método UBC (1995)")

    //SEÇÃO 1
    const paragrafo_explicacao = "O UBC Mining Method Selection (1995) é uma versão modificada do método de Nicholas (1981), criada pela University of British Columbia em Vancouver, B.C., Canada.<br><br>" +
        "<strong>As modificações incluem:<br></strong>" +
        "&ensp;&ensp;- Ajuste dos pesos atribuidos a cada critério de seleção;<br>" +
        "&ensp;&ensp;- O valor &ldquo;-10&rdquo; foi adicionado para descontar fortemente um método de lavra sem elimina-lo completamente;<br>" +
        "&ensp;&ensp;- &ldquo;Profundidade&rdquo; e &ldquo;RMR (Bieniawski, 1989)&rdquo; foram adicionados como critérios de seleção;<br>" +
        "&ensp;&ensp;- Remoção dos critérios de seleção &ldquo;Espaçamento das Fraturas&rdquo; e &ldquo;Características das inter-fraturas';<br>" +
        "&ensp;&ensp;- Adição do valor &ldquo;muito estreito&rdquo; como opção para a espessura do minério;<br>" +
        "&ensp;&ensp;- Adição do valor &ldquo;muito fraca&rdquo; como opção para a Rock Substance Strenght.<br><br>" +
        "<strong>Observações:<br></strong>" +
        "&ensp;&ensp; - O método UBC foi desenvolvido para priorizar os métodos de &ldquo;stope', adaptando-se ao cenário da mineração Canadense da época."

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

    Escrever("span-mergulho", "Mergulho:")
    Escrever("mergulho", "Plano", 0)
    Escrever("mergulho", "Intermediário", 1)
    Escrever("mergulho", "Inclinado", 2)

    Escrever("span-espessura", "Espessura do minério:")
    Escrever("espessura", "Muito Estreito", 0)
    Escrever("espessura", "Estreito", 1)
    Escrever("espessura", "Intermediário", 2)
    Escrever("espessura", "Espesso", 3)
    Escrever("espessura", "Muito Espesso", 4)

    Escrever("span-distribuicao", "Distribuição de teores:")
    Escrever("distribuicao", "Uniforme", 0)
    Escrever("distribuicao", "Gradacional", 1)
    Escrever("distribuicao", "Errática", 2)

    Escrever("span-profundidade", "Profundidade:")
    Escrever("profundidade", "Rasa", 0)
    Escrever("profundidade", "Intermediária", 1)
    Escrever("profundidade", "Profunda", 2)

    Escrever("subtitulo-densidade", "Densidade")
    Escrever("span-densidade-ob", "Corpo de minério:")

    Escrever("subtitulo-profundidade", "Profundidade")
    Escrever("span-profundidade-ob", "Corpo de minério:")

    Escrever("span-ucs-ob", "Corpo de minério:")

    Escrever("span-resultado-rss-ob", "Corpo de minério:")

    //class = menu-rmr de seleção de 5 options
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

    Escrever("h2-fatores-peso-ubc", "Fatores de Peso")
    Escrever("span-cm-ubc", "CM")
    Escrever("botao-ahp-ubc", "CALCULAR POR AHP")

    //RODAPÉ
    Escrever("universidade", "UFRGS Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "LAPROM Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")

}