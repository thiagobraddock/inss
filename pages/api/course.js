function course(request, response) {
  const course = [
    {
      modulo: 'Fundamentos',
      descricao:
        'Nosso primeiro módulo te ensinará tudo que você precisa saber para iniciar sua carreira no mundo do desenvolvimento Web, virando uma pessoa preparada para os módulos de front-end e back-end. Vamos te guiar, etapa a etapa, por toda essa jornada!',
      color: '#BDD5FF',
    },
    {
      modulo: 'Front-end',
      descricao:
        'Neste módulo, você vai aprender as técnicas e ferramentas mais atuais para desenvolver um código de front-end que seja rápido, bonito e testável.',
      color: '#A0F046',
    },
    {
      modulo: 'Back-end',
      descricao:
        'Neste módulo, você vai aprender como desenvolver um código de back-end robusto, limpo, escalável e seguro, dominando o uso de bancos de dados, a construção de APIs com testes automatizados.',
      color: '#FCF1CF',
    },
    {
      modulo: 'Ciência da Computação',
      descricao:
        'Aqui você aprenderá os principais conceitos da Ciência da Computação que são aplicados no dia a dia do desenvolvimento de software e como transformar a teoria em prática, analisando algoritmos e escolhendo as melhores estruturas de dados para resolver os problemas!',
      color: '#F3C5F3',
    },
  ];

  setTimeout(() => {
    response.status(200).json({
      course,
    });
  }, 2000);
}

export default course;
