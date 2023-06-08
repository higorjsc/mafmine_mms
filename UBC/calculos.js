function Calculo_rss()
{
    function Get_value(id, defaultValue) 
    {
        const value = document.getElementById(id).value
        return value ? Number(value.match(/\d+/)[0]) : defaultValue
    }
    
    function Atribuir_resultado(entry, ucs, densidade, profundidade)
    {
        let resultado_numero = (ucs * 1e6) / (densidade * profundidade * 9.81)
        let resultado_texto = document.getElementById(entry)

        let titulo = document.getElementById('titulo_section_1').innerText

        if(!titulo.includes('CHARACTERISTICS')) //Caso o titulo da seção 1 esteja em pt-br
        {
            if (resultado_numero < 5){
                resultado_texto.innerText = `Muito Fraca (${resultado_numero.toFixed(1)})`    
            } else if (resultado_numero < 10) {
                resultado_texto.innerText = `Frágil (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero < 15) {
                resultado_texto.innerText = `Moderada (${resultado_numero.toFixed(1)})`
            } else {
                resultado_texto.innerText = `Resistente (${resultado_numero.toFixed(1)})`
            } 
        }
        else  //Caso o titulo da seção 1 esteja em ingles
        { 
            if (resultado_numero < 5){
                resultado_texto.innerText = `Very Weak (${resultado_numero.toFixed(1)})`    
            } else if (resultado_numero < 10) {
                resultado_texto.innerText = `Weak (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero < 15) {
                resultado_texto.innerText = `Medium (${resultado_numero.toFixed(1)})`
            } else {
                resultado_texto.innerText = `Strong (${resultado_numero.toFixed(1)})`
            }
        }
    }

    function Resultado_rss(entry)
    {
        let elemento = document.getElementById(entry).innerText
        let titulo = document.getElementById('titulo_section_1').innerText
        let resultado 

        if(!titulo.includes('CHARACTERISTICS'))
        {
            if(elemento.includes("Muito Fraca")){
                resultado = 'muito_fraco'
            }else if (elemento.includes("Frágil")){
                resultado = 'fragil'
            }else if (elemento.includes("Moderada")){
                resultado = 'moderada'
            }else if (elemento.includes("Resistente")){
                resultado = 'resistente'
            }else{
                resultado = 'moderada'
            }
        }
        else
        {
            if(elemento.includes("Very")){
                resultado = 'muito_fraco'
            }else if (elemento.includes("Weak")){
                resultado = 'fragil'
            }else if (elemento.includes("Medium")){
                resultado = 'moderada'
            }else if (elemento.includes("Strong")){
                resultado = 'resistente'
            }else{
                resultado = 'moderada'
            }
        }
        return resultado
    }

    const densidade_ob = Get_value('densidade_ob', 2600)
    const densidade_hw = Get_value('densidade_hw', 2800)
    const densidade_fw = Get_value('densidade_fw', 2650)
    
    const profundidade_ob = Get_value('profundidade_ob', 600)
    const profundidade_hw = Get_value('profundidade_hw', 400)
    const profundidade_fw = Get_value('profundidade_fw', 800)
    
    const ucs_ob = Get_value('ucs_ob', 185)
    const ucs_hw = Get_value('ucs_hw', 220)
    const ucs_fw = Get_value('ucs_fw', 200)
    
    Atribuir_resultado('resultado_rss_ob', ucs_ob, densidade_ob, profundidade_ob)
    Atribuir_resultado('resultado_rss_hw', ucs_hw, densidade_hw, profundidade_hw)
    Atribuir_resultado('resultado_rss_fw', ucs_fw, densidade_fw, profundidade_fw)

    let resultado_rss = {
        'rss_ob': Resultado_rss('resultado_rss_ob'),
        'rss_hw': Resultado_rss('resultado_rss_hw'),
        'rss_fw': Resultado_rss('resultado_rss_fw')
    }

    return resultado_rss //Retorna o valor textual do RSS para a função Calculo
}

function Calculo_rmr()
{

    function Calculo_gsi(entry)//Converte um valor Q-System para RMR
    {
        let gsi = Number(document.getElementById(entry).value) 
        gsi = gsi === 0 ? 10.00 : gsi //atribui 10 como valor padrão caso nenhum seja informado
        let rmr_num = (gsi + 11.63)/1.13
        let rmr
        if(rmr_num <=20){
            rmr = 'muito_pobre'
        }else if(rmr_num > 20 && rmr_num <= 40){
            rmr = 'pobre'
        }else if(rmr_num > 40 && rmr_num <= 60){
            rmr = 'razoavel'
        }else if(rmr_num > 60 && rmr_num <= 80){
            rmr = 'boa'
        }else if(rmr_num > 80){
            rmr = 'muito_boa'
        }   
        return rmr
    }

    function Calculo_q(entry)//Converte um valor Q-System para RMR
    {
        let q = Number(document.getElementById(entry).value) 
        q = q === 0 ? 5.00 : q    //atribui 5 como valor padrão caso nenhum seja informado
        let rmr_num = ((9 * Math.log(q)) + 44)
        let rmr
        if(rmr_num <=20){
            rmr = 'muito_pobre'
        }else if(rmr_num > 20 && rmr_num <= 40){
            rmr = 'pobre'
        }else if(rmr_num > 40 && rmr_num <= 60){
            rmr = 'razoavel'
        }else if(rmr_num > 60 && rmr_num <= 80){
            rmr = 'boa'
        }else if(rmr_num > 80){
            rmr = 'muito_boa'
        }   
        return rmr
    }

    let resultado_rmr = {}
    const checkbox_gsi = document.getElementById('checkbox_gsi')
    const checkbox_rmr = document.getElementById('checkbox_rmr')
    const checkbox_q = document.getElementById('checkbox_q')
    
    //Condição para verificar qual botão foi acionado, Q-system, GSI ou RMR.
    if(checkbox_gsi.checked){  
        resultado_rmr = {
            'rmr_ob': Calculo_gsi('gsi_ob'), //Chama a função para converter o GSI do Orebody para RMR
            'rmr_hw': Calculo_gsi('gsi_hw'), 
            'rmr_fw': Calculo_gsi('gsi_fw')  
        }
    }else if (checkbox_rmr.checked){
        resultado_rmr = {
            'rmr_ob': document.getElementById('rmr_ob').value, //Atribui o valor de RMR selecionado pelo usuário
            'rmr_hw': document.getElementById('rmr_hw').value,
            'rmr_fw': document.getElementById('rmr_fw').value
        }
    }else if(checkbox_q.checked){
        resultado_rmr = {
            'rmr_ob': Calculo_q('q_ob'), //Chama a função para converter o GSI do Orebody para RMR
            'rmr_hw': Calculo_q('q_hw'), 
            'rmr_fw': Calculo_q('q_fw') 
        }
    }
    return resultado_rmr //Retorna o valor textual do RMR para a função Calculo
}

function Escrever_preferencias(preferencias)
{
    let texto = document.getElementById('div_section_3') //obtém a div da seção 3
    texto.innerText = '' //limpa todo o texto da div da seção 3

    function Formatar(key)//Formata as chaves do dicionário com os resultados.   
    {
        let formatada = ''
        key = key.replace(/_/g, ' ') //Substitui '_' por ' '
        let palavras = key.split(' ')
        for(let i in palavras)
        {
            formatada += palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1) + ' ' //Coloca a primeira letra da palavra em UpperCase
        }
        return formatada //Retorna a chave do dicionário para o Loop de impressão
        
    }
    
    let key_formatada
    for (const [key, value] of preferencias) //Imprime o valor do dicionário resultado seguido por sua chave. Cada chave é um metodo de lavra
    {
        key_formatada = Formatar(key)
        
        if ( Number(value) < 10 ) //Condição para manter a tabulação dos ifens, caso o numeral tenha menos de dois caracteres
        { 
            texto.innerText += value + '   ' + '-' + '  ' + key_formatada + '\n'
            //texto.innerHTML += '<div>' + '&emsp' + value + '&emsp&nbsp&nbsp' + '-' + '&emsp&emsp' + key_formatada + '</div>'
        }else{
            texto.innerText += value + '  ' + '-' + '  ' + key_formatada + '\n'
            //texto.innerHTML += '<div>' + '&emsp' + value + '&emsp&nbsp&nbsp&nbsp' + '-' + '&emsp&emsp' + key_formatada + '</div>'
        }

    }

}

function Calculo() //Função chamada a cada entrada do usuario. Conecta todos os calculos com a impressão dos resultados
{
    let geometria = document.querySelectorAll('.menu_geometria')//Obtém os selects com as propriedades da geometria
    let resultado_rmr = Calculo_rmr()
    let resultado_rss = Calculo_rss()
    
    let preferencias = Preferencias(geometria, resultado_rss, resultado_rmr) //Obtém o dicionário com as preferências

    const matriz = Object.entries(preferencias)  // Converte o dicionário em uma matriz
    matriz.sort((a, b) => b[1] - a[1]) // Classifica a matriz  em ordem decrescente
    preferencias = new Map(matriz) // Converter a matriz classificada 
    
    Escrever_preferencias(preferencias)
}


