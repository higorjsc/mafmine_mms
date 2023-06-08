function Retornar_valor() {

    const titulo = document.getElementById('titulo').innerText
    let id = ''

    if(titulo.includes('Corpo')||titulo.includes('Orebody')){
        id='rmr_ob'
    }else if(titulo.includes('Hanging')){
        id='rmr_hw'
    }else if(titulo.includes('Footwall')){
        id='rmr_fw'
    }

    const classe_rmr = document.getElementById('classe_rmr').innerText //Obtém o valor do elemento na janela popup
    const janela_principal = window.opener// Acessa a janela principal através de window.opener
    const seletor = janela_principal.document.getElementById(id)

    if(((classe_rmr.includes('Pobre') && classe_rmr.includes('Muito')) || (classe_rmr.includes('Very') && classe_rmr.includes('Poor')))){ //Se incluir 'Muito' e incluir 'Pobre'
        seletor.selectedIndex = 0
    }else if(((classe_rmr.includes('Pobre') && !classe_rmr.includes('Muito')) || (classe_rmr.includes('Poor') && !classe_rmr.includes('Very')))){//Se incluir 'Pobre' e não incluir 'Muito'
        seletor.selectedIndex = 1
    }else if(classe_rmr.includes('Razoável')|| classe_rmr.includes('Fair')){
        seletor.selectedIndex = 2
    }else if(((classe_rmr.includes('Boa') && !classe_rmr.includes('Muito')) || (classe_rmr.includes('Good') && !classe_rmr.includes('Very')))){//Se incluir 'Boa' e não incluir 'Muito'
        seletor.selectedIndex = 3
    }else if(((classe_rmr.includes('Boa') && classe_rmr.includes('Muito')) || (classe_rmr.includes('Good') && classe_rmr.includes('Very')))){//Se incluir 'Muito' e incluir 'Boa'
        seletor.selectedIndex = 4
    }

   window.close()  // Fechar a janela popup
}

function Pesos(valor){

    const pesos = {
      
        'pesos_point_load':         {'>10': 15, '4-10': 12, '2-4': 7, '1-2': 4, '0' :0},  
        'pesos_ucs':                {'>250': 15, '100-250': 12, '50-100': 7, '25-50': 4, '5-25': 2, '1-5': 1, '<1': 0, '0' :0}, 

        'pesos_rqd':                {'90-100': 20, '75-90': 17, '50-75': 13, '25-50': 8, '<25': 3 },
        'pesos_spacing':            {'>2': 20, '0.5-2': 15, '200-500': 10, '60-200': 8, '<60': 5 },
        'pesos_separacao':          {'none': 6, '<0.1': 5, '0.1-1.0': 4, '1-5': 1, '>5': 0 },
        'pesos_comprimento':        {'<1': 6, '1-3': 4, '3-10': 2, '10-20': 1, '>20': 0 },
        'pesos_rugosidade':         {'muito_rugosa': 6, 'rugosa': 5, 'levemente_rugosa': 3, 'lisa': 1, 'escorregadia': 0 },
        'pesos_preenchimento':      {'none': 6, 'duro:<5': 4, 'duro:>5': 2, 'macio:<5': 2, 'macio:>5': 0 },
        'pesos_alteracao':          {'none': 6, 'baixo': 5, 'moderado': 3, 'alto': 1, 'muito_alto': 0 },
    
        'pesos_inflow':             {'0':16, '<10':10, '10-25': 7, '25-125':4, '>125':0, '0' :0},
        'pesos_ratio':              {'0':16, '<0.1':10, '0.1-0.2': 7, '0.2-0.5':4, '>0.5':0, '0' :0 },
        'pesos_general':            {'seco':16, 'umido':10, 'molhado': 7, 'gotejando':4, 'fluindo':0, '0' :0},
 
        'pesos_strike_dip' :        {
                                    'paralelo_20-45': 0, 'paralelo_45-90': -2, 
                                    'perpendicular_20-45': -5, 'perpendicular_45-90': -12, 
                                    'contrario_20-45': -10, 'contrario_45-90': -5, 
                                    'irrelevante_0-20': -5
                                     }
    }
    
    let rmr = (0
        + Number(pesos['pesos_point_load'][valor['point_load']])
        + Number(pesos['pesos_ucs'][valor['ucs']])
        + Number(pesos['pesos_rqd'][valor['rqd']])
        + Number(pesos['pesos_spacing'][valor['spacing']])
        + Number(pesos['pesos_comprimento'][valor['comprimento']])
        + Number(pesos['pesos_rugosidade'][valor['rugosidade']])
        + Number(pesos['pesos_preenchimento'][valor['preenchimento']])
        + Number(pesos['pesos_alteracao'][valor['alteracao']])
        + Number(pesos['pesos_inflow'][valor['inflow']])
        + Number(pesos['pesos_ratio'][valor['ratio']])
        + Number(pesos['pesos_general'][valor['general']])
        + Number(pesos['pesos_strike_dip'][valor['orientacao']])
        )

        return rmr
}

