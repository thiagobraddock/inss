function course(request, response) {
  const course = [
    {
      id: 'fundamentals',
      module: 'Fundamentos',
      description:
        'Nosso primeiro módulo te ensinará tudo que você precisa saber para iniciar sua carreira no mundo do desenvolvimento Web, virando uma pessoa preparada para os módulos de front-end e back-end. Vamos te guiar, etapa a etapa, por toda essa jornada!',
      color: '#BDD5FF',
      section: [
        { 1.1: 'Unit & Bash - Parte 1' },
        { 1.2: 'Unit & Bash - Parte 2' },
        { 2.1: 'Git - O que é e pra que serve' },
        { 2.2: 'Git & GitHub - Entendendo os comandos' },
      ],
    },
    {
      id: 'front',
      module: 'Front-end',
      description:
        'Neste módulo, você vai aprender as técnicas e ferramentas mais atuais para desenvolver um código de front-end que seja rápido, bonito e testável.',
      color: '#A0F046',
      section: [
        { 1.1: 'JavaScript Assíncrono e Callbacks' },
        { 1.2: 'JavaScript Assíncrono - Fetch ' },
        { 2.1: '“Hello, world!” no React!' },
        { 2.2: 'Componentes React' },
      ],
    },
    {
      id: 'back',
      module: 'Back-end',
      description:
        'Neste módulo, você vai aprender como desenvolver um código de back-end robusto, limpo, escalável e seguro, dominando o uso de bancos de dados, a construção de APIs com testes automatizados.',
      color: '#FCF1CF',
      section: [
        { 1.1: 'Utilizando Containers - Docker' },
        { 1.2: 'Manipulando Imagens no Docker' },
        { 2.1: 'Banco de dados SQL' },
        { 2.2: 'Encontrando dados em um banco de dados' },
      ],
    },
    {
      id: 'cs',
      module: 'Ciência da Computação',
      description:
        'Aqui você aprenderá os principais conceitos da Ciência da Computação que são aplicados no dia a dia do desenvolvimento de software e como transformar a teoria em prática, analisando algoritmos e escolhendo as melhores estruturas de dados para resolver os problemas!',
      color: '#F3C5F3',
      section: [
        { 1.1: 'Aprendendo Python' },
        { 1.2: 'Entrada e Saída de dados' },
        { 2.1: 'P.O.O em Python' },
        { 2.2: 'Padrões - Iterador, Adapter, Strategy' },
      ],
    },
  ];

  setTimeout(() => {
    response.status(200).json({
      course,
    });
  }, 2000);
}

export default course;
