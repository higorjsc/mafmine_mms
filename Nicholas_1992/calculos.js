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
            if (resultado_numero < 8) {
                resultado_texto.innerText = `Fraca (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero >= 8 && resultado_numero <= 15) {
                resultado_texto.innerText = `Moderada (${resultado_numero.toFixed(1)})`
            } else {
                resultado_texto.innerText = `Forte (${resultado_numero.toFixed(1)})`
            } 
        }
        else  //Caso o titulo da seção 1 esteja em ingles
        { 
            if (resultado_numero < 8) {
                resultado_texto.innerText = `Weak (${resultado_numero.toFixed(1)})`
            } else if (resultado_numero >= 8 && resultado_numero <= 15) {
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
            if (elemento.includes("Fraca")){
                resultado = 'fraca'
            }else if (elemento.includes("Moderada")){
                resultado = 'moderada'
            }else if (elemento.includes("Forte")){
                resultado = 'forte'
            }else{
                resultado = 'moderada'
            }
        }
        else
        {
            if (elemento.includes("Weak")){
                resultado = 'fraca'
            }else if (elemento.includes("Medium")){
                resultado = 'moderada'
            }else if (elemento.includes("Strong")){
                resultado = 'forte'
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
            texto.innerText += `${value.toFixed(2)}` + '   ' + '-' + '  ' + key_formatada + '\n'
            //texto.innerHTML += '<div>' + '&emsp' + value + '&emsp&nbsp&nbsp' + '-' + '&emsp&emsp' + key_formatada + '</div>'
        }else{
            texto.innerText += `${value.toFixed(2)}` + '  ' + '-' + '  ' + key_formatada + '\n'
            //texto.innerHTML += '<div>' + '&emsp' + value + '&emsp&nbsp&nbsp&nbsp' + '-' + '&emsp&emsp' + key_formatada + '</div>'
        }

    }

}
function Obter_pesos(){
    let select = document.getElementById('menu_pesos').value

    function Input_peso(id){
        let peso = document.getElementById(id).value
        peso = peso === ''? 1.00 : peso
        return peso
    }  

    let pesos= {
        'geometria': 1,
        'ob': 1,
        'hw': 1,
        'fw': 1
    }
    if(select == '1'){
        pesos['geometria'] = 1.00
        pesos['ob'] = 1.33
        pesos['hw'] = 1.33
        pesos['fw'] = 1.33
    }else if(select == '2'){
        pesos['geometria'] = 1.00
        pesos['ob'] = 0.75
        pesos['hw'] = 0.60
        pesos['fw'] = 0.38
    }else if(select == '3'){
        pesos['geometria'] = 1.00
        pesos['ob'] = 1.00
        pesos['hw'] = 0.80
        pesos['fw'] = 0.50
    }else{
        pesos['geometria'] = Input_peso('input_peso_geometria')
        pesos['ob'] = Input_peso('input_peso_ob')
        pesos['hw'] = Input_peso('input_peso_hw')
        pesos['fw'] = Input_peso('input_peso_fw')
    }

    return pesos
}

function Calculo() //Função chamada a cada entrada do usuario. Conecta todos os calculos com a impressão dos resultados
{
    let geometria = document.querySelectorAll('.menu_geometria')//Obtém os selects com as propriedades da geometria
    let resultado_rss = Calculo_rss()
    let fracture_spacing = document.querySelectorAll('.menu_fracture_spacing')
    let fracture_strenght = document.querySelectorAll('.menu_fracture_strenght')
    let pesos = Obter_pesos()
    
    let preferencias = Preferencias(geometria, resultado_rss, fracture_spacing, fracture_strenght, pesos) //Obtém o dicionário com as preferências

    const matriz = Object.entries(preferencias)  // Converte o dicionário em uma matriz
    matriz.sort((a, b) => b[1] - a[1]) // Classifica a matriz  em ordem decrescente
    preferencias = new Map(matriz) // Converter a matriz classificada 
    
    Escrever_preferencias(preferencias)
}


