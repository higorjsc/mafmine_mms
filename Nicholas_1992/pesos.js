function Preferencias(geometria, resultado_rss, resultado_fracture_spacing, resultado_fracture_strenght, pesos) //Calculo o valor de cada método de lavra e retorna para Calculo em Calculos.js
{
    let pesos_forma_geral = {
        open_pit:            {massivo: 3, tabular: 2, irregular: 3},
        block_caving:        {massivo: 4, tabular: 2, irregular: 0},
        sublevel_stoping:    {massivo: 2, tabular: 2, irregular: 1},
        sublevel_caving:     {massivo: 3, tabular: 4, irregular: 1},
        longwall:            {massivo: -49, tabular: 4, irregular: -49} ,
        room_and_pillar:     {massivo: 0, tabular: 4, irregular: 2},
        shrinkage_stoping:   {massivo: 2, tabular: 2, irregular: 1},
        cut_and_fill:        {massivo: 0, tabular: 4, irregular: 2},
        top_slicing:         {massivo: 3, tabular: 3, irregular: 0},
        square_set:          {massivo: 0, tabular: 2, irregular: 4},
    } 

    let pesos_espessura = {
        open_pit:             {estreito: 2, intermediario: 3, espesso: 4, muito_espesso: 4},
        block_caving:         {estreito: -49, intermediario: 0, espesso: 2, muito_espesso: 4},
        sublevel_stoping:     {estreito: 1, intermediario: 2, espesso: 4, muito_espesso: 3},
        sublevel_caving:      {estreito: -49, intermediario: 0, espesso: 4, muito_espesso: 4},
        longwall:             {estreito: 4, intermediario: 0, espesso: -49, muito_espesso: -49},
        room_and_pillar:      {estreito: 4, intermediario: 2, espesso: -49, muito_espesso: -49},
        shrinkage_stoping:    {estreito: 1, intermediario: 2, espesso: 4, muito_espesso: 3},
        cut_and_fill:         {estreito: 4, intermediario: 4, espesso: 0, muito_espesso: 0},
        top_slicing:          {estreito: -49, intermediario: 0, espesso: 3, muito_espesso: 4},
        square_set:           {estreito: 4, intermediario: 4, espesso: 1, muito_espesso: 1},
      }
    

    let pesos_mergulho = {
        open_pit:            {plano: 3, intermediario: 3, inclinado: 4},
        block_caving:        {plano: 3, intermediario: 2, inclinado: 4},
        sublevel_stoping:    {plano: 2, intermediario: 1, inclinado: 4},
        sublevel_caving:     {plano: 1, intermediario: 1, inclinado: 4},
        longwall:            {plano: 4, intermediario: 0, inclinado: -49},
        room_and_pillar:     {plano: 4, intermediario: 1, inclinado: 0},
        shrinkage_stoping:   {plano: 2, intermediario: 1, inclinado: 4},
        cut_and_fill:        {plano: 0, intermediario: 3, inclinado: 4} ,
        top_slicing:         {plano: 4, intermediario: 1, inclinado: 2},
        square_set:          {plano: 2, intermediario: 3, inclinado: 3},
      }

    let pesos_distribuicao= {
        open_pit:            {uniforme: 3, gradacional: 3, erratico: 3},
        block_caving:        {uniforme: 4, gradacional: 2, erratico: 0},
        sublevel_stoping:    {uniforme: 3, gradacional: 3, erratico: 1},
        sublevel_caving:     {uniforme: 4, gradacional: 2, erratico: 0},
        longwall:            {uniforme: 4, gradacional: 2, erratico: 0},
        room_and_pillar:     {uniforme: 3, gradacional: 3, erratico: 3},
        shrinkage_stoping:   {uniforme: 3, gradacional: 2, erratico: 1},
        cut_and_fill:        {uniforme: 3, gradacional: 3, erratico: 3},
        top_slicing:         {uniforme: 4, gradacional: 2, erratico: 0},
        square_set:          {uniforme: 3, gradacional: 3, erratico: 3},
      }
      
    let pesos_rss_ob = {
        open_pit:            {fraca: 3, moderada: 4, forte: 4},
        block_caving:        {fraca: 4, moderada: 1, forte: 1},
        sublevel_stoping:    {fraca: -49, moderada: 3, forte: 4}, 
        sublevel_caving:     {fraca: 0, moderada: 3, forte: 3},
        longwall:            {fraca: 4, moderada: 1, forte: 0},
        room_and_pillar:     {fraca: 0, moderada: 3, forte: 4},
        shrinkage_stoping:   {fraca: 1, moderada: 3, forte: 4},
        cut_and_fill:        {fraca: 3, moderada: 2, forte: 2}, 
        top_slicing:         {fraca: 2, moderada: 3, forte: 3},
        square_set:          {fraca: 4, moderada: 1, forte: 1},
    } 
      
    let pesos_rss_hw = {
        open_pit:            {fraca: 3, moderada: 4, forte: 4},
        block_caving:        {fraca: 4, moderada: 2, forte: 1},
        sublevel_stoping:    {fraca: -49, moderada: 3, forte: 4}, 
        sublevel_caving:     {fraca: 3, moderada: 2, forte: 1},
        longwall:            {fraca: 4, moderada: 2, forte: 0},
        room_and_pillar:     {fraca: 0, moderada: 3, forte: 4},
        shrinkage_stoping:   {fraca: 4, moderada: 2, forte: 1},
        cut_and_fill:        {fraca: 3, moderada: 2, forte: 2}, 
        top_slicing:         {fraca: 4, moderada: 2, forte: 1},
        square_set:          {fraca: 3, moderada: 2, forte: 2},
    } 
    
    let pesos_rss_fw = {
        open_pit:            {fraca: 3, moderada: 4, forte: 4},
        block_caving:        {fraca: 2, moderada: 3, forte: 3},
        sublevel_stoping:    {fraca: 0, moderada: 2, forte: 4}, 
        sublevel_caving:     {fraca: 0, moderada: 2, forte: 4},
        longwall:            {fraca: 2, moderada: 3, forte: 3},
        room_and_pillar:     {fraca: 0, moderada: 2, forte: 4},
        shrinkage_stoping:   {fraca: 2, moderada: 3, forte: 3},
        cut_and_fill:        {fraca: 4, moderada: 2, forte: 2}, 
        top_slicing:         {fraca: 2, moderada: 3, forte: 3},
        square_set:          {fraca: 4, moderada: 2, forte: 2},
    } 

  let fracture_spacing_ob = {
    open_pit:            {perto: 2, muito_perto: 3, longe: 4, muito_longe: 4 },
    block_caving:        {perto: 4, muito_perto: 4, longe: 3, muito_longe: 0 },
    sublevel_stoping:    {perto: 0, muito_perto: 0, longe: 1, muito_longe: 4 }, 
    sublevel_caving:     {perto: 0, muito_perto: 2, longe: 4, muito_longe: 4 },
    longwall:            {perto: 4, muito_perto: 4, longe: 0, muito_longe: 0 },
    room_and_pillar:     {perto: 0, muito_perto: 1, longe: 2, muito_longe: 4 },
    shrinkage_stoping:   {perto: 0, muito_perto: 1, longe: 3, muito_longe: 4 },
    cut_and_fill:        {perto: 3, muito_perto: 3, longe: 2, muito_longe: 2 }, 
    top_slicing:         {perto: 1, muito_perto: 1, longe: 2, muito_longe: 4 },
    square_set:          {perto: 4, muito_perto: 4, longe: 2, muito_longe: 1 },
  } 
  let fracture_spacing_hw = {
    open_pit:            {perto: 2, muito_perto: 3, longe: 4, muito_longe: 4 },
    block_caving:        {perto: 3, muito_perto: 4, longe: 3, muito_longe: 0 },
    sublevel_stoping:    {perto: -49, muito_perto: 0, longe: 1, muito_longe: 4 }, 
    sublevel_caving:     {perto: 3, muito_perto: 4, longe: 3, muito_longe: 1 },
    longwall:            {perto: 4, muito_perto: 4, longe: 3, muito_longe: 0 },
    room_and_pillar:     {perto: 0, muito_perto: 1, longe: 2, muito_longe: 4 },
    shrinkage_stoping:   {perto: 4, muito_perto: 4, longe: 3, muito_longe: 0 },
    cut_and_fill:        {perto: 3, muito_perto: 3, longe: 2, muito_longe: 2 }, 
    top_slicing:         {perto: 3, muito_perto: 3, longe: 3, muito_longe: 0 },
    square_set:          {perto: 3, muito_perto: 3, longe: 2, muito_longe: 2 },
  }
  let fracture_spacing_fw = {
    open_pit:            {perto: 2, muito_perto: 3, longe: 4, muito_longe: 4 },
    block_caving:        {perto: 1, muito_perto: 3, longe: 3, muito_longe: 3 },
    sublevel_stoping:    {perto: 0, muito_perto: 0, longe: 2, muito_longe: 4 }, 
    sublevel_caving:     {perto: 0, muito_perto: 1, longe: 3, muito_longe: 4 },
    longwall:            {perto: 1, muito_perto: 2, longe: 4, muito_longe: 3 },
    room_and_pillar:     {perto: 0, muito_perto: 1, longe: 3, muito_longe: 3 },
    shrinkage_stoping:   {perto: 2, muito_perto: 3, longe: 3, muito_longe: 2 },
    cut_and_fill:        {perto: 4, muito_perto: 4, longe: 2, muito_longe: 2 }, 
    top_slicing:         {perto: 1, muito_perto: 3, longe: 3, muito_longe: 3 },
    square_set:          {perto: 4, muito_perto: 4, longe: 2, muito_longe: 2 },
  } 
    
  let fracture_strenght_ob = {
      open_pit:            {fraca: 3, moderada: 4, forte: 4},
      block_caving:        {fraca: 4, moderada: 1, forte: 1},
      sublevel_stoping:    {fraca: -49, moderada: 3, forte: 4}, 
      sublevel_caving:     {fraca: 0, moderada: 3, forte: 3},
      longwall:            {fraca: 4, moderada: 1, forte: 0},
      room_and_pillar:     {fraca: 0, moderada: 3, forte: 4},
      shrinkage_stoping:   {fraca: 1, moderada: 3, forte: 4},
      cut_and_fill:        {fraca: 3, moderada: 2, forte: 2}, 
      top_slicing:         {fraca: 2, moderada: 3, forte: 3},
      square_set:          {fraca: 4, moderada: 1, forte: 1},
  } 
    
  let fracture_strenght_hw = {
      open_pit:            {fraca: 3, moderada: 4, forte: 4},
      block_caving:        {fraca: 4, moderada: 2, forte: 1},
      sublevel_stoping:    {fraca: -49, moderada: 3, forte: 4}, 
      sublevel_caving:     {fraca: 3, moderada: 2, forte: 1},
      longwall:            {fraca: 4, moderada: 2, forte: 0},
      room_and_pillar:     {fraca: 0, moderada: 3, forte: 4},
      shrinkage_stoping:   {fraca: 4, moderada: 2, forte: 1},
      cut_and_fill:        {fraca: 3, moderada: 2, forte: 2}, 
      top_slicing:         {fraca: 4, moderada: 2, forte: 1},
      square_set:          {fraca: 3, moderada: 2, forte: 2},
  } 

  let fracture_strenght_fw = {
      open_pit:            {fraca: 3, moderada: 4, forte: 4},
      block_caving:        {fraca: 2, moderada: 3, forte: 3},
      sublevel_stoping:    {fraca: 0, moderada: 2, forte: 4}, 
      sublevel_caving:     {fraca: 0, moderada: 2, forte: 4},
      longwall:            {fraca: 2, moderada: 3, forte: 3},
      room_and_pillar:     {fraca: 0, moderada: 2, forte: 4},
      shrinkage_stoping:   {fraca: 2, moderada: 3, forte: 3},
      cut_and_fill:        {fraca: 4, moderada: 2, forte: 2}, 
      top_slicing:         {fraca: 2, moderada: 3, forte: 3},
      square_set:          {fraca: 4, moderada: 2, forte: 2},
  } 

    let preferencias = { //Cria o dicionário que armazenará o resultado do calculo
        'open_pit':            1,
        'block_caving':        1,
        'sublevel_stoping':    1,
        'sublevel_caving':     1,
        'longwall':            1, 
        'room_and_pillar':     1,
        'shrinkage_stoping':   1,
        'cut_and_fill':        1,
        'top_slicing':         1,
        'square_set':          1,
    }
    
    for (const key in preferencias) //Calculo os valores de cada método de lavra e guarda no dicionário
    {
        preferencias[key] = 0
        + pesos_forma_geral[key][geometria[0].value] * pesos['geometria']      //Forma geral
        + pesos_mergulho[key][geometria[1].value]   * pesos['geometria']        //Mergulho
        + pesos_espessura[key][geometria[2].value]  * pesos['geometria']        //Espessura
        + pesos_distribuicao[key][geometria[3].value] * pesos['geometria']      //Distribuição
        + pesos_rss_ob[key][resultado_rss['rss_ob']] * pesos['ob']     //RSS Corpo de minério
        + pesos_rss_hw[key][resultado_rss['rss_hw']] * pesos['hw']     //RSS Hanging Wall
        + pesos_rss_fw[key][resultado_rss['rss_fw']] * pesos['fw']     //RSS Footwall
        + fracture_spacing_ob[key][resultado_fracture_spacing[0].value]  * pesos['ob']    //Fracture Spacing Corpo de minério
        + fracture_spacing_hw[key][resultado_fracture_spacing[1].value]  * pesos['hw']    //Fracture Spacing Hanging Wall
        + fracture_spacing_fw[key][resultado_fracture_spacing[2].value]  * pesos['fw']    //Fracture SpacingFootwall
        + fracture_strenght_ob[key][resultado_fracture_strenght[0].value]  * pesos['ob']  //Fracture Strenght Corpo de minério
        + fracture_strenght_hw[key][resultado_fracture_strenght[1].value]  * pesos['hw']  //Fracture Strenght Hanging Wall
        + fracture_strenght_fw[key][resultado_fracture_strenght[2].value]  * pesos['fw']  //Fracture Strenght Footwall
    }
    return preferencias //Retorna o dicionário com o valor atribuido a cada método de lavra para a função Calculo em Calculos.js
}
