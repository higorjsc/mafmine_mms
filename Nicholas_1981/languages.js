function Switch_language() //BOTÃO SWITCH DE TROCAR IDIOMAS
{
    const switch_botao = document.getElementById('checkbox_switch')
    const switch_texto = document.getElementById('switch_texto')

    if(switch_botao.checked) //Configura a posição to texto PT se switch on (página em ingles)
    {
      switch_texto.innerHTML = "PT"
      switch_texto.style.transform = 'translate(5px, -6px)'
      English()
    }else       //Configura a posição to texto EN se switch on (página em portugues)
    {
      switch_texto.innerHTML = "EN"
      switch_texto.style.transform = 'translate(21px, -6px)'
      Portuguese()
    }
    Calculo() //Calculo é chamada para alterar o valor do resultado do RSS
}

function English()
{
    const paragrafo_explicacao = document.querySelector('#paragrafo_explicacao')
    paragrafo_explicacao.innerHTML = "O Método propsoto por Nicholas, em 1981, foi o primeiro procedimento númerico de seleção de métodos de lavra."+
    "Consiste no ranqueamento dos métodos de lavra com base na geometria do depósito e em parâmetros geotécnicos.<br><br>"+

    "<strong>Observações:</strong><br>"+
    "&ensp;&ensp; - O método de Nicholas não considera que os critérios de seleção possuam diferentes relevâncias.<br>"
    
    //titulos
    const titulo_section_1 = document.querySelector('#titulo_section_1')
    titulo_section_1.innerText = 'GENERAL CHARACTERISTICS'
    const titulo_section_2 = document.querySelector('#titulo_section_2')
    titulo_section_2.innerText = 'DEPOSIT SIMULATION '
    const titulo_section_3 = document.querySelector('#titulo_section_3')
    titulo_section_3.innerText = 'RANKING'

    const subtitulo_geometria = document.querySelector('#subtitulo_geometria')
    subtitulo_geometria.innerText = 'Geometry of deposit'

    const span_forma_geral = document.querySelector('#span_forma_geral')
    span_forma_geral.innerText = 'General shape:'
    const forma_geral = document.querySelector('#forma_geral')
    forma_geral.options[0].text = 'Equi-dimensional'
    forma_geral.options[1].text = 'Platy-tabular'
    forma_geral.options[2].text = 'Irregular'


    const span_mergulho = document.querySelector('#span_mergulho')
    span_mergulho.innerText = 'Plunge:'
    const mergulho = document.querySelector('#mergulho')
    mergulho.options[0].text = 'Flat'
    mergulho.options[1].text = 'Intermediate'
    mergulho.options[2].text = 'Steep'
    
    const span_espessura = document.querySelector('#span_espessura')
    span_espessura.innerText = 'Ore thickness'
    const espessura = document.querySelector('#espessura')
    espessura.options[0].text = 'Narrow'
    espessura.options[1].text = 'Intermediate'
    espessura.options[2].text = 'Thick'
    espessura.options[3].text = 'Very Thick'

    const span_distribuicao = document.querySelector('#span_distribuicao')
    span_distribuicao.innerText = 'Grade distribution:'
    const distribuicao = document.querySelector('#distribuicao')
    distribuicao.options[0].text = 'Uniform'
    distribuicao.options[1].text = 'Gradational'
    distribuicao.options[2].text = 'Erratic'

    const subtitulo_densidade = document.querySelector('#subtitulo_densidade')
    subtitulo_densidade.innerText = 'Density'
    const span_densidade_ob = document.querySelector('#span_densidade_ob')
    span_densidade_ob.innerText = 'Orebody:'

    const subtitulo_profundidade = document.querySelector('#subtitulo_profundidade')
    subtitulo_profundidade.innerText = 'Depth'
    const span_profundidade_ob = document.querySelector('#span_profundidade_ob')
    span_profundidade_ob.innerText = 'Orebody:'

    const span_ucs_ob = document.querySelector('#span_ucs_ob')
    span_ucs_ob.innerText = 'Orebody:'

    const span_resultado_rss_ob = document.querySelector('#span_resultado_rss_ob')
    span_resultado_rss_ob.innerText = 'Orebody:'

    
    //ESPAÇAMENTO FRATURAS
    const subtitulo_fracture_spacing = document.querySelector('#subtitulo_fracture_spacing')
    subtitulo_fracture_spacing.innerText = 'Fracture Spacing:'

    const span_fracture_spacing_ob = document.querySelector('#span_fracture_spacing_ob')
    span_fracture_spacing_ob.innerText = 'Orebody:'

    const menu_fracture_spacing = document.querySelectorAll('.menu_fracture_spacing')
    menu_fracture_spacing.forEach(element => {
        element.options[0].text = 'Very close'
        element.options[1].text = 'Close'
        element.options[2].text = 'Wide'
        element.options[3].text = 'Very wide'
    });



    //QUALIDADE FRATURAS
    const subtitulo_fracture_strenght = document.querySelector('#subtitulo_fracture_strenght')
    subtitulo_fracture_strenght.innerText = 'Fracture Strenght:'

    const span_fracture_strenght_ob = document.querySelector('#span_fracture_strenght_ob')
    span_fracture_strenght_ob.innerText = 'Orebody:'

    const menu_fracture_strenght = document.querySelectorAll('.menu_fracture_strenght')
    menu_fracture_strenght.forEach(element => {
        element.options[0].text = 'Weak'
        element.options[1].text = 'Moderate'
        element.options[2].text = 'Strong'
    });



}

