function Open_pop_up_gsi(id) 
{
    const titulo = document.getElementById('titulo_section_1').innerText
  
    let idioma = titulo.includes('CHARACTERISTICS') ? 'en' : 'pt'
  
    const parametro = id + '_' + idioma
    let encoded_id = ''
    if(idioma=='en'){
        encoded_id = 'UBC\\gsi_calculadora\\pop_up_gsi_en.html?' + encodeURIComponent(parametro)
    }else{
        encoded_id = 'UBC\\gsi_calculadora\\pop_up_gsi_pt.html?' + encodeURIComponent(parametro)
    }

    window.open(encoded_id, '_blank', 'width=770,height=730')

}

function Open_pop_up_rmr(id) 
{
    const titulo = document.getElementById('titulo_section_1').innerText
  
    let idioma = titulo.includes('CHARACTERISTICS') ? 'en' : 'pt'
  
    const parametro = id + '_' + idioma
    if(idioma=='en'){
        encoded_id = 'UBC\\rmr_calculadora\\pop_up_rmr_en.html?' + encodeURIComponent(parametro)
    }else{
        encoded_id = 'UBC\\rmr_calculadora\\pop_up_rmr_pt.html?' + encodeURIComponent(parametro)
    }

    window.open(encoded_id, '_blank', 'width=600,height=650')

}
  
function Open_pop_up_pesos() //Mostra a planilha com os pesos do método UBC
{

    const titulo = document.getElementById('titulo_section_1').innerText
    if(titulo.includes('CHARACTERISTICS')){
        window.open('UBC\\pesos_english_ubc.html', '_blank')
    }else{
        window.open('UBC\\pesos_portuguese_ubc.html', '_blank')
    }
}

