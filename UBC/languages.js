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
    paragrafo_explicacao.innerHTML = "The UBC mining method selection is a modified version of the Nicholas (1981) approach developed by the University of British Columbia in Vancouver, B.C., Canada.<br><br>"+
    "<strong>The modifications include:<br></strong>"+

    "&ensp;&ensp;- The weights of each selection criteria were adjusted;<br>"+
    "&ensp;&ensp;- A value of '-10' is assigned to significantly discount a mining method without completely eliminating it;<br>"+
    "&ensp;&ensp;- 'Depth' and Bieniawski (1989) RMR were introduced as additional new criteria in the selection process;<br>"+

    "&ensp;&ensp;- 'Fracture Spacing' and 'Fracture Strenght' were removed from the selection criteria;<br>"+
    "&ensp;&ensp;- 'Very Narrow' was included as an option in the 'Ore thickness' selection criteria;<br>"+
    "&ensp;&ensp;- 'Very Weak' was included as an option in the 'Rock Substance Strength' selection criteria.<br><br>"+

    "<strong>Notes:<br></strong>"+
    "&ensp;&ensp; - The UBC procedure modifies Nicholas approach to put emphasis  on stope mining rather than caving techniques"

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
    espessura.options[0].text = 'Very narrow'
    espessura.options[1].text = 'Narrow'
    espessura.options[2].text = 'Intermediate'
    espessura.options[3].text = 'Thick'
    espessura.options[4].text = 'Very Thick'

    const span_distribuicao = document.querySelector('#span_distribuicao')
    span_distribuicao.innerText = 'Grade distribution:'
    const distribuicao = document.querySelector('#distribuicao')
    distribuicao.options[0].text = 'Uniform'
    distribuicao.options[1].text = 'Gradational'
    distribuicao.options[2].text = 'Erratic'

    const span_profundidade = document.querySelector('#span_profundidade')
    span_profundidade.innerText = 'Depth:'
    const profundidade = document.querySelector('#profundidade')
    profundidade.options[0].text = 'Shallow'
    profundidade.options[1].text = 'Intermediate'
    profundidade.options[2].text = 'Deep'

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

    //class = menu_rmr de seleção de 5 options
    const span_rmr_ob = document.querySelector('#span_rmr_ob')
    span_rmr_ob.innerText = 'Orebody:'
    const span_gsi_ob = document.querySelector('#span_gsi_ob')
    span_gsi_ob.innerText = 'Orebody:'
    const span_q_ob = document.querySelector('#span_q_ob')
    span_q_ob.innerText = 'Orebody:'

    const menu_rmr = document.querySelectorAll('.menu_rmr')

    menu_rmr.forEach(element => {
        element.options[0].text = 'Very Poor'
        element.options[1].text = 'Poor'
        element.options[2].text = 'Fair'
        element.options[3].text = 'Good'
        element.options[4].text = 'Very Good'
        
    });
}

function Portuguese()
{
    const paragrafo_explicacao = document.querySelector('#paragrafo_explicacao')
    paragrafo_explicacao.innerHTML = "O UBC Mining Method Selection (1996) é uma versão modificada do método de Nicholas (1981), criada pela University of British Columbia em Vancouver, B.C., Canada.<br><br>"+
    "<strong>As modificações incluem:<br></strong>"+

    "&ensp;&ensp;- Modificação dos pesos atribuidos a cada critério de seleção;<br>"+
    "&ensp;&ensp;- O valor '-10' foi adicionado para descontar fortemente um método de lavra sem elimina-lo completamente;<br>"+
    "&ensp;&ensp;- 'Profundidade' e 'RMR (Bieniawski, 1989)' foram adicionados como critérios de seleção;<br>"+
    "&ensp;&ensp;- Remoção dos critérios de seleção 'Espaçamento das Fraturas' e 'Características das inter-fraturas';<br>"+
    "&ensp;&ensp;- Adição do valor 'muito estreito' como opção para a espessura do minério;<br>"+
    "&ensp;&ensp;- Adição do valor 'muito fraca' como opção para a Rock Substance Strenght.<br><br>"+

    "<strong>Observações:<br></strong>"+
    "&ensp;&ensp; - O método UBC foi desenvolvido com ênfase em métodos de 'stope' em vez de 'caving', , adaptando-se ao cenário da mineração Canadense da época."

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
    espessura.options[0].text = 'Muito Estreito'
    espessura.options[1].text = 'Estreito'
    espessura.options[2].text = 'Intermediário'
    espessura.options[3].text = 'Espesso'
    espessura.options[4].text = 'Muito Espesso'

    const span_distribuicao = document.querySelector('#span_distribuicao')
    span_distribuicao.innerText = 'Distribuição de teores:'
    const distribuicao = document.querySelector('#distribuicao')
    distribuicao.options[0].text = 'Uniforme'
    distribuicao.options[1].text = 'Gradacional'
    distribuicao.options[2].text = 'Errática'

    const span_profundidade = document.querySelector('#span_profundidade')
    span_profundidade.innerText = 'Profundidade:'
    const profundidade = document.querySelector('#profundidade')
    profundidade.options[0].text = 'Rasa'
    profundidade.options[1].text = 'Intermediária'
    profundidade.options[2].text = 'Profunda'

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


    //class = menu_rmr de seleção de 5 options
    const span_rmr_ob = document.querySelector('#span_rmr_ob')
    span_rmr_ob.innerText = 'Corpo de minério:'
    const span_gsi_ob = document.querySelector('#span_gsi_ob')
    span_gsi_ob.innerText = 'Corpo de minério:'
    const span_q_ob = document.querySelector('#span_q_ob')
    span_q_ob.innerText = 'Corpo de minério:'

    const menu_rmr = document.querySelectorAll('.menu_rmr')

    menu_rmr.forEach(element => {
        element.options[0].text = 'Muito Pobre'
        element.options[1].text = 'Pobre'
        element.options[2].text = 'Razoável'
        element.options[3].text = 'Boa'
        element.options[4].text = 'Muito Boa'
        
    });
}