function Portuguese()
{
    const paragrafo_explicacao = document.querySelector('#paragrafo_explicacao')
    paragrafo_explicacao.innerHTML = "O Método propsoto por Nicholas, em 1981, foi o primeiro procedimento númerico de seleção de métodos de lavra."+
    "Consiste no ranqueamento dos métodos de lavra com base na geometria do depósito e em parâmetros geotécnicos.<br><br>"+

    "<strong>Observações:</strong><br>"+
    "&ensp;&ensp; - O método de Nicholas não considera que os critérios de seleção possuam diferentes relevâncias.<br>"

    //titulos
    const titulo_section_1 = document.querySelector('#titulo_section_1')
    titulo_section_1.innerText = 'CARACTERÍSTICAS GERAIS'
    const titulo_section_2 = document.querySelector('#titulo_section_2')
    titulo_section_2.innerText = 'SIMULAÇÃO DO DEPÓSITO'
    const titulo_section_3 = document.querySelector('#titulo_section_3')
    titulo_section_3.innerText = 'PREFERENCIAS'

    const subtitulo_geometria = document.querySelector('#subtitulo_geometria')
    subtitulo_geometria.innerText = 'Geometria do depósito'

    const span_forma_geral = document.querySelector('#span_forma_geral')
    span_forma_geral.innerText = 'Forma geral:'
    const forma_geral = document.querySelector('#forma_geral')
    forma_geral.options[0].text = 'Massiva'
    forma_geral.options[1].text = 'Tabular'
    forma_geral.options[2].text = 'Irregular'


    const span_mergulho = document.querySelector('#span_mergulho')
    span_mergulho.innerText = 'Mergulho:'
    const mergulho = document.querySelector('#mergulho')
    mergulho.options[0].text = 'Plano'
    mergulho.options[1].text = 'Intermediário'
    mergulho.options[2].text = 'Inclinado'
    
    const span_espessura = document.querySelector('#span_espessura')
    span_espessura.innerText = 'Espessura do minério:'
    const espessura = document.querySelector('#espessura')
    espessura.options[0].text = 'Estreito'
    espessura.options[1].text = 'Intermediário'
    espessura.options[2].text = 'Espesso'
    espessura.options[3].text = 'Muito Espesso'

    const span_distribuicao = document.querySelector('#span_distribuicao')
    span_distribuicao.innerText = 'Distribuição de teores:'
    const distribuicao = document.querySelector('#distribuicao')
    distribuicao.options[0].text = 'Uniforme'
    distribuicao.options[1].text = 'Gradacional'
    distribuicao.options[2].text = 'Errática'

    const subtitulo_densidade = document.querySelector('#subtitulo_densidade')
    subtitulo_densidade.innerText = 'Densidade'
    const span_densidade_ob = document.querySelector('#span_densidade_ob')
    span_densidade_ob.innerText = 'Corpo de minério:'


    const subtitulo_profundidade = document.querySelector('#subtitulo_profundidade')
    subtitulo_profundidade.innerText = 'Profundidade'
    const span_profundidade_ob = document.querySelector('#span_profundidade_ob')
    span_profundidade_ob.innerText = 'Corpo de minério:'

    const span_ucs_ob = document.querySelector('#span_ucs_ob')
    span_ucs_ob.innerText = 'Corpo de minério:'

    const span_resultado_rss_ob = document.querySelector('#span_resultado_rss_ob')
    span_resultado_rss_ob.innerText = 'Corpo de minério:'

    //ESPAÇAMENTO FRATURAS
    const subtitulo_fracture_spacing = document.querySelector('#subtitulo_fracture_spacing')
    subtitulo_fracture_spacing.innerText = 'Espaçamento das Fraturas'

    const span_fracture_spacing_ob = document.querySelector('#span_fracture_spacing_ob')
    span_fracture_spacing_ob.innerText = 'Corpo de Minério:'

    const menu_fracture_spacing = document.querySelectorAll('.menu_fracture_spacing')
    menu_fracture_spacing.forEach(element => {
        element.options[0].text = 'Muito perto'
        element.options[1].text = 'Perto'
        element.options[2].text = 'Longe'
        element.options[3].text = 'Muito Longe'

    });
    

    //QUALIDADE FRATURAS
    const subtitulo_fracture_strenght = document.querySelector('#subtitulo_fracture_strenght')
    subtitulo_fracture_strenght.innerText = 'Características das inter-fraturas'

    const span_fracture_strenght_ob = document.querySelector('#span_fracture_strenght_ob')
    span_fracture_strenght_ob.innerText = 'Corpo de minério:'

    const menu_fracture_strenght = document.querySelectorAll('.menu_fracture_strenght')
    menu_fracture_strenght.forEach(element => {
        element.options[0].text = 'Fraca'
        element.options[1].text = 'Moderada'
        element.options[2].text = 'Forte'
    });
 

        
}