function Eventos()
{
    //POSICIONA O BALÃO DE AJUDA NA POSIÇÃO DO CURSOR
    var balao = document.getElementById('balao') 
    document.addEventListener('mousemove', function(event) //OBS: o off-set do balão é configurado na função Balao_entra() em design.js
    {
        balao.style.top = event.clientY + 'px'
        balao.style.left = event.clientX + 'px'
    })

    //BOTAO RMR_Q_GSI
    const checkbox = document.querySelectorAll('.checkbox_rmr_q_gsi')
    checkbox.forEach(element => {
        element.addEventListener('change', ()=>{Checkbox(element.id)})
    });

    const botao_rmr_q_gsi = document.getElementById('checkbox_rmr') 
    botao_rmr_q_gsi.checked = true //A página inicia com a opção colocada no ID acima
    Checkbox(botao_rmr_q_gsi.id) // Recebe a checkbox marcada no loading

    //BOTÃO SWITCH LANGUAGE
    const switch_language = document.querySelector('#checkbox_switch')
    switch_language.checked = false  //false → A página inicia em português
    Switch_language()
    switch_language.addEventListener('change', Switch_language)

    const switch_label = document.querySelector('.switch_label') //mouseover no label, não na checkbox invisível
    switch_label.addEventListener('mouseover', () =>{Balao_entra('switch_language')})
    switch_label.addEventListener('mouseleave', Balao_sai)

    //BOTÃO CALCULADORA RMR
    const botao_calculo_rmr = document.querySelectorAll('.botao_calculadora_rmr')
    botao_calculo_rmr.forEach(elemento => {
        elemento.addEventListener('mouseover', () =>{Balao_entra('botao_calculadora_rmr')})
        elemento.addEventListener('mouseleave', Balao_sai)
        elemento.addEventListener('click', () =>{Open_pop_up_rmr(elemento.id)})
    })

    //BOTÃO CALCULADORA GSI
    const botao_calculo_gsi = document.querySelectorAll('.botao_calculadora_gsi')
    botao_calculo_gsi.forEach(elemento => {
        elemento.addEventListener('mouseover', () =>{Balao_entra('botao_calculadora_gsi')})
        elemento.addEventListener('mouseleave', Balao_sai)
        elemento.addEventListener('click', () =>{Open_pop_up_gsi(elemento.id)})
    })

    //BOTÃO MOSTRA PLANILHA COM OS PESOS
    const botao_pesos = document.querySelector('#botao_pesos')
    botao_pesos.addEventListener('mouseover', () =>{Balao_entra('botao_pesos')})
    botao_pesos.addEventListener('mouseleave', Balao_sai)

    //BOTÃO IMPRIMIER RELATÓRIO
    const botao_imprimir = document.querySelector('#botao_imprimir')
    botao_imprimir.addEventListener('mouseover', () =>{Balao_entra('botao_imprimir')})
    botao_imprimir.addEventListener('mouseleave', Balao_sai)


    //MENU SUSPENSO DA GEOMETRIA DO DEPÓSITO
    const menu_suspenso_geometria = document.querySelectorAll('.menu_geometria')

    menu_suspenso_geometria[0].addEventListener('mouseover', () =>{Balao_entra('forma_geral')}) 
    menu_suspenso_geometria[1].addEventListener('mouseover', () =>{Balao_entra('mergulho')})     
    menu_suspenso_geometria[2].addEventListener('mouseover', () =>{Balao_entra('espessura')})
    menu_suspenso_geometria[3].addEventListener('mouseover', () =>{Balao_entra('distribuicao')})
    menu_suspenso_geometria[4].addEventListener('mouseover', () =>{Balao_entra('profundidade')})

    menu_suspenso_geometria.forEach(elemento => {
        elemento.addEventListener('change', Calculo)
        elemento.addEventListener('mouseleave', Balao_sai)
        elemento.addEventListener('change', Mudar_imagem)
    })
    
    //INPUT DENSIDADE PROFUNDIDADE UCS 
    const inputs_rss = document.querySelectorAll('.input_rss')
    inputs_rss.forEach(elemento => {
        elemento.addEventListener('blur',  () =>{Formatar_entry(elemento.id)})
        elemento.addEventListener('input', Calculo)
        elemento.addEventListener('input', Mudar_imagem)
    })

    //SPAN COM OS RESULTADOS DO RSS
    const resultado_rss = document.querySelectorAll('.resultado_rss')
    resultado_rss.forEach(elemento => {
        elemento.addEventListener('mouseover', () =>{Balao_entra('rss')})
        elemento.addEventListener('mouseleave', Balao_sai)
    })

    //INPUT DOS VALORES DO GSI
    const input_gsi = document.querySelectorAll('.input_gsi')
    input_gsi.forEach(elemento => {
        elemento.addEventListener('blur',  () =>{Formatar_entry(elemento.id)})
        elemento.addEventListener('mouseover', () =>{Balao_entra('gsi')})
        elemento.addEventListener('mouseleave', Balao_sai)
        elemento.addEventListener('input', Calculo)
        elemento.addEventListener('change', Calculo)
        elemento.addEventListener('change', Mudar_imagem)
        elemento.addEventListener('input', Mudar_imagem)
    })

    //INPUT DOS VALORES DO Q-SYSTEM
    const input_q = document.querySelectorAll('.input_q')
    input_q.forEach(elemento => {
        elemento.addEventListener('blur',  () =>{Formatar_entry(elemento.id)})
        elemento.addEventListener('mouseover', () =>{Balao_entra('q')})
        elemento.addEventListener('mouseleave', Balao_sai)
        elemento.addEventListener('input', Calculo)
        elemento.addEventListener('input', Mudar_imagem)
    })

    //MENU SUSPENSO DO RMR
    const menu_suspenso_rmr = document.querySelectorAll('.menu_rmr')
    menu_suspenso_rmr.forEach(elemento => {
        elemento.addEventListener('change', Calculo)
        elemento.addEventListener('mouseover', () =>{Balao_entra('rmr')})
        elemento.addEventListener('mouseleave', Balao_sai)
        elemento.addEventListener('change', Mudar_imagem)
    })

}


