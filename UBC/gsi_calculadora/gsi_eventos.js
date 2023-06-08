function Centralizar_janela() {
    // Obtém as dimensões da tela
    const largura_janela = window.screen.width
    const altura_janela = window.screen.height
    
    // Define as dimensões da janela do pop-up
    const largura_pop_up = 770
    const altura_pop_up = 730
    
    // Calcula a posição para centralizar a janela
    const esquerda = (largura_janela - largura_pop_up) / 2
    const topo = (altura_janela - altura_pop_up) /2 
    
    // Define as coordenadas para a janela do pop-up
    window.moveTo(esquerda, topo)
}

function Eventos_pop_gsi(){

    
    var balao = document.getElementById('balao') 
    document.addEventListener('mousemove', function(event) //OBS: o off-set do balão é configurado na função Balao_entra() em design.js
    {
        balao.style.top = event.clientY + 'px'
        balao.style.left = event.clientX + 'px'
    })

    const pad = document.getElementById('pad');
    pad.addEventListener('mousemove', function(event) {
        let mouseX = pad.clientWidth - (event.clientX - pad.offsetLeft);
        let mouseY = pad.clientHeight - (event.clientY - pad.offsetTop);
        Balao_gsi('pad', mouseX, mouseY)
    });
    pad.addEventListener('mouseout', Balao_sai)

    pad.addEventListener('click', function(event) {
        let X = event.clientX - pad.offsetLeft
        let Y = event.clientY - pad.offsetTop
        Calculo_gsi(X, Y)
      });


    const select_metodo_calculo = document.getElementById('select_metodo_calculo')
    select_metodo_calculo.addEventListener('change', Mostrar_inputs)
    select_metodo_calculo.addEventListener('change', Calculo_gsi)
        
    const select_jc = document.getElementById('select_jc')
    select_jc.addEventListener('change', Mostrar_inputs)
    select_jc.addEventListener('change', Calculo_gsi)

    const select = document.querySelectorAll('select')
    document.addEventListener('change', function(event)
    {
        select.forEach(element => {
            element.blur()
        });
    })


    const input_jc = document.getElementById('input_jc')
    input_jc.addEventListener('input', Calculo_gsi)
    const input_rqd = document.getElementById('input_rqd')
    input_rqd.addEventListener('input', Calculo_gsi)
    
    const select_calculo_jc = document.querySelectorAll('.select_calculo_jc')
    select_calculo_jc.forEach(element => {
        element.addEventListener('change', Calculo_gsi)
    });

    const botao = document.getElementById('botao_input')
    botao.addEventListener('click', Retornar_valor)

}