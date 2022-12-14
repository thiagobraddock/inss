function projects(request, response) {
  const projects = [
    {
      id: 1,
      module: 'MY WALLET',
      description:
        'uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de: \nAdicionar, remover e editar um gasto, \nVisualizar uma tabelas com seus gastos, \nVisualizar o total de gastos convertidos para uma moeda de escolha;',
      color: '#BDD5FF',
      technologies: ['React', 'Redux'],
      image: 'https://imgur.com/jF6UxQh.png',
      link: 'https://github.com/',
    },
    {
      id: 2,
      module: 'LIVRO DE RECEITAS',
      description:
        'Nessa aplicação é possível, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks',
      color: '#BDD5FF',
      technologies: ['React', 'Context', 'Custom Hooks'],
      image: 'https://imgur.com/Duifrn5.png',
      link: 'https://github.com',
    },
    {
      id: 3,
      module: 'MEU BLOGZAO',
      description:
        'Blog criado em 2010 com intenção de disseminar notícias e conhecimentos sobre programação',
      color: '#BDD5FF',
      technologies: ['Blogspot', 'Fireworks'],
      image: 'https://imgur.com/TyrZL2D.png',
      link: 'http://profthiagobraddock.blogspot.com/',
    },
  ];

  setTimeout(() => {
    response.status(200).json({
      projects,
    });
  }, 1000);
}

export default course;
