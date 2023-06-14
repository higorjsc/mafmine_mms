function Centralizar_janela() {
    // Obtém as dimensões da tela
    const largura_janela = window.screen.width
    const altura_janela = window.screen.height

    // Define as dimensões da janela do pop-up
    const largura_pop_up = 600
    const altura_pop_up = 650

    // Calcula a posição para centralizar a janela
    const esquerda = (largura_janela - largura_pop_up) / 2
    const topo = (altura_janela - altura_pop_up) / 2 - 50

    // Define as coordenadas para a janela do pop-up
    window.moveTo(esquerda, topo)
}

function Eventos_pop_rmr() {

    let select = document.querySelectorAll("select")
    select.forEach(elemento => {
        elemento.addEventListener("change", Calculo_pop_up)
    })

    const select_strenght = document.getElementById("select_strenght")
    select_strenght.addEventListener("change", Display_strenght)

    const select_gw = document.getElementById("select_gw")
    select_gw.addEventListener("change", Display_grownd_water)

    const select_dip = document.getElementById("select_strike")
    select_dip.addEventListener("change", Display_dip)

    const botao = document.getElementById("botao_input")
    botao.addEventListener("click", Retornar_valor)

}
