function inss(request, response) {
  const contribuicao = [
    { faixa: 1, contrInicio: 0, contrFim: 1320.0, aliq: 0.075, agreg: 0 },
    { faixa: 2, contrInicio: 1320.01, contrFim: 2571.29, aliq: 0.09, agreg: 0 },
    { faixa: 3, contrInicio: 2571.3, contrFim: 3856.94, aliq: 0.12, agreg: 0 },
    { faixa: 4, contrInicio: 3856.95, contrFim: 7507.49, aliq: 0.14, agreg: 0 },
  ];

  let acumulado = 0;
  contribuicao.forEach((faixa) => {
    faixa.agreg = acumulado;
    acumulado += (faixa.contrFim - faixa.contrInicio) * faixa.aliq;
  });

  response.status(200).json({
    ano: 2023,
    contribuicao,
  });
}

export default inss;
