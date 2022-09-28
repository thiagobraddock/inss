function inss(request, response) {
  const contribuicao = [
    { faixa: 1, contrInicio: 0, contrFim: 1212.0, aliq: 0.075, agreg: 0 },
    { faixa: 2, contrInicio: 1212.01, contrFim: 2427.35, aliq: 0.09, agreg: 0 },
    { faixa: 3, contrInicio: 2427.36, contrFim: 3641.03, aliq: 0.12, agreg: 0 },
    { faixa: 4, contrInicio: 3641.04, contrFim: 7087.22, aliq: 0.14, agreg: 0 },
  ];
  let acumulado = 0;
  contribuicao.forEach((faixa) => {
    faixa.agreg = acumulado;
    acumulado += (faixa.contrFim - faixa.contrInicio) * faixa.aliq;
  });

  response.status(200).json({
    ano: 2022,
    contribuicao,
  });
}

export default inss;
