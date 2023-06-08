
function Display_strenght()//Oculta um dos <selector>'s de strenght com base no input
{
    const strenght =  document.getElementById('select_strenght')
    const point_load =  document.getElementById('point_load')
    const ucs = document.getElementById('ucs')
    
    if(strenght.value == 'point_load'){
        point_load.style.display ='block'
        ucs.style.display ='none'
    }else{
        point_load.style.display ='none'
        ucs.style.display ='block'
    }
}

function Display_grownd_water() //Oculta dois dos <selector>'s de grownd water com base no input
{
    const gw =  document.getElementById('select_gw').value
    const inflow =  document.getElementById('inflow')
    const ratio = document.getElementById('ratio')
    const general = document.getElementById('general')
    
    if(gw == 'inflow'){
        inflow.style.display ='block'
        ratio.style.display ='none'
        general.style.display ='none'
    }else if(gw == 'ratio'){
        inflow.style.display ='none'
        ratio.style.display ='block'
        general.style.display ='none'
    }else if(gw == 'general'){
        inflow.style.display ='none'
        ratio.style.display ='none'
        general.style.display ='block'
    }
}

function Display_dip() //Oculta um dos <selector>'s de dip com base no input do strike
{
    const strike =  document.getElementById('select_strike').value
    const dip_1 = document.getElementById('dip_1')
    const dip_2 = document.getElementById('dip_2')
    if(strike != 'irrelevante'){
        dip_1.style.display = 'block'
        dip_2.style.display = 'none'
    }else{
        dip_1.style.display = 'none'
        dip_2.style.display = 'block'
    }
}

function Inserir_titulo() //Obtém o parâmetro incluso na URL para informar o idioma e objetivo do cálculo ao pop up
{
    let url = window.location.href;

    if (url.includes('calculadora_rmr_ob')) {
        url = url.includes('pt') ? 'Calculo RMR: Corpo de Minério' : 'RMR calculation: Orebody'
    } else if (url.includes('calculadora_rmr_hw')) {
        url = url.includes('pt') ? 'Calculo RMR: Hanging Wall' : 'RMR calculation: Hanging Wall'
    } else if (url.includes('calculadora_rmr_fw')) {
        url = url.includes('pt') ? 'Calculo RMR: Footwall' : 'RMR calculation: Footwall'
    }
  
    let titulo = document.getElementById('titulo')
    titulo.innerText += url
  }