function Escrever_resultado(rmr)
{
    const rmr_num = document.getElementById('resultado_rmr')
    rmr_num.innerText = rmr.toFixed(2) //Mostra o valor do RMR com duas casas decimais no pop up

    const titulo = document.getElementById('titulo').innerText //Obtém o idioma da janela através do titulo
    const rmr_classe = document.getElementById('classe_rmr')

    if(!titulo.includes('calculation'))
    {
        if(rmr <=20){
            rmr_classe.innerText = 'Muito Pobre'
        }else if(rmr > 20 && rmr <= 40){
            rmr_classe.innerText = 'Pobre'
        }else if(rmr > 40 && rmr <= 60){
            rmr_classe.innerText = 'Razoável'
        }else if(rmr > 60 && rmr <= 80){
            rmr_classe.innerText = 'Boa'
        }else if(rmr > 80){
            rmr_classe.innerText = 'Muito Boa'
        } 
        
    }else
    {
        if(rmr <=20){
            rmr_classe.innerText = 'Very Poor'
        }else if(rmr > 20 && rmr <= 40){
            rmr_classe.innerText = 'Poor'
        }else if(rmr > 40 && rmr <= 60){
            rmr_classe.innerText = 'Fair'
        }else if(rmr > 60 && rmr <= 80){
            rmr_classe.innerText = 'Good'
        }else if(rmr > 80){
            rmr_classe.innerText = 'Very Good'
        }  
    }    

}

function Calculo_pop_up()
{
    let select_strenght = document.getElementById('select_strenght').value
    let point_load =  document.getElementById('point_load').value
    let ucs = document.getElementById('ucs').value
    
    if(select_strenght == 'ucs'){
        point_load = '0'
    }else{
        ucs = '0'
    }   
   
    let select_gw = document.getElementById('select_gw').value
    let inflow =  document.getElementById('inflow').value
    let ratio = document.getElementById('ratio').value
    let general = document.getElementById('general').value

    switch(select_gw){
        case 'inflow':
            ratio = '0'
            general = '0'
            break
        case 'ratio': 
            inflow = '0'
            general = '0'
            break
        case 'general': 
            ratio = '0'
            inflow = '0'
            break
    }

    const strike =  document.getElementById('select_strike').value
    let dip
    if(strike != 'irrelevante'){
        dip = document.getElementById('dip_1').value
    }else{
        dip = document.getElementById('dip_2').value
    }
    
    let valor ={
        'point_load': point_load,
        'ucs': ucs,
        'rqd': document.getElementById('rqd').value,
        'spacing': document.getElementById('spacing').value,
        'comprimento': document.getElementById('comprimento').value,
        'separacao': document.getElementById('separacao').value,
        'rugosidade': document.getElementById('rugosidade').value,
        'preenchimento': document.getElementById('preenchimento').value,
        'alteracao':  document.getElementById('alteracao').value,
        'inflow': inflow,
        'ratio': ratio,
        'general':  general,
        'orientacao': (strike+ '_' + dip)
    }

    let rmr = Pesos(valor)
    Escrever_resultado(rmr)
      
}

