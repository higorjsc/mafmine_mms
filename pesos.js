//Calculo o valor de cada método de lavra e retorna para Calculo em Calculos.js
function Preferencias_nicholas_92(geometria, resultado_rss, resultado_fracture_spacing, resultado_fracture_strenght, pesos) {
    let pesos_forma_geral = {
        open_pit:           { massivo: 3.00, tabular: 2.00, irregular: 3.00 },
        block_caving:       { massivo: 4.00, tabular: 2.00, irregular: 0.00 },
        sublevel_stoping:   { massivo: 2.00, tabular: 2.00, irregular: 1.00 },
        sublevel_caving:    { massivo: 3.00, tabular: 4.00, irregular: 1.00 },
        longwall:           { massivo: -49.0, tabular: 4.00, irregular: -49.0 },
        room_and_pillar:    { massivo: 0.00, tabular: 4.00, irregular: 2.00 },
        shrinkage_stoping:  { massivo: 2.00, tabular: 2.00, irregular: 1.00 },
        cut_and_fill:       { massivo: 0.00, tabular: 4.00, irregular: 2.00 },
        top_slicing:        { massivo: 3.00, tabular: 3.00, irregular: 0.00 },
        square_set:         { massivo: 0.00, tabular: 2.00, irregular: 4.00 },
    }

    let pesos_espessura = {
        open_pit:           { estreito: 2.00, intermediario: 3.00, espesso: 4.00, muito_espesso: 4.00 },
        block_caving:       { estreito: -49.0, intermediario: 0.00, espesso: 2.00, muito_espesso: 4.00 },
        sublevel_stoping:   { estreito: 1.00, intermediario: 2.00, espesso: 4.00, muito_espesso: 3.00 },
        sublevel_caving:    { estreito: -49.0, intermediario: 0.00, espesso: 4.00, muito_espesso: 4.00 },
        longwall:           { estreito: 4.00, intermediario: 0.00, espesso: -49.0, muito_espesso: -49.0 },
        room_and_pillar:    { estreito: 4.00, intermediario: 2.00, espesso: -49.0, muito_espesso: -49.0 },
        shrinkage_stoping:  { estreito: 1.00, intermediario: 2.00, espesso: 4.00, muito_espesso: 3.00 },
        cut_and_fill:       { estreito: 4.00, intermediario: 4.00, espesso: 0.00, muito_espesso: 0.00 },
        top_slicing:        { estreito: -49.0, intermediario: 0.00, espesso: 3.00, muito_espesso: 4.00 },
        square_set:         { estreito: 4.00, intermediario: 4.00, espesso: 1.00, muito_espesso: 1.00 },
    }


    let pesos_mergulho = {
        open_pit:           { plano: 3.00, intermediario: 3.00, inclinado: 4.00 },
        block_caving:       { plano: 3.00, intermediario: 2.00, inclinado: 4.00 },
        sublevel_stoping:   { plano: 2.00, intermediario: 1.00, inclinado: 4.00 },
        sublevel_caving:    { plano: 1.00, intermediario: 1.00, inclinado: 4.00 },
        longwall:           { plano: 4.00, intermediario: 0.00, inclinado: -49.0 },
        room_and_pillar:    { plano: 4.00, intermediario: 1.00, inclinado: 0.00 },
        shrinkage_stoping:  { plano: 2.00, intermediario: 1.00, inclinado: 4.00 },
        cut_and_fill:       { plano: 0.00, intermediario: 3.00, inclinado: 4.00 },
        top_slicing:        { plano: 4.00, intermediario: 1.00, inclinado: 2.00 },
        square_set:         { plano: 2.00, intermediario: 3.00, inclinado: 3.00 },
    }

    let pesos_distribuicao = {
        open_pit:           { uniforme: 3.00, gradacional: 3.00, erratico: 3.00 },
        block_caving:       { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        sublevel_stoping:   { uniforme: 3.00, gradacional: 3.00, erratico: 1.00 },
        sublevel_caving:    { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        longwall:           { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        room_and_pillar:    { uniforme: 3.00, gradacional: 3.00, erratico: 3.00 },
        shrinkage_stoping:  { uniforme: 3.00, gradacional: 2.00, erratico: 1.00 },
        cut_and_fill:       { uniforme: 3.00, gradacional: 3.00, erratico: 3.00 },
        top_slicing:        { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        square_set:         { uniforme: 3.00, gradacional: 3.00, erratico: 3.00 },
    }

    let pesos_rss_ob = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 4.00, moderada: 1.00, forte: 1.00 },
        sublevel_stoping:   { fraca: -49.0, moderada: 3.00, forte: 4.00 },
        sublevel_caving:    { fraca: 0.00, moderada: 3.00, forte: 3.00 },
        longwall:           { fraca: 4.00, moderada: 1.00, forte: 0.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 3.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 1.00, moderada: 3.00, forte: 4.00 },
        cut_and_fill:       { fraca: 3.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        square_set:         { fraca: 4.00, moderada: 1.00, forte: 1.00 },
    }

    let pesos_rss_hw = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        sublevel_stoping:   { fraca: -49.0, moderada: 3.00, forte: 4.00 },
        sublevel_caving:    { fraca: 3.00, moderada: 2.00, forte: 1.00 },
        longwall:           { fraca: 4.00, moderada: 2.00, forte: 0.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 3.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        cut_and_fill:       { fraca: 3.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        square_set:         { fraca: 3.00, moderada: 2.00, forte: 2.00 },
    }

    let pesos_rss_fw = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        sublevel_stoping:   { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        sublevel_caving:    { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        longwall:           { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        cut_and_fill:       { fraca: 4.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        square_set:         { fraca: 4.00, moderada: 2.00, forte: 2.00 },
    }

    let fracture_spacing_ob = {
        open_pit:           { perto: 2.00, muito_perto: 3.00, longe: 4.00, muito_longe: 4.00 },
        block_caving:       { perto: 4.00, muito_perto: 4.00, longe: 3.00, muito_longe: 0.00 },
        sublevel_stoping:   { perto: 0.00, muito_perto: 0.00, longe: 1.00, muito_longe: 4.00 },
        sublevel_caving:    { perto: 0.00, muito_perto: 2.00, longe: 4.00, muito_longe: 4.00 },
        longwall:           { perto: 4.00, muito_perto: 4.00, longe: 0.00, muito_longe: 0.00 },
        room_and_pillar:    { perto: 0.00, muito_perto: 1.00, longe: 2.00, muito_longe: 4.00 },
        shrinkage_stoping:  { perto: 0.00, muito_perto: 1.00, longe: 3.00, muito_longe: 4.00 },
        cut_and_fill:       { perto: 3.00, muito_perto: 3.00, longe: 2.00, muito_longe: 2.00 },
        top_slicing:        { perto: 1.00, muito_perto: 1.00, longe: 2.00, muito_longe: 4.00 },
        square_set:         { perto: 4.00, muito_perto: 4.00, longe: 2.00, muito_longe: 1.00 },
    }
    let fracture_spacing_hw = {
        open_pit:           { perto: 2.00, muito_perto: 3.00, longe: 4.00, muito_longe: 4.00 },
        block_caving:       { perto: 3.00, muito_perto: 4.00, longe: 3.00, muito_longe: 0.00 },
        sublevel_stoping:   { perto: -49.0, muito_perto: 0.00, longe: 1.00, muito_longe: 4.00 },
        sublevel_caving:    { perto: 3.00, muito_perto: 4.00, longe: 3.00, muito_longe: 1.00 },
        longwall:           { perto: 4.00, muito_perto: 4.00, longe: 3.00, muito_longe: 0.00 },
        room_and_pillar:    { perto: 0.00, muito_perto: 1.00, longe: 2.00, muito_longe: 4.00 },
        shrinkage_stoping:  { perto: 4.00, muito_perto: 4.00, longe: 3.00, muito_longe: 0.00 },
        cut_and_fill:       { perto: 3.00, muito_perto: 3.00, longe: 2.00, muito_longe: 2.00 },
        top_slicing:        { perto: 3.00, muito_perto: 3.00, longe: 3.00, muito_longe: 0.00 },
        square_set:         { perto: 3.00, muito_perto: 3.00, longe: 2.00, muito_longe: 2.00 },
    }
    let fracture_spacing_fw = {
        open_pit:           { perto: 2.00, muito_perto: 3.00, longe: 4.00, muito_longe: 4.00 },
        block_caving:       { perto: 1.00, muito_perto: 3.00, longe: 3.00, muito_longe: 3.00 },
        sublevel_stoping:   { perto: 0.00, muito_perto: 0.00, longe: 2.00, muito_longe: 4.00 },
        sublevel_caving:    { perto: 0.00, muito_perto: 1.00, longe: 3.00, muito_longe: 4.00 },
        longwall:           { perto: 1.00, muito_perto: 2.00, longe: 4.00, muito_longe: 3.00 },
        room_and_pillar:    { perto: 0.00, muito_perto: 1.00, longe: 3.00, muito_longe: 3.00 },
        shrinkage_stoping:  { perto: 2.00, muito_perto: 3.00, longe: 3.00, muito_longe: 2.00 },
        cut_and_fill:       { perto: 4.00, muito_perto: 4.00, longe: 2.00, muito_longe: 2.00 },
        top_slicing:        { perto: 1.00, muito_perto: 3.00, longe: 3.00, muito_longe: 3.00 },
        square_set:         { perto: 4.00, muito_perto: 4.00, longe: 2.00, muito_longe: 2.00 },
    }

    let fracture_strenght_ob = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 4.00, moderada: 1.00, forte: 1.00 },
        sublevel_stoping:   { fraca: -49.0, moderada: 3.00, forte: 4.00 },
        sublevel_caving:    { fraca: 0.00, moderada: 3.00, forte: 3.00 },
        longwall:           { fraca: 4.00, moderada: 1.00, forte: 0.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 3.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 1.00, moderada: 3.00, forte: 4.00 },
        cut_and_fill:       { fraca: 3.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        square_set:         { fraca: 4.00, moderada: 1.00, forte: 1.00 },
    }

    let fracture_strenght_hw = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        sublevel_stoping:   { fraca: -49.0, moderada: 3.00, forte: 4.00 },
        sublevel_caving:    { fraca: 3.00, moderada: 2.00, forte: 1.00 },
        longwall:           { fraca: 4.00, moderada: 2.00, forte: 0.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 3.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        cut_and_fill:       { fraca: 3.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        square_set:         { fraca: 3.00, moderada: 2.00, forte: 2.00 },
    }

    let fracture_strenght_fw = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        sublevel_stoping:   { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        sublevel_caving:    { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        longwall:           { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        cut_and_fill:       { fraca: 4.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        square_set:         { fraca: 4.00, moderada: 2.00, forte: 2.00 },
    }

    let preferencias = { //Cria o dicionário que armazenará o resultado do calculo
        "open_pit": 1.00,
        "block_caving": 1.00,
        "sublevel_stoping": 1.00,
        "sublevel_caving": 1.00,
        "longwall": 1.00,
        "room_and_pillar": 1.00,
        "shrinkage_stoping": 1.00,
        "cut_and_fill": 1.00,
        "top_slicing": 1.00,
        "square_set": 1.00,
    }

    //Calculo os valores de cada método de lavra e guarda no dicionário
    for (const key in preferencias) {
        preferencias[key] = 0
            + pesos_forma_geral[key][geometria[0].value] * pesos["geo"]      //Forma geral
            + pesos_mergulho[key][geometria[1].value] * pesos["geo"]        //Mergulho
            + pesos_espessura[key][geometria[2].value] * pesos["geo"]        //Espessura
            + pesos_distribuicao[key][geometria[3].value] * pesos["geo"]      //Distribuição
            + pesos_rss_ob[key][resultado_rss["rss_ob"]] * pesos["ob"]     //RSS Corpo de minério
            + pesos_rss_hw[key][resultado_rss["rss_hw"]] * pesos["hw"]     //RSS Hanging Wall
            + pesos_rss_fw[key][resultado_rss["rss_fw"]] * pesos["fw"]     //RSS Footwall
            + fracture_spacing_ob[key][resultado_fracture_spacing[0].value] * pesos["ob"]    //Fracture Spacing Corpo de minério
            + fracture_spacing_hw[key][resultado_fracture_spacing[1].value] * pesos["hw"]    //Fracture Spacing Hanging Wall
            + fracture_spacing_fw[key][resultado_fracture_spacing[2].value] * pesos["fw"]    //Fracture SpacingFootwall
            + fracture_strenght_ob[key][resultado_fracture_strenght[0].value] * pesos["ob"]  //Fracture Strenght Corpo de minério
            + fracture_strenght_hw[key][resultado_fracture_strenght[1].value] * pesos["hw"]  //Fracture Strenght Hanging Wall
            + fracture_strenght_fw[key][resultado_fracture_strenght[2].value] * pesos["fw"]  //Fracture Strenght Footwall
        preferencias[key] = preferencias[key].toFixed(2)
    }

    //Retorna o dicionário com o valor atribuido a cada método de lavra para a função Calculo em Calculos.js
    return preferencias
}

//Calculo o valor de cada método de lavra e retorna para Calculo em Calculos.js 2.10,
function Preferencias_shb(geometria, valor_minerio, resultado_rss, resultado_rmr, pesos) {
    let pesos_forma_geral = {
        open_pit:           { massivo: 4.00, tabular: 3.00, irregular: 3.00 },
        block_caving:       { massivo: 4.00, tabular: 2.00, irregular: 0.00 },
        sublevel_stoping:   { massivo: 3.00, tabular: 4.00, irregular: 1.00 },
        sublevel_caving:    { massivo: 3.00, tabular: 4.00, irregular: 1.00 },
        longwall:           { massivo: -50.0, tabular: 4.00, irregular: -50.0 },
        room_and_pillar:    { massivo: 0.00, tabular: 4.00, irregular: 2.00 },
        shrinkage_stoping:  { massivo: 1.00, tabular: 4.00, irregular: 2.00 },
        cut_and_fill:       { massivo: 1.00, tabular: 4.00, irregular: 4.00 },
        top_slicing:        { massivo: 1.00, tabular: 2.00, irregular: 0.00 },
        square_set:         { massivo: 0.00, tabular: 2.00, irregular: 4.00 },
    }

    let pesos_espessura = {
        open_pit:           { muito_estreito: 1.00, estreito: 2.00, intermediario: 3.00, espesso: 4.00, muito_espesso: 4.00 },
        block_caving:       { muito_estreito: -50.0, estreito: -50.0, intermediario: 0.00, espesso: 3.00, muito_espesso: 4.00 },
        sublevel_stoping:   { muito_estreito: -10.0, estreito: 2.00, intermediario: 4.00, espesso: 3.00, muito_espesso: 2.00 },
        sublevel_caving:    { muito_estreito: -50.0, estreito: -10.0, intermediario: 3.00, espesso: 4.00, muito_espesso: 4.00 },
        longwall:           { muito_estreito: 4.00, estreito: 2.00, intermediario: -10.0, espesso: -50.0, muito_espesso: -50.0 },
        room_and_pillar:    { muito_estreito: 4.00, estreito: 2.00, intermediario: -10.0, espesso: -50.0, muito_espesso: -50.0 },
        shrinkage_stoping:  { muito_estreito: 4.00, estreito: 4.00, intermediario: 3.00, espesso: -10.0, muito_espesso: -50.0 },
        cut_and_fill:       { muito_estreito: 3.00, estreito: 4.00, intermediario: 4.00, espesso: 1.00, muito_espesso: -10.0 },
        top_slicing:        { muito_estreito: 1.00, estreito: 0.00, intermediario: 0.00, espesso: 2.00, muito_espesso: 1.00 },
        square_set:         { muito_estreito: 4.00, estreito: 3.00, intermediario: 2.00, espesso: 0.00, muito_espesso: 0.00 },
    }


    let pesos_mergulho = {
        open_pit:           { plano: 4.00, baixo: 4.00, intermediario: 4.00, pouco_inclinado: 4.00, inclinado: 4.00 },
        block_caving:       { plano: 4.00, baixo: 0.00, intermediario: 1.00, pouco_inclinado: 3.00, inclinado: 4.00 },
        sublevel_stoping:   { plano: 2.00, baixo: 0.00, intermediario: 2.00, pouco_inclinado: 4.00, inclinado: 4.00 },
        sublevel_caving:    { plano: 4.00, baixo: 0.00, intermediario: 1.00, pouco_inclinado: 3.00, inclinado: 4.00 },
        longwall:           { plano: -50.0, baixo: 3.00, intermediario: 1.00, pouco_inclinado: -50.0, inclinado: -50.0 },
        room_and_pillar:    { plano: -50.0, baixo: 2.00, intermediario: -10.0, pouco_inclinado: -50.0, inclinado: -50.0 },
        shrinkage_stoping:  { plano: -50.0, baixo: -10.0, intermediario: 1.00, pouco_inclinado: 4.00, inclinado: 4.00 },
        cut_and_fill:       { plano: -10.0, baixo: 1.00, intermediario: 3.00, pouco_inclinado: 4.00, inclinado: 4.00 },
        top_slicing:        { plano: 1.00, baixo: 4.00, intermediario: 2.00, pouco_inclinado: 0.00, inclinado: 0.00 },
        square_set:         { plano: 0.00, baixo: 2.00, intermediario: 3.00, pouco_inclinado: 4.00, inclinado: 4.00 },
    }

    let pesos_distribuicao = {
        open_pit:           { uniforme: 3.80, gradacional: 2.85, erratico: 1.90 },
        block_caving:       { uniforme: 2.85, gradacional: 1.90, erratico: 1.90 },
        sublevel_stoping:   { uniforme: 3.80, gradacional: 3.80, erratico: 2.85 },
        sublevel_caving:    { uniforme: 2.85, gradacional: 1.90, erratico: 1.90 },
        longwall:           { uniforme: 3.80, gradacional: 0.95, erratico: 0.00 },
        room_and_pillar:    { uniforme: 3.80, gradacional: 2.85, erratico: 0.00 },
        shrinkage_stoping:  { uniforme: 3.80, gradacional: 1.95, erratico: 1.95 },
        cut_and_fill:       { uniforme: 2.85, gradacional: 3.80, erratico: 3.80 },
        top_slicing:        { uniforme: 1.90, gradacional: 0.95, erratico: 0.95 },
        square_set:         { uniforme: 0.95, gradacional: 1.90, erratico: 2.85 },
    }

    let pesos_valor_minerio = {
        open_pit:           { baixo: 1.60, medio: 1.60, alto: 1.60 },
        block_caving:       { baixo: 1.60, medio: 0.80, alto: 0.40 },
        sublevel_stoping:   { baixo: 0.40, medio: 1.60, alto: 0.80 },
        sublevel_caving:    { baixo: 0.40, medio: 1.60, alto: 0.80 },
        longwall:           { baixo: 0.40, medio: 1.60, alto: 0.80 },
        room_and_pillar:    { baixo: 0.40, medio: 1.60, alto: 0.80 },
        shrinkage_stoping:  { baixo: 0.00, medio: 0.80, alto: 1.60 },
        cut_and_fill:       { baixo: 0.40, medio: 1.20, alto: 1.60 },
        top_slicing:        { baixo: 0.40, medio: 1.20, alto: 1.20 },
        square_set:         { baixo: 0.00, medio: 0.40, alto: 4.00 },
    }


    let pesos_profundidade = {
        open_pit:           { rasa: 2.40, intermediaria: 0.60, pouco_profunda: -25.0, profunda: -50.0 },
        block_caving:       { rasa: 0.60, intermediaria: 1.20, pouco_profunda: 1.80, profunda: 2.40 },
        sublevel_stoping:   { rasa: 1.20, intermediaria: 1.80, pouco_profunda: 2.40, profunda: 2.40 },
        sublevel_caving:    { rasa: 1.20, intermediaria: 1.80, pouco_profunda: 1.80, profunda: 2.40 },
        longwall:           { rasa: 0.60, intermediaria: 1.20, pouco_profunda: 1.80, profunda: 2.40 },
        room_and_pillar:    { rasa: 1.80, intermediaria: 2.40, pouco_profunda: 1.20, profunda: 2.40 },
        shrinkage_stoping:  { rasa: 1.80, intermediaria: 1.80, pouco_profunda: 1.80, profunda: 0.60 },
        cut_and_fill:       { rasa: 0.60, intermediaria: 1.20, pouco_profunda: 2.40, profunda: 0.60 },
        top_slicing:        { rasa: 1.20, intermediaria: 1.20, pouco_profunda: 0.60, profunda: 2.40 },
        square_set:         { rasa: 0.60, intermediaria: 0.60, pouco_profunda: 1.20, profunda: 2.40 },
    }

    let pesos_rmr_ob = {
        open_pit:           { muito_pobre: 2.63, pobre: 2.63, razoavel: 2.63, boa: 2.63, muito_boa: 2.63 },
        block_caving:       { muito_pobre: 3.50, pobre: 2.63, razoavel: 1.75, boa: 0.00, muito_boa: -50.0 },
        sublevel_stoping:   { muito_pobre: 0.88, pobre: 2.63, razoavel: 3.50, boa: 3.50, muito_boa: 3.50 },
        sublevel_caving:    { muito_pobre: 2.63, pobre: 3.50, razoavel: 2.63, boa: 0.88, muito_boa: 0.00 },
        longwall:           { muito_pobre: 5.25, pobre: 5.25, razoavel: 3.50, boa: 1.75, muito_boa: 1.75 },
        room_and_pillar:    { muito_pobre: -50.0, pobre: 0.00, razoavel: 2.63, boa: 4.38, muito_boa: 5.25 },
        shrinkage_stoping:  { muito_pobre: 0.00, pobre: 0.88, razoavel: 2.63, boa: 2.63, muito_boa: 2.63 },
        cut_and_fill:       { muito_pobre: 0.00, pobre: 0.88, razoavel: 1.75, boa: 0.88, muito_boa: 2.63 },
        top_slicing:        { muito_pobre: 2.63, pobre: 1.75, razoavel: 0.88, boa: 0.00, muito_boa: 0.00 },
        square_set:         { muito_pobre: 3.50, pobre: 3.50, razoavel: 0.88, boa: 3.50, muito_boa: 0.00 },
    }

    let pesos_rmr_hw = {
        open_pit:           { muito_pobre: 1.40, pobre: 2.10, razoavel: 2.80, boa: 2.80, muito_boa: 2.80 },
        block_caving:       { muito_pobre: 2.10, pobre: 2.10, razoavel: 2.10, boa: 1.40, muito_boa: 1.40 },
        sublevel_stoping:   { muito_pobre: -50.0, pobre: 0.00, razoavel: 2.10, boa: 2.80, muito_boa: 2.80 },
        sublevel_caving:    { muito_pobre: 2.80, pobre: 2.80, razoavel: 2.10, boa: 1.40, muito_boa: 1.40 },
        longwall:           { muito_pobre: 4.20, pobre: 3.50, razoavel: 2.80, boa: 2.10, muito_boa: 2.10 },
        room_and_pillar:    { muito_pobre: -50.0, pobre: 0.00, razoavel: 2.10, boa: 3.50, muito_boa: 3.50 },
        shrinkage_stoping:  { muito_pobre: 0.00, pobre: 0.00, razoavel: 1.40, boa: 2.80, muito_boa: 2.80 },
        cut_and_fill:       { muito_pobre: 2.10, pobre: 3.50, razoavel: 2.80, boa: 2.10, muito_boa: 2.10 },
        top_slicing:        { muito_pobre: 0.00, pobre: 0.00, razoavel: 1.40, boa: 2.10, muito_boa: 2.10 },
        square_set:         { muito_pobre: 2.80, pobre: 2.80, razoavel: 0.70, boa: 0.00, muito_boa: 0.00 },
    }

    let pesos_rmr_fw = {
        open_pit:           { muito_pobre: 0.88, pobre: 1.32, razoavel: 1.76, boa: 1.76, muito_boa: 1.76 },
        block_caving:       { muito_pobre: 1.32, pobre: 1.32, razoavel: 1.32, boa: 0.88, muito_boa: 0.88 },
        sublevel_stoping:   { muito_pobre: 0.00, pobre: 0.00, razoavel: 0.88, boa: 1.32, muito_boa: 1.32 },
        sublevel_caving:    { muito_pobre: 0.44, pobre: 1.32, razoavel: 1.32, boa: 1.32, muito_boa: 1.32 },
        longwall:           { muito_pobre: 1.32, pobre: 1.76, razoavel: 1.32, boa: 0.88, muito_boa: 0.44 },
        room_and_pillar:    { muito_pobre: 1.32, pobre: 1.32, razoavel: 0.88, boa: 0.44, muito_boa: 0.00 },
        shrinkage_stoping:  { muito_pobre: 0.00, pobre: 0.00, razoavel: 0.88, boa: 1.32, muito_boa: 1.32 },
        cut_and_fill:       { muito_pobre: 1.32, pobre: 1.32, razoavel: 1.32, boa: 0.88, muito_boa: 0.88 },
        top_slicing:        { muito_pobre: 0.00, pobre: 0.00, razoavel: 0.44, boa: 0.88, muito_boa: 0.88 },
        square_set:         { muito_pobre: 1.32, pobre: 0.44, razoavel: 0.00, boa: 0.00, muito_boa: 0.00 },
    }

    let pesos_rss_ob = {
        open_pit:           { muito_fraco: 2.63, fragil: 3.50, moderada: 3.50, resistente: 3.50 },
        block_caving:       { muito_fraco: 3.50, fragil: 2.63, moderada: 1.75, resistente: 0.00 },
        sublevel_stoping:   { muito_fraco: 0.00, fragil: 0.88, moderada: 3.50, resistente: 3.50 },
        sublevel_caving:    { muito_fraco: 0.88, fragil: 2.63, moderada: 2.63, resistente: 1.75 },
        longwall:           { muito_fraco: 5.25, fragil: 4.38, moderada: 1.75, resistente: 0.88 },
        room_and_pillar:    { muito_fraco: 0.00, fragil: 0.00, moderada: 2.63, resistente: 5.25 },
        shrinkage_stoping:  { muito_fraco: 0.00, fragil: 0.88, moderada: 2.63, resistente: 3.50 },
        cut_and_fill:       { muito_fraco: 0.00, fragil: 0.88, moderada: 2.63, resistente: 2.63 },
        top_slicing:        { muito_fraco: 2.63, fragil: 1.75, moderada: 0.88, resistente: 0.00 },
        square_set:         { muito_fraco: 3.50, fragil: 2.63, moderada: 0.88, resistente: 0.00 },
    }

    let pesos_rss_hw = {
        open_pit:           { muito_fraco: 2.10, fragil: 2.10, moderada: 2.80, resistente: 2.80 },
        block_caving:       { muito_fraco: 2.80, fragil: 2.10, moderada: 1.40, resistente: 0.00 },
        sublevel_stoping:   { muito_fraco: 0.00, fragil: 0.70, moderada: 2.80, resistente: 3.50 },
        sublevel_caving:    { muito_fraco: 2.80, fragil: 2.10, moderada: 1.40, resistente: 0.70 },
        longwall:           { muito_fraco: 4.20, fragil: 3.50, moderada: 2.10, resistente: 0.70 },
        room_and_pillar:    { muito_fraco: -7.00, fragil: 0.00, moderada: 1.40, resistente: 4.20 },
        shrinkage_stoping:  { muito_fraco: 0.00, fragil: 0.70, moderada: 2.10, resistente: 2.80 },
        cut_and_fill:       { muito_fraco: 2.10, fragil: 3.50, moderada: 2.80, resistente: 1.40 },
        top_slicing:        { muito_fraco: 2.10, fragil: 1.40, moderada: 1.40, resistente: 1.40 },
        square_set:         { muito_fraco: 2.80, fragil: 2.10, moderada: 0.70, resistente: 0.00 },
    }

    let pesos_rss_fw = {
        open_pit:           { muito_fraco: 1.32, fragil: 1.32, moderada: 1.76, resistente: 1.76 },
        block_caving:       { muito_fraco: 1.76, fragil: 1.32, moderada: 0.88, resistente: 0.44 },
        sublevel_stoping:   { muito_fraco: 0.00, fragil: 0.44, moderada: 0.88, resistente: 1.32 },
        sublevel_caving:    { muito_fraco: 0.44, fragil: 0.88, moderada: 0.88, resistente: 0.88 },
        longwall:           { muito_fraco: 0.00, fragil: 0.44, moderada: 0.88, resistente: 0.88 },
        room_and_pillar:    { muito_fraco: 0.00, fragil: 0.00, moderada: 0.44, resistente: 1.32 },
        shrinkage_stoping:  { muito_fraco: 0.00, fragil: 0.88, moderada: 1.32, resistente: 1.32 },
        cut_and_fill:       { muito_fraco: 0.44, fragil: 1.32, moderada: 0.88, resistente: 0.88 },
        top_slicing:        { muito_fraco: 0.88, fragil: 0.88, moderada: 0.44, resistente: 0.44 },
        square_set:         { muito_fraco: 1.32, fragil: 0.88, moderada: 0.00, resistente: 0.00 }
    }

    //Cria o dicionário que armazenará o resultado do calculo
    let preferencias = {
        open_pit: 1.00,
        block_caving: 1.00,
        sublevel_stoping: 1.00,
        sublevel_caving: 1.00,
        longwall: 1.00,
        room_and_pillar: 1.00,
        shrinkage_stoping: 1.00,
        cut_and_fill: 1.00,
        top_slicing: 1.00,
        square_set: 1.00,
    }

    //Calculo os valores de cada método de lavra e guarda no dicionário
    for (const key in preferencias) {
        preferencias[key] = 0
            + (pesos_forma_geral[key][geometria[0].value] * pesos["geo"])       //Forma geral
            + (pesos_mergulho[key][geometria[1].value] * pesos["geo"])          //Mergulho
            + (pesos_espessura[key][geometria[2].value] * pesos["geo"])         //Espessura
            + (pesos_distribuicao[key][geometria[3].value] * pesos["geo"])      //Distribuição
            + (pesos_profundidade[key][geometria[4].value] * pesos["geo"])      //Profundidade
            + (pesos_valor_minerio[key][valor_minerio.value] * pesos["economico"])   //Valor do minerio
            + (pesos_rss_ob[key][resultado_rss["rss_ob"]] * pesos["ob"])        //RSS Corpo de minério
            + (pesos_rss_hw[key][resultado_rss["rss_hw"]] * pesos["hw"])        //RSS Hanging Wall
            + (pesos_rss_fw[key][resultado_rss["rss_fw"]] * pesos["fw"])        //RSS Footwall
            + (pesos_rmr_ob[key][resultado_rmr["rmr_ob"]] * pesos["ob"])        //RMR Corpo de minério
            + (pesos_rmr_hw[key][resultado_rmr["rmr_hw"]] * pesos["hw"])        //RMR Hanging Wall
            + (pesos_rmr_fw[key][resultado_rmr["rmr_fw"]] * pesos["fw"])        //RMR Footwall
        preferencias[key] = preferencias[key].toFixed(2)
    }

    //Retorna o dicionário com o valor atribuido a cada método de lavra para a função Calculo em Calculos.js
    return preferencias
}

//Calculo o valor de cada método de lavra e retorna para Calculo em Calculos.js
function Preferencias_ubc(geometria, resultado_rss, resultado_rmr, pesos) {
    let pesos_forma_geral = {
        open_pit:           { massivo: 4.00, tabular: 2.00, irregular: 3.00 },
        block_caving:       { massivo: 4.00, tabular: 2.00, irregular: 0.00 },
        sublevel_stoping:   { massivo: 3.00, tabular: 4.00, irregular: 1.00 },
        sublevel_caving:    { massivo: 3.00, tabular: 4.00, irregular: 1.00 },
        longwall:           { massivo: -49.0, tabular: 4.00, irregular: -49.0 },
        room_and_pillar:    { massivo: 0.00, tabular: 4.00, irregular: 2.00 },
        shrinkage_stoping:  { massivo: 0.00, tabular: 4.00, irregular: 2.00 },
        cut_and_fill:       { massivo: 1.00, tabular: 4.00, irregular: 4.00 },
        top_slicing:        { massivo: 1.00, tabular: 2.00, irregular: 0.00 },
        square_set:         { massivo: 0.00, tabular: 1.00, irregular: 4.00 },
    }

    let pesos_espessura = {
        open_pit:           { muito_estreito: 1.00, estreito: 2.00, intermediario: 3.00, espesso: 4.00, muito_espesso: 4.00 },
        block_caving:       { muito_estreito: -49.0, estreito: -49.0, intermediario: 0.00, espesso: 3.00, muito_espesso: 4.00 },
        sublevel_stoping:   { muito_estreito: -10, estreito: 1.00, intermediario: 3.00, espesso: 4.00, muito_espesso: 3.00 },
        sublevel_caving:    { muito_estreito: -49.0, estreito: -49.0, intermediario: 0.00, espesso: 4.00, muito_espesso: 4.00 },
        longwall:           { muito_estreito: 4.00, estreito: 3.00, intermediario: 0.00, espesso: -49.0, muito_espesso: -49.0 },
        room_and_pillar:    { muito_estreito: 4.00, estreito: 3.00, intermediario: 1.00, espesso: -49.0, muito_espesso: -49.0 },
        shrinkage_stoping:  { muito_estreito: 4.00, estreito: 4.00, intermediario: 0.00, espesso: -49.0, muito_espesso: -49.0 },
        cut_and_fill:       { muito_estreito: 3.00, estreito: 4.00, intermediario: 4.00, espesso: 1.00, muito_espesso: 0.00 },
        top_slicing:        { muito_estreito: 1.00, estreito: 1.00, intermediario: 0.00, espesso: 2.00, muito_espesso: 1.00 },
        square_set:         { muito_estreito: 4.00, estreito: 3.00, intermediario: 2.00, espesso: 0.00, muito_espesso: 0.00 },
    }


    let pesos_mergulho = {
        open_pit:           { plano: 3.00, intermediario: 3.00, inclinado: 1.00 },
        block_caving:       { plano: 3.00, intermediario: 2.00, inclinado: 4.00 },
        sublevel_stoping:   { plano: 2.00, intermediario: 1.00, inclinado: 4.00 },
        sublevel_caving:    { plano: 1.00, intermediario: 1.00, inclinado: 4.00 },
        longwall:           { plano: 4.00, intermediario: 0.00, inclinado: -49.0 },
        room_and_pillar:    { plano: 4.00, intermediario: 0.00, inclinado: -49.0 },
        shrinkage_stoping:  { plano: -49.0, intermediario: 0.00, inclinado: 4.00 },
        cut_and_fill:       { plano: 1.00, intermediario: 3.00, inclinado: 4.00 },
        top_slicing:        { plano: 4.00, intermediario: 2.00, inclinado: 0.00 },
        square_set:         { plano: 2.00, intermediario: 3.00, inclinado: 2.00 },
    }

    let pesos_distribuicao = {
        open_pit:           { uniforme: 3.00, gradacional: 3.00, erratico: 2.00 },
        block_caving:       { uniforme: 3.00, gradacional: 2.00, erratico: 2.00 },
        sublevel_stoping:   { uniforme: 4.00, gradacional: 4.00, erratico: 3.00 },
        sublevel_caving:    { uniforme: 3.00, gradacional: 2.00, erratico: 2.00 },
        longwall:           { uniforme: 4.00, gradacional: 1.00, erratico: 0.00 },
        room_and_pillar:    { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        shrinkage_stoping:  { uniforme: 3.00, gradacional: 2.00, erratico: 2.00 },
        cut_and_fill:       { uniforme: 2.00, gradacional: 3.00, erratico: 4.00 },
        top_slicing:        { uniforme: 2.00, gradacional: 1.00, erratico: 1.00 },
        square_set:         { uniforme: 0.00, gradacional: 1.00, erratico: 3.00 },
    }

    let pesos_profundidade = {
        open_pit:           { rasa: 4.00, intermediaria: 0.00, profunda: -49.0 },
        block_caving:       { rasa: 2.00, intermediaria: 3.00, profunda: 3.00 },
        sublevel_stoping:   { rasa: 3.00, intermediaria: 4.00, profunda: 2.00 },
        sublevel_caving:    { rasa: 3.00, intermediaria: 2.00, profunda: 2.00 },
        longwall:           { rasa: 2.00, intermediaria: 2.00, profunda: 3.00 },
        room_and_pillar:    { rasa: 3.00, intermediaria: 3.00, profunda: 2.00 },
        shrinkage_stoping:  { rasa: 3.00, intermediaria: 3.00, profunda: 2.00 },
        cut_and_fill:       { rasa: 2.00, intermediaria: 3.00, profunda: 4.00 },
        top_slicing:        { rasa: 2.00, intermediaria: 1.00, profunda: 1.00 },
        square_set:         { rasa: 1.00, intermediaria: 1.00, profunda: 2.00 },
    }

    let pesos_rmr_ob = {
        open_pit:           { muito_pobre: 3.00, pobre: 3.00, razoavel: 3.00, boa: 3.00, muito_boa: 3.00, },
        block_caving:       { muito_pobre: 4.00, pobre: 3.00, razoavel: 2.00, boa: 0.00, muito_boa: -49.0, },
        sublevel_stoping:   { muito_pobre: 1.00, pobre: 3.00, razoavel: 4.00, boa: 4.00, muito_boa: 4.00, },
        sublevel_caving:    { muito_pobre: 3.00, pobre: 4.00, razoavel: 3.00, boa: 1.00, muito_boa: 0.00, },
        longwall:           { muito_pobre: 6, pobre: 6, razoavel: 4.00, boa: 2.00, muito_boa: 2.00, },
        room_and_pillar:    { muito_pobre: -49.0, pobre: 0.00, razoavel: 3.00, boa: 5, muito_boa: 6, },
        shrinkage_stoping:  { muito_pobre: 0.00, pobre: 1.00, razoavel: 3.00, boa: 3.00, muito_boa: 3.00, },
        cut_and_fill:       { muito_pobre: 0.00, pobre: 1.00, razoavel: 2.00, boa: 3.00, muito_boa: 3.00, },
        top_slicing:        { muito_pobre: 3.00, pobre: 2.00, razoavel: 1.00, boa: 1.00, muito_boa: 0.00, },
        square_set:         { muito_pobre: 4.00, pobre: 4.00, razoavel: 1.00, boa: 0.00, muito_boa: 0.00, },
    }

    let pesos_rmr_hw = {
        open_pit:           { muito_pobre: 2.00, pobre: 3.00, razoavel: 4.00, boa: 4.00, muito_boa: 4.00 },
        block_caving:       { muito_pobre: 3.00, pobre: 3.00, razoavel: 3.00, boa: 2.00, muito_boa: 2.00 },
        sublevel_stoping:   { muito_pobre: -49.0, pobre: 0.00, razoavel: 3.00, boa: 4.00, muito_boa: 4.00 },
        sublevel_caving:    { muito_pobre: 4.00, pobre: 4.00, razoavel: 3.00, boa: 2.00, muito_boa: 2.00 },
        longwall:           { muito_pobre: 6, pobre: 5, razoavel: 4.00, boa: 3.00, muito_boa: 3.00 },
        room_and_pillar:    { muito_pobre: -49.0, pobre: 0.00, razoavel: 3.00, boa: 5, muito_boa: 6 },
        shrinkage_stoping:  { muito_pobre: 0.00, pobre: 0.00, razoavel: 2.00, boa: 4.00, muito_boa: 4.00 },
        cut_and_fill:       { muito_pobre: 3.00, pobre: 5, razoavel: 4.00, boa: 3.00, muito_boa: 3.00 },
        top_slicing:        { muito_pobre: 0.00, pobre: 0.00, razoavel: 2.00, boa: 3.00, muito_boa: 3.00 },
        square_set:         { muito_pobre: 4.00, pobre: 4.00, razoavel: 1.00, boa: 0.00, muito_boa: 0.00 },
    }

    let pesos_rmr_fw = {
        open_pit:           { muito_pobre: 2.00, pobre: 3.00, razoavel: 4.00, boa: 4.00, muito_boa: 4.00 },
        block_caving:       { muito_pobre: 3.00, pobre: 3.00, razoavel: 3.00, boa: 2.00, muito_boa: 2.00 },
        sublevel_stoping:   { muito_pobre: 0.00, pobre: 0.00, razoavel: 2.00, boa: 3.00, muito_boa: 3.00 },
        sublevel_caving:    { muito_pobre: 1.00, pobre: 2.00, razoavel: 3.00, boa: 3.00, muito_boa: 3.00 },
        longwall:           { muito_pobre: 0.00, pobre: 0.00, razoavel: 0.00, boa: 0.00, muito_boa: 0.00 },
        room_and_pillar:    { muito_pobre: 0.00, pobre: 0.00, razoavel: 0.00, boa: 0.00, muito_boa: 0.00 },
        shrinkage_stoping:  { muito_pobre: 0.00, pobre: 0.00, razoavel: 2.00, boa: 3.00, muito_boa: 3.00 },
        cut_and_fill:       { muito_pobre: 3.00, pobre: 3.00, razoavel: 2.00, boa: 2.00, muito_boa: 2.00 },
        top_slicing:        { muito_pobre: 0.00, pobre: 0.00, razoavel: 1.00, boa: 2.00, muito_boa: 2.00 },
        square_set:         { muito_pobre: 3.00, pobre: 1.00, razoavel: 0.00, boa: 0.00, muito_boa: 0.00 },
    }

    let pesos_rss_ob = {
        open_pit:           { muito_fraco: 4.00, fragil: 3.00, moderada: 3.00, resistente: 3.00 },
        block_caving:       { muito_fraco: 4.00, fragil: 2.00, moderada: 1.00, resistente: 0.00 },
        sublevel_stoping:   { muito_fraco: 0.00, fragil: 2.00, moderada: 4.00, resistente: 4.00 },
        sublevel_caving:    { muito_fraco: 2.00, fragil: 3.00, moderada: 3.00, resistente: 2.00 },
        longwall:           { muito_fraco: 6, fragil: 5, moderada: 2.00, resistente: 1.00 },
        room_and_pillar:    { muito_fraco: 0.00, fragil: 0.00, moderada: 3.00, resistente: 6 },
        shrinkage_stoping:  { muito_fraco: 0.00, fragil: 1.00, moderada: 3.00, resistente: 4.00 },
        cut_and_fill:       { muito_fraco: 0.00, fragil: 1.00, moderada: 3.00, resistente: 3.00 },
        top_slicing:        { muito_fraco: 3.00, fragil: 2.00, moderada: 1.00, resistente: 0.00 },
        square_set:         { muito_fraco: 4.00, fragil: 3.00, moderada: 1.00, resistente: 0.00 },
    }

    let pesos_rss_hw = {
        open_pit:           { muito_fraco: 3.00, fragil: 3.00, moderada: 4.00, resistente: 4.00 },
        block_caving:       { muito_fraco: 4.00, fragil: 3.00, moderada: 2.00, resistente: 0.00 },
        sublevel_stoping:   { muito_fraco: 0.00, fragil: 1.00, moderada: 4.00, resistente: 5 },
        sublevel_caving:    { muito_fraco: 4.00, fragil: 3.00, moderada: 2.00, resistente: 1.00 },
        longwall:           { muito_fraco: 6, fragil: 5, moderada: 2.00, resistente: 2.00 },
        room_and_pillar:    { muito_fraco: 0.00, fragil: 0.00, moderada: 2.00, resistente: 6 },
        shrinkage_stoping:  { muito_fraco: 0.00, fragil: 1.00, moderada: 3.00, resistente: 4.00 },
        cut_and_fill:       { muito_fraco: 3.00, fragil: 5, moderada: 4.00, resistente: 2.00 },
        top_slicing:        { muito_fraco: 3.00, fragil: 2.00, moderada: 2.00, resistente: 2.00 },
        square_set:         { muito_fraco: 4.00, fragil: 2.00, moderada: 1.00, resistente: 0.00 },
    }

    let pesos_rss_fw = {
        open_pit:           { muito_fraco: 3.00, fragil: 3.00, moderada: 4.00, resistente: 4.00 },
        block_caving:       { muito_fraco: 4.00, fragil: 3.00, moderada: 2.00, resistente: 1.00 },
        sublevel_stoping:   { muito_fraco: 0.00, fragil: 1.00, moderada: 3.00, resistente: 3.00 },
        sublevel_caving:    { muito_fraco: 1.00, fragil: 2.00, moderada: 2.00, resistente: 2.00 },
        longwall:           { muito_fraco: 0.00, fragil: 0.00, moderada: 0.00, resistente: 0.00 },
        room_and_pillar:    { muito_fraco: 0.00, fragil: 0.00, moderada: 0.00, resistente: 0.00 },
        shrinkage_stoping:  { muito_fraco: 0.00, fragil: 2.00, moderada: 3.00, resistente: 3.00 },
        cut_and_fill:       { muito_fraco: 1.00, fragil: 3.00, moderada: 2.00, resistente: 2.00 },
        top_slicing:        { muito_fraco: 2.00, fragil: 2.00, moderada: 1.00, resistente: 1.00 },
        square_set:         { muito_fraco: 3.00, fragil: 2.00, moderada: 0.00, resistente: 0.00 },
    }

    let preferencias = { //Cria o dicionário que armazenará o resultado do calculo
        open_pit: 1.00,
        block_caving: 1.00,
        sublevel_stoping: 1.00,
        sublevel_caving: 1.00,
        longwall: 1.00,
        room_and_pillar: 1.00,
        shrinkage_stoping: 1.00,
        cut_and_fill: 1.00,
        top_slicing: 1.00,
        square_set: 1.00,
    }

    //Calculo os valores de cada método de lavra e guarda no dicionário
    for (const key in preferencias) {
        preferencias[key] = 0
            + (pesos_forma_geral[key][geometria[0].value] * pesos["geo"])    //Forma geral
            + (pesos_mergulho[key][geometria[1].value] * pesos["geo"])      //Mergulho
            + (pesos_espessura[key][geometria[2].value] * pesos["geo"])     //Espessura
            + (pesos_distribuicao[key][geometria[3].value] * pesos["geo"]) //Distribuição
            + (pesos_profundidade[key][geometria[4].value] * pesos["geo"])   //Profundidade
            + (pesos_rss_ob[key][resultado_rss["rss_ob"]] * pesos["ob"])    //RSS Corpo de minério
            + (pesos_rss_hw[key][resultado_rss["rss_hw"]] * pesos["hw"])   //RSS Hanging Wall
            + (pesos_rss_fw[key][resultado_rss["rss_fw"]] * pesos["fw"])   //RSS Footwall
            + (pesos_rmr_ob[key][resultado_rmr["rmr_ob"]] * pesos["ob"])   //RMR Corpo de minério
            + (pesos_rmr_hw[key][resultado_rmr["rmr_hw"]] * pesos["hw"])   //RMR Hanging Wall
            + (pesos_rmr_fw[key][resultado_rmr["rmr_fw"]] * pesos["fw"])    //RMR Footwall
        preferencias[key] = preferencias[key].toFixed(2)
    }
    return preferencias //Retorna o dicionário com o valor atribuido a cada método de lavra para a função Calculo em Calculos.js
}

//Calculo o valor de cada método de lavra e retorna para Calculo em Calculos.js
function Preferencias_nicholas_81(geometria, resultado_rss, resultado_fracture_spacing, resultado_fracture_strenght) {
    let pesos_forma_geral = {
        open_pit:           { massivo: 3.00, tabular: 2.00, irregular: 3.00 },
        block_caving:       { massivo: 4.00, tabular: 2.00, irregular: 0.00 },
        sublevel_stoping:   { massivo: 2.00, tabular: 2.00, irregular: 1.00 },
        sublevel_caving:    { massivo: 3.00, tabular: 4.00, irregular: 1.00 },
        longwall:           { massivo: -49.0, tabular: 4.00, irregular: -49.0 },
        room_and_pillar:    { massivo: 0.00, tabular: 4.00, irregular: 2.00 },
        shrinkage_stoping:  { massivo: 2.00, tabular: 2.00, irregular: 1.00 },
        cut_and_fill:       { massivo: 0.00, tabular: 4.00, irregular: 2.00 },
        top_slicing:        { massivo: 3.00, tabular: 3.00, irregular: 0.00 },
        square_set:         { massivo: 0.00, tabular: 2.00, irregular: 4.00 },
    }

    let pesos_espessura = {
        open_pit:           { estreito: 2.00, intermediario: 3.00, espesso: 4.00, muito_espesso: 4.00 },
        block_caving:       { estreito: -49.0, intermediario: 0.00, espesso: 2.00, muito_espesso: 4.00 },
        sublevel_stoping:   { estreito: 1.00, intermediario: 2.00, espesso: 4.00, muito_espesso: 3.00 },
        sublevel_caving:    { estreito: -49.0, intermediario: 0.00, espesso: 4.00, muito_espesso: 4.00 },
        longwall:           { estreito: 4.00, intermediario: 0.00, espesso: -49.0, muito_espesso: -49.0 },
        room_and_pillar:    { estreito: 4.00, intermediario: 2.00, espesso: -49.0, muito_espesso: -49.0 },
        shrinkage_stoping:  { estreito: 1.00, intermediario: 2.00, espesso: 4.00, muito_espesso: 3.00 },
        cut_and_fill:       { estreito: 4.00, intermediario: 4.00, espesso: 0.00, muito_espesso: 0.00 },
        top_slicing:        { estreito: -49.0, intermediario: 0.00, espesso: 3.00, muito_espesso: 4.00 },
        square_set:         { estreito: 4.00, intermediario: 4.00, espesso: 1.00, muito_espesso: 1.00 },
    }


    let pesos_mergulho = {
        open_pit:           { plano: 3.00, intermediario: 3.00, inclinado: 4.00 },
        block_caving:       { plano: 3.00, intermediario: 2.00, inclinado: 4.00 },
        sublevel_stoping:   { plano: 2.00, intermediario: 1.00, inclinado: 4.00 },
        sublevel_caving:    { plano: 1.00, intermediario: 1.00, inclinado: 4.00 },
        longwall:           { plano: 4.00, intermediario: 0.00, inclinado: -49.0 },
        room_and_pillar:    { plano: 4.00, intermediario: 1.00, inclinado: 0.00 },
        shrinkage_stoping:  { plano: 2.00, intermediario: 1.00, inclinado: 4.00 },
        cut_and_fill:       { plano: 0.00, intermediario: 3.00, inclinado: 4.00 },
        top_slicing:        { plano: 4.00, intermediario: 1.00, inclinado: 2.00 },
        square_set:         { plano: 2.00, intermediario: 3.00, inclinado: 3.00 },
    }

    let pesos_distribuicao = {
        open_pit:           { uniforme: 3.00, gradacional: 3.00, erratico: 3.00 },
        block_caving:       { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        sublevel_stoping:   { uniforme: 3.00, gradacional: 3.00, erratico: 1.00 },
        sublevel_caving:    { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        longwall:           { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        room_and_pillar:    { uniforme: 3.00, gradacional: 3.00, erratico: 3.00 },
        shrinkage_stoping:  { uniforme: 3.00, gradacional: 2.00, erratico: 1.00 },
        cut_and_fill:       { uniforme: 3.00, gradacional: 3.00, erratico: 3.00 },
        top_slicing:        { uniforme: 4.00, gradacional: 2.00, erratico: 0.00 },
        square_set:         { uniforme: 3.00, gradacional: 3.00, erratico: 3.00 },
    }

    let pesos_rss_ob = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 4.00, moderada: 1.00, forte: 1.00 },
        sublevel_stoping:   { fraca: -49.0, moderada: 3.00, forte: 4.00 },
        sublevel_caving:    { fraca: 0.00, moderada: 3.00, forte: 3.00 },
        longwall:           { fraca: 4.00, moderada: 1.00, forte: 0.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 3.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 1.00, moderada: 3.00, forte: 4.00 },
        cut_and_fill:       { fraca: 3.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        square_set:         { fraca: 4.00, moderada: 1.00, forte: 1.00 },
    }

    let pesos_rss_hw = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        sublevel_stoping:   { fraca: -49.0, moderada: 3.00, forte: 4.00 },
        sublevel_caving:    { fraca: 3.00, moderada: 2.00, forte: 1.00 },
        longwall:           { fraca: 4.00, moderada: 2.00, forte: 0.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 3.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        cut_and_fill:       { fraca: 3.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        square_set:         { fraca: 3.00, moderada: 2.00, forte: 2.00 },
    }

    let pesos_rss_fw = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        sublevel_stoping:   { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        sublevel_caving:    { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        longwall:           { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        cut_and_fill:       { fraca: 4.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        square_set:         { fraca: 4.00, moderada: 2.00, forte: 2.00 },
    }

    let fracture_spacing_ob = {
        open_pit:           { perto: 2.00, muito_perto: 3.00, longe: 4.00, muito_longe: 4.00 },
        block_caving:       { perto: 4.00, muito_perto: 4.00, longe: 3.00, muito_longe: 0.00 },
        sublevel_stoping:   { perto: 0.00, muito_perto: 0.00, longe: 1.00, muito_longe: 4.00 },
        sublevel_caving:    { perto: 0.00, muito_perto: 2.00, longe: 4.00, muito_longe: 4.00 },
        longwall:           { perto: 4.00, muito_perto: 4.00, longe: 0.00, muito_longe: 0.00 },
        room_and_pillar:    { perto: 0.00, muito_perto: 1.00, longe: 2.00, muito_longe: 4.00 },
        shrinkage_stoping:  { perto: 0.00, muito_perto: 1.00, longe: 3.00, muito_longe: 4.00 },
        cut_and_fill:       { perto: 3.00, muito_perto: 3.00, longe: 2.00, muito_longe: 2.00 },
        top_slicing:        { perto: 1.00, muito_perto: 1.00, longe: 2.00, muito_longe: 4.00 },
        square_set:         { perto: 4.00, muito_perto: 4.00, longe: 2.00, muito_longe: 1.00 },
    }
    let fracture_spacing_hw = {
        open_pit:           { perto: 2.00, muito_perto: 3.00, longe: 4.00, muito_longe: 4.00 },
        block_caving:       { perto: 3.00, muito_perto: 4.00, longe: 3.00, muito_longe: 0.00 },
        sublevel_stoping:   { perto: -49.0, muito_perto: 0.00, longe: 1.00, muito_longe: 4.00 },
        sublevel_caving:    { perto: 3.00, muito_perto: 4.00, longe: 3.00, muito_longe: 1.00 },
        longwall:           { perto: 4.00, muito_perto: 4.00, longe: 3.00, muito_longe: 0.00 },
        room_and_pillar:    { perto: 0.00, muito_perto: 1.00, longe: 2.00, muito_longe: 4.00 },
        shrinkage_stoping:  { perto: 4.00, muito_perto: 4.00, longe: 3.00, muito_longe: 0.00 },
        cut_and_fill:       { perto: 3.00, muito_perto: 3.00, longe: 2.00, muito_longe: 2.00 },
        top_slicing:        { perto: 3.00, muito_perto: 3.00, longe: 3.00, muito_longe: 0.00 },
        square_set:         { perto: 3.00, muito_perto: 3.00, longe: 2.00, muito_longe: 2.00 },
    }
    let fracture_spacing_fw = {
        open_pit:           { perto: 2.00, muito_perto: 3.00, longe: 4.00, muito_longe: 4.00 },
        block_caving:       { perto: 1.00, muito_perto: 3.00, longe: 3.00, muito_longe: 3.00 },
        sublevel_stoping:   { perto: 0.00, muito_perto: 0.00, longe: 2.00, muito_longe: 4.00 },
        sublevel_caving:    { perto: 0.00, muito_perto: 1.00, longe: 3.00, muito_longe: 4.00 },
        longwall:           { perto: 1.00, muito_perto: 2.00, longe: 4.00, muito_longe: 3.00 },
        room_and_pillar:    { perto: 0.00, muito_perto: 1.00, longe: 3.00, muito_longe: 3.00 },
        shrinkage_stoping:  { perto: 2.00, muito_perto: 3.00, longe: 3.00, muito_longe: 2.00 },
        cut_and_fill:       { perto: 4.00, muito_perto: 4.00, longe: 2.00, muito_longe: 2.00 },
        top_slicing:        { perto: 1.00, muito_perto: 3.00, longe: 3.00, muito_longe: 3.00 },
        square_set:         { perto: 4.00, muito_perto: 4.00, longe: 2.00, muito_longe: 2.00 },
    }

    let fracture_strenght_ob = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 4.00, moderada: 1.00, forte: 1.00 },
        sublevel_stoping:   { fraca: -49.0, moderada: 3.00, forte: 4.00 },
        sublevel_caving:    { fraca: 0.00, moderada: 3.00, forte: 3.00 },
        longwall:           { fraca: 4.00, moderada: 1.00, forte: 0.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 3.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 1.00, moderada: 3.00, forte: 4.00 },
        cut_and_fill:       { fraca: 3.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        square_set:         { fraca: 4.00, moderada: 1.00, forte: 1.00 },
    }

    let fracture_strenght_hw = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        sublevel_stoping:   { fraca: -49.0, moderada: 3.00, forte: 4.00 },
        sublevel_caving:    { fraca: 3.00, moderada: 2.00, forte: 1.00 },
        longwall:           { fraca: 4.00, moderada: 2.00, forte: 0.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 3.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        cut_and_fill:       { fraca: 3.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 4.00, moderada: 2.00, forte: 1.00 },
        square_set:         { fraca: 3.00, moderada: 2.00, forte: 2.00 },
    }

    let fracture_strenght_fw = {
        open_pit:           { fraca: 3.00, moderada: 4.00, forte: 4.00 },
        block_caving:       { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        sublevel_stoping:   { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        sublevel_caving:    { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        longwall:           { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        room_and_pillar:    { fraca: 0.00, moderada: 2.00, forte: 4.00 },
        shrinkage_stoping:  { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        cut_and_fill:       { fraca: 4.00, moderada: 2.00, forte: 2.00 },
        top_slicing:        { fraca: 2.00, moderada: 3.00, forte: 3.00 },
        square_set:         { fraca: 4.00, moderada: 2.00, forte: 2.00 },
    }

    //Cria o dicionário que armazenará o resultado do calculo
    let preferencias = {
        "open_pit": 1.00,
        "block_caving": 1.00,
        "sublevel_stoping": 1.00,
        "sublevel_caving": 1.00,
        "longwall": 1.00,
        "room_and_pillar": 1.00,
        "shrinkage_stoping": 1.00,
        "cut_and_fill": 1.00,
        "top_slicing": 1.00,
        "square_set": 1.00,
    }

    //Calculo os valores de cada método de lavra e guarda no dicionário
    for (const key in preferencias) {
        preferencias[key] = 0
            + pesos_forma_geral[key][geometria[0].value]   //Forma geral
            + pesos_mergulho[key][geometria[1].value]       //Mergulho
            + pesos_espessura[key][geometria[2].value]      //Espessura
            + pesos_distribuicao[key][geometria[3].value]   //Distribuição
            + pesos_rss_ob[key][resultado_rss["rss_ob"]]    //RSS Corpo de minério
            + pesos_rss_hw[key][resultado_rss["rss_hw"]]    //RSS Hanging Wall
            + pesos_rss_fw[key][resultado_rss["rss_fw"]]    //RSS Footwall
            + fracture_spacing_ob[key][resultado_fracture_spacing[0].value]    //Fracture Spacing Corpo de minério
            + fracture_spacing_hw[key][resultado_fracture_spacing[1].value]    //Fracture Spacing Hanging Wall
            + fracture_spacing_fw[key][resultado_fracture_spacing[2].value]    //Fracture SpacingFootwall
            + fracture_strenght_ob[key][resultado_fracture_strenght[0].value]  //Fracture Strenght Corpo de minério
            + fracture_strenght_hw[key][resultado_fracture_strenght[1].value]  //Fracture Strenght Hanging Wall
            + fracture_strenght_fw[key][resultado_fracture_strenght[2].value]  //Fracture Strenght Footwall
        preferencias[key] = preferencias[key].toFixed(2)
    }

    //Retorna o dicionário com o valor atribuido a cada método de lavra para a função Calculo em Calculos.js
    return preferencias
}

