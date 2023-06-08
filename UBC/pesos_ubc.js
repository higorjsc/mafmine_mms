function Preferencias(geometria, resultado_rss, resultado_rmr) //Calculo o valor de cada método de lavra e retorna para Calculo em Calculos.js
{
    let pesos_forma_geral = {
        open_pit:            {massivo: 4, tabular: 2, irregular: 3},
        block_caving:        {massivo: 4, tabular: 2, irregular: 0},
        sublevel_stoping:    {massivo: 3, tabular: 4, irregular: 1},
        sublevel_caving:     {massivo: 3, tabular: 4, irregular: 1},
        longwall:            {massivo: -49, tabular: 4, irregular: -49} ,
        room_and_pillar:     {massivo: 0, tabular: 4, irregular: 2},
        shrinkage_stoping:   {massivo: 0, tabular: 4, irregular: 2},
        cut_and_fill:        {massivo: 1, tabular: 4, irregular: 4},
        top_slicing:         {massivo: 1, tabular: 2, irregular: 0},
        square_set:          {massivo: 0, tabular: 1, irregular: 4},
    } 

    let pesos_espessura = {
        open_pit:            {muito_estreito: 1, estreito: 2, intermediario: 3, espesso: 4, muito_espesso: 4},
        block_caving:        {muito_estreito: -49, estreito: -49, intermediario: 0, espesso: 3, muito_espesso: 4},
        sublevel_stoping:    {muito_estreito: -10, estreito: 1, intermediario: 3, espesso: 4, muito_espesso: 3},
        sublevel_caving:     {muito_estreito: -49, estreito: -49, intermediario: 0, espesso: 4, muito_espesso: 4},
        longwall:            {muito_estreito: 4, estreito: 3, intermediario: 0, espesso: -49, muito_espesso: -49},
        room_and_pillar:     {muito_estreito: 4, estreito: 3, intermediario: 1, espesso: -49, muito_espesso: -49},
        shrinkage_stoping:   {muito_estreito: 4, estreito: 4, intermediario: 0, espesso: -49, muito_espesso: -49},
        cut_and_fill:        {muito_estreito: 3, estreito: 4, intermediario: 4, espesso: 1, muito_espesso: 0},
        top_slicing:         {muito_estreito: 1, estreito: 1, intermediario: 0, espesso: 2, muito_espesso: 1},
        square_set:          {muito_estreito: 4, estreito: 3, intermediario: 2, espesso: 0, muito_espesso: 0},
      }
    

    let pesos_mergulho = {
        open_pit:            {plano: 3, intermediario: 3, inclinado: 1},
        block_caving:        {plano: 3, intermediario: 2, inclinado: 4},
        sublevel_stoping:    {plano: 2, intermediario: 1, inclinado: 4},
        sublevel_caving:     {plano: 1, intermediario: 1, inclinado: 4},
        longwall:            {plano: 4, intermediario: 0, inclinado: -49},
        room_and_pillar:     {plano: 4, intermediario: 0, inclinado: -49},
        shrinkage_stoping:   {plano: -49, intermediario: 0, inclinado: 4},
        cut_and_fill:        {plano: 1, intermediario: 3, inclinado: 4} ,
        top_slicing:         {plano: 4, intermediario: 2, inclinado: 0},
        square_set:          {plano: 2, intermediario: 3, inclinado: 2},
      }

    let pesos_distribuicao= {
        open_pit:            {uniforme: 3, gradacional: 3, erratico: 2},
        block_caving:        {uniforme: 3, gradacional: 2, erratico: 2},
        sublevel_stoping:    {uniforme: 4, gradacional: 4, erratico: 3},
        sublevel_caving:     {uniforme: 3, gradacional: 2, erratico: 2},
        longwall:            {uniforme: 4, gradacional: 1, erratico: 0},
        room_and_pillar:     {uniforme: 4, gradacional: 2, erratico: 0},
        shrinkage_stoping:   {uniforme: 3, gradacional: 2, erratico: 2},
        cut_and_fill:        {uniforme: 2, gradacional: 3, erratico: 4},
        top_slicing:         {uniforme: 2, gradacional: 1, erratico: 1},
        square_set:          {uniforme: 0, gradacional: 1, erratico: 3},
      }
    
    let pesos_profundidade= {
        open_pit:            {rasa: 4, intermediaria: 0, profunda: -49},
        block_caving:        {rasa: 2, intermediaria: 3, profunda: 3},
        sublevel_stoping:    {rasa: 3, intermediaria: 4, profunda: 2},
        sublevel_caving:     {rasa: 3, intermediaria: 2, profunda: 2},
        longwall:            {rasa: 2, intermediaria: 2, profunda: 3},
        room_and_pillar:     {rasa: 3, intermediaria: 3, profunda: 2},
        shrinkage_stoping:   {rasa: 3, intermediaria: 3, profunda: 2},
        cut_and_fill:        {rasa: 2, intermediaria: 3, profunda: 4},
        top_slicing:         {rasa: 2, intermediaria: 1, profunda: 1},
        square_set:          {rasa: 1, intermediaria: 1, profunda: 2},
      }
    
    let pesos_rmr_ob = {
        open_pit:            {muito_pobre: 3, pobre: 3, razoavel: 3, boa: 3, muito_boa: 3,},
        block_caving:        {muito_pobre: 4, pobre: 3, razoavel: 2, boa: 0, muito_boa: -49,},
        sublevel_stoping:    {muito_pobre: 1, pobre: 3, razoavel: 4, boa: 4, muito_boa: 4,},
        sublevel_caving:     {muito_pobre: 3, pobre: 4, razoavel: 3, boa: 1, muito_boa: 0,},
        longwall:            {muito_pobre: 6, pobre: 6, razoavel: 4, boa: 2, muito_boa: 2,},
        room_and_pillar:     {muito_pobre: -49, pobre: 0, razoavel: 3, boa: 5, muito_boa: 6,},
        shrinkage_stoping:   {muito_pobre: 0, pobre: 1, razoavel: 3, boa: 3, muito_boa: 3,},
        cut_and_fill:        {muito_pobre: 0, pobre: 1, razoavel: 2, boa: 3, muito_boa: 3,},
        top_slicing:         {muito_pobre: 3, pobre: 2, razoavel: 1, boa: 1, muito_boa: 0,},
        square_set:          {muito_pobre: 4, pobre: 4, razoavel: 1, boa: 0, muito_boa: 0,},
      }
    
    let pesos_rmr_hw = {
        open_pit:            {muito_pobre: 2, pobre: 3, razoavel: 4, boa: 4, muito_boa: 4},
        block_caving:        {muito_pobre: 3, pobre: 3, razoavel: 3, boa: 2, muito_boa: 2},
        sublevel_stoping:    {muito_pobre: -49, pobre: 0, razoavel: 3, boa: 4, muito_boa: 4},
        sublevel_caving:     {muito_pobre: 4, pobre: 4, razoavel: 3, boa: 2, muito_boa: 2},
        longwall:            {muito_pobre: 6, pobre: 5, razoavel: 4, boa: 3, muito_boa: 3},
        room_and_pillar:     {muito_pobre: -49, pobre: 0, razoavel: 3, boa: 5, muito_boa: 6},
        shrinkage_stoping:   {muito_pobre: 0, pobre: 0, razoavel: 2, boa: 4, muito_boa: 4},
        cut_and_fill:        {muito_pobre: 3, pobre: 5, razoavel: 4, boa: 3, muito_boa: 3},
        top_slicing:         {muito_pobre: 0, pobre: 0, razoavel: 2, boa: 3, muito_boa: 3},
        square_set:          {muito_pobre: 4, pobre: 4, razoavel: 1, boa: 0, muito_boa: 0},
      }
    
    let pesos_rmr_fw = {
        open_pit:            {muito_pobre: 2, pobre: 3, razoavel: 4, boa: 4, muito_boa: 4},
        block_caving:        {muito_pobre: 3, pobre: 3, razoavel: 3, boa: 2, muito_boa: 2},
        sublevel_stoping:    {muito_pobre: 0, pobre: 0, razoavel: 2, boa: 3, muito_boa: 3},
        sublevel_caving:     {muito_pobre: 1, pobre: 2, razoavel: 3, boa: 3, muito_boa: 3},
        longwall:            {muito_pobre: 0, pobre: 0, razoavel: 0, boa: 0, muito_boa: 0},
        room_and_pillar:     {muito_pobre: 0, pobre: 0, razoavel: 0, boa: 0, muito_boa: 0},
        shrinkage_stoping:   {muito_pobre: 0, pobre: 0, razoavel: 2, boa: 3, muito_boa: 3},
        cut_and_fill:        {muito_pobre: 3, pobre: 3, razoavel: 2, boa: 2, muito_boa: 2},
        top_slicing:         {muito_pobre: 0, pobre: 0, razoavel: 1, boa: 2, muito_boa: 2},
        square_set:          {muito_pobre: 1, pobre: 1, razoavel: 0, boa: 0, muito_boa: 0},
      }
    
    let pesos_rss_ob = {
        open_pit:            {muito_fraco: 4, fragil: 3, moderada: 3, resistente: 3},
        block_caving:        {muito_fraco: 4, fragil: 2, moderada: 1, resistente: 0},
        sublevel_stoping:    {muito_fraco: 0, fragil: 2, moderada: 4, resistente: 4}, 
        sublevel_caving:     {muito_fraco: 2, fragil: 3, moderada: 3, resistente: 2},
        longwall:            {muito_fraco: 6, fragil: 5, moderada: 2, resistente: 1},
        room_and_pillar:     {muito_fraco: 0, fragil: 0, moderada: 3, resistente: 6},
        shrinkage_stoping:   {muito_fraco: 0, fragil: 1, moderada: 3, resistente: 4},
        cut_and_fill:        {muito_fraco: 0, fragil: 1, moderada: 3, resistente: 3}, 
        top_slicing:         {muito_fraco: 3, fragil: 2, moderada: 1, resistente: 0},
        square_set:          {muito_fraco: 4, fragil: 3, moderada: 1, resistente: 0},
    } 
      
    let pesos_rss_hw = {
        open_pit:            {muito_fraco: 3, fragil: 3, moderada: 4, resistente: 4},
        block_caving:        {muito_fraco: 4, fragil: 3, moderada: 2, resistente: 0},
        sublevel_stoping:    {muito_fraco: 0, fragil: 1, moderada: 4, resistente: 5}, 
        sublevel_caving:     {muito_fraco: 4, fragil: 3, moderada: 2, resistente: 1},
        longwall:            {muito_fraco: 6, fragil: 5, moderada: 2, resistente: 2},
        room_and_pillar:     {muito_fraco: 0, fragil: 0, moderada: 2, resistente: 6},
        shrinkage_stoping:   {muito_fraco: 0, fragil: 1, moderada: 3, resistente: 4},
        cut_and_fill:        {muito_fraco: 3, fragil: 5, moderada: 4, resistente: 2}, 
        top_slicing:         {muito_fraco: 3, fragil: 2, moderada: 2, resistente: 2},
        square_set:          {muito_fraco: 4, fragil: 2, moderada: 1, resistente: 0},
    } 
    
    let pesos_rss_fw = {
        open_pit:            {muito_fraco: 3, fragil: 3, moderada: 4, resistente: 4},
        block_caving:        {muito_fraco: 4, fragil: 3, moderada: 2, resistente: 1},
        sublevel_stoping:    {muito_fraco: 0, fragil: 1, moderada: 3, resistente: 3}, 
        sublevel_caving:     {muito_fraco: 1, fragil: 2, moderada: 2, resistente: 2},
        longwall:            {muito_fraco: 0, fragil: 0, moderada: 0, resistente: 0},
        room_and_pillar:     {muito_fraco: 0, fragil: 0, moderada: 0, resistente: 0},
        shrinkage_stoping:   {muito_fraco: 0, fragil: 2, moderada: 3, resistente: 3},
        cut_and_fill:        {muito_fraco: 1, fragil: 3, moderada: 2, resistente: 2}, 
        top_slicing:         {muito_fraco: 2, fragil: 2, moderada: 1, resistente: 1},
        square_set:          {muito_fraco: 3, fragil: 2, moderada: 0, resistente: 0},
    } 

    let preferencias = { //Cria o dicionário que armazenará o resultado do calculo
        open_pit:            1,
        block_caving:        1,
        sublevel_stoping:    1,
        sublevel_caving:     1,
        longwall:            1, 
        room_and_pillar:     1,
        shrinkage_stoping:   1,
        cut_and_fill:        1,
        top_slicing:         1,
        square_set:          1,
    }
    
    for (const key in preferencias) //Calculo os valores de cada método de lavra e guarda no dicionário
    {
        preferencias[key] = 0
        + pesos_forma_geral[key][geometria[0].value]   //Forma geral
        + pesos_mergulho[key][geometria[1].value]       //Mergulho
        + pesos_espessura[key][geometria[2].value]      //Espessura
        + pesos_distribuicao[key][geometria[3].value]   //Distribuição
        + pesos_profundidade[key][geometria[4].value]   //Profundidade
        + pesos_rss_ob[key][resultado_rss['rss_ob']]    //RSS Corpo de minério
        + pesos_rss_hw[key][resultado_rss['rss_hw']]    //RSS Hanging Wall
        + pesos_rss_fw[key][resultado_rss['rss_fw']]    //RSS Footwall
        + pesos_rmr_ob[key][resultado_rmr['rmr_ob']]    //RMR Corpo de minério
        + pesos_rmr_hw[key][resultado_rmr['rmr_hw']]    //RMR Hanging Wall
        + pesos_rmr_fw[key][resultado_rmr['rmr_fw']]    //RMR Footwall
    }
    return preferencias //Retorna o dicionário com o valor atribuido a cada método de lavra para a função Calculo em Calculos.js
}
