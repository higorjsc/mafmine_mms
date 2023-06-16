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
    Escrever("titulo-pagina", "MINING METHOD SELECTION: Nicholas (1981)")

    const paragrafo_explicacao = "The Nicholas (1981) mining method selection procedure was the first numerical approach developed to the problem. " +
        "The method numerically ranks deposit characteristics of ore geometry and rock mechanics characteristics of the ore zone, hanging wall and footwall. " +
        "The value assigned to each characteristic of each mining method are than summed together, with the higher rankings being the more favourable or likely mining methods.<br><br>" +
        "<strong>Notes:</strong><br>" +
        "&ensp;&ensp; - The Nicholas (1981) approach has the disadvantage of assigning equal importance to all criteria.<br>" +
        "&ensp;&ensp; - This method is criticized for having a significant gap between the ranking values of 'unlikely' (0) and 'eliminated' (-49).<br>"
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
    Escrever("span-espessura", "Ore thickness")
    Escrever("espessura", "Narrow", 0)
    Escrever("espessura", "Intermediate", 1)
    Escrever("espessura", "Thick", 2)
    Escrever("espessura", "Muito Thick", 3)

    //DISTRIBUIÇÃO
    Escrever("span-distribuicao", "Grade distribution:")
    Escrever("distribuicao", "Uniform", 0)
    Escrever("distribuicao", "Gradational", 1)
    Escrever("distribuicao", "Erratic", 2)


    //INPUTS RSS
    Escrever("subtitulo-densidade", "Density")
    Escrever("span-densidade-ob", "Orebody:")
    Escrever("subtitulo-profundidade", "Depth")
    Escrever("span-profundidade-ob", "Orebody:")
    Escrever("span-ucs-ob", "Orebody:")
    Escrever("span-resultado-rss-ob", "Orebody:")


    //ESPAÇAMENTO FRATURAS
    Escrever("subtitulo-fracture-spacing", "Fracture Spacing:")
    Escrever("span-fracture-spacing-ob", "Orebody:")
    const menu_fracture_spacing = document.querySelectorAll(".menu-fracture-spacing")
    menu_fracture_spacing.forEach(element => {
        Escrever(element.id, "Very close", 0)
        Escrever(element.id, "Close", 1)
        Escrever(element.id, "Wide", 2)
        Escrever(element.id, "Very wide", 3)
    })

    //QUALIDADE FRATURAS
    Escrever("subtitulo-fracture-strenght", "Fracture Strenght:")
    Escrever("span-fracture-strenght-ob", "Orebody:")
    const menu_fracture_strenght = document.querySelectorAll(".menu-fracture-strenght")
    menu_fracture_strenght.forEach(element => {
        Escrever(element.id, "Weak", 0)
        Escrever(element.id, "Moderate", 1)
        Escrever(element.id, "Strong", 2)
    })
}

function Portuguese() {

    //HEADER
    Escrever("titulo-pagina", "SELEÇÃO DE METODOS DE LAVRA: Nicholas (1981)")

    const paragrafo_explicacao = "O Método de Nicholas (1981) foi o primeiro procedimento númerico desenvolvido para a seleção de métodos de lavra. " +
        "O método ranqueia númericamente caracteristicas geométricas do depósito mineral e características geotécnicas do corpo de minério, hanging wall e footwall. " +
        "Os valores atribuidos para cada característica, de cada método de lavra, são somados e os maiores valores definem os métodos preferidos para o depósito em questão.<br><br>" +

        "<strong>Obersvações:</strong><br>" +
        "&ensp;&ensp; - O método tem a desvantagem de que atribui iguais importancias (pesos) para todos os critérios de seleção.<br>" +
        "&ensp;&ensp; - O método é criticado pelo grande espaço entre os valores de ranque 'unlikely' (0) e 'eliminated' (-49).<br>"
    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    //titulos
    Escrever("titulo-section-1", "CARACTERÍSTICAS GERAIS")
    Escrever("titulo-section-2", "SIMULAÇÃO DO DEPÓSITO")
    Escrever("titulo-section-3", "PREFERENCIAS")

    //SEÇÃO 2
    Escrever("subtitulo-geometria", "Geometria do depósito")

    //FORMA GERAL
    Escrever("span-forma-geral", "General shape:")
    Escrever("forma-geral", "Massiva", 0)
    Escrever("forma-geral", "Tabular", 1)
    Escrever("forma-geral", "Irregular", 2)

    //MERGULHO
    Escrever("span-mergulho", "Mergulho:")
    Escrever("mergulho", "Plano", 0)
    Escrever("mergulho", "Intermediário", 1)
    Escrever("mergulho", "Inclinado", 2)

    //ESPESSURA
    Escrever("span-espessura", "Espessura do minério:")
    Escrever("espessura", "Estreito", 0)
    Escrever("espessura", "Intermediário", 1)
    Escrever("espessura", "Espesso", 2)
    Escrever("espessura", "Muito Espesso", 3)

    //DISTRIBUIÇÃO
    Escrever("span-distribuicao", "Distribuição de teores:")
    Escrever("distribuicao", "Uniforme", 0)
    Escrever("distribuicao", "Gradacional", 1)
    Escrever("distribuicao", "Errática", 2)

    //INPUTS RSS
    Escrever("subtitulo-densidade", "Densidade")
    Escrever("span-densidade-ob", "Corpo de minério:")
    Escrever("subtitulo-profundidade", "Profundidade")
    Escrever("span-profundidade-ob", "Corpo de minério:")
    Escrever("span-ucs-ob", "Corpo de minério:")
    Escrever("span-resultado-rss-ob", "Corpo de minério:")

    //ESPAÇAMENTO FRATURAS
    Escrever("subtitulo-fracture-spacing", "Fracture Spacing:")
    Escrever("span-fracture-spacing-ob", "Corpo de minério:")
    const menu_fracture_spacing = document.querySelectorAll(".menu-fracture-spacing")
    menu_fracture_spacing.forEach(element => {
        Escrever(element.id, "Muito perto", 0)
        Escrever(element.id, "Perto", 1)
        Escrever(element.id, "Longe", 2)
        Escrever(element.id, "Muito longe", 3)
    })

    //QUALIDADE FRATURAS
    Escrever("subtitulo-fracture-strenght", "Fracture Strenght:")
    Escrever("span-fracture-strenght-ob", "Corpo de minério:")
    const menu_fracture_strenght = document.querySelectorAll(".menu-fracture-strenght")
    menu_fracture_strenght.forEach(element => {
        Escrever(element.id, "Fraca", 0)
        Escrever(element.id, "Moderada", 1)
        Escrever(element.id, "Forte", 2)
    })

}
