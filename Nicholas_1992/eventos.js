function Open_pop_up_pesos() //Mostra a planilha com os pesos do método UBC
{
    const titulo = document.getElementById('titulo_section_1').innerText
    if(titulo.includes('CHARACTERISTICS')){
        window.open('Nicholas_1992\\pesos_english_nicholas_92.html', '_blank')
    }else{
        window.open('Nicholas_1992\\pesos_portuguese_nicholas_92.html', '_blank')
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


    //BOTÃO SWITCH LANGUAGE
    const switch_language = document.querySelector('#checkbox_switch')
    switch_language.checked = false  //false → A página inicia em português
    Switch_language()
    switch_language.addEventListener('change', Switch_language)

    const switch_label = document.querySelector('.switch_label') //mouseover no label, não na checkbox invisível
    switch_label.addEventListener('mouseover', () =>{Balao_entra('switch_language')})
    switch_label.addEventListener('mouseleave', Balao_sai)


    //BOTÃO MOSTRA PLANILHA COM OS PESOS
    const botao_pesos = document.querySelector('#botao_pesos')
    botao_pesos.addEventListener('click', Open_pop_up_pesos)
    botao_pesos.addEventListener('mouseover', () =>{Balao_entra('botao_pesos')})
    botao_pesos.addEventListener('mouseleave', Balao_sai)

    //BOTÃO IMPRIMIER RELATÓRIO
    const botao_imprimir = document.querySelector('#botao_imprimir')
    botao_imprimir.addEventListener('click', Imprimir)
    botao_imprimir.addEventListener('mouseover', () =>{Balao_entra('botao_imprimir')})
    botao_imprimir.addEventListener('mouseleave', Balao_sai)

    //MENU SUSPENSO DA GEOMETRIA DO DEPÓSITO
    const menu_suspenso_geometria = document.querySelectorAll('.menu_geometria')

    menu_suspenso_geometria[0].addEventListener('mouseover', () =>{Balao_entra('forma_geral')}) 
    menu_suspenso_geometria[1].addEventListener('mouseover', () =>{Balao_entra('mergulho')})     
    menu_suspenso_geometria[2].addEventListener('mouseover', () =>{Balao_entra('espessura')})
    menu_suspenso_geometria[3].addEventListener('mouseover', () =>{Balao_entra('distribuicao')})

    menu_suspenso_geometria.forEach(elemento => {
        elemento.addEventListener('change', Calculo)
        elemento.addEventListener('mouseleave', Balao_sai)
        elemento.addEventListener('change', Mudar_imagem)
    })
    //MENU SUSPENSO FRACTURE SPACING
    const menu_suspenso_fracture_spacing = document.querySelectorAll('.menu_fracture_spacing')
    menu_suspenso_fracture_spacing.forEach(elemento => {
        elemento.addEventListener('change', Calculo)
        elemento.addEventListener('mouseover',() => {Balao_entra('fracture_spacing')})
        elemento.addEventListener('mouseleave', Balao_sai)
    })
    //MENU SUSPENSO FRACTURE STRENGHT
    const menu_suspenso_fracture_strenght = document.querySelectorAll('.menu_fracture_strenght')
    menu_suspenso_fracture_strenght.forEach(elemento => {
        elemento.addEventListener('change', Calculo)
        elemento.addEventListener('mouseover',() => {Balao_entra('frature_strenght')})
        elemento.addEventListener('mouseleave', Balao_sai)
    })

    //MENU SUSPENSO PESOS 
    const menu_suspenso_pesos = document.querySelector('#menu_pesos')
    menu_suspenso_pesos.addEventListener('change', Calculo)
    menu_suspenso_pesos.addEventListener('change', Mostrar_input_pesos)
    menu_suspenso_pesos.addEventListener('mouseleave', Balao_sai)

    //INPUT PESOS 
    const input_pesos = document.querySelectorAll('.input_pesos')
    input_pesos.forEach(elemento => {
        elemento.addEventListener('input', Calculo)
        elemento.addEventListener('blur', () =>{Formatar_entry(elemento.id)})

    })


    //INPUT DENSIDADE PROFUNDIDADE UCS 
    const inputs_rss = document.querySelectorAll('.input_rss')
    inputs_rss.forEach(elemento => {
        elemento.addEventListener('blur',  () =>{Formatar_entry(elemento.id)})
        elemento.addEventListener('input', Calculo)
    })

    //SPAN COM OS RESULTADOS DO RSS
    const resultado_rss = document.querySelectorAll('.resultado_rss')
    resultado_rss.forEach(elemento => {
        elemento.addEventListener('mouseover', () =>{Balao_entra('rss')})
        elemento.addEventListener('mouseleave', Balao_sai)
    })

}


