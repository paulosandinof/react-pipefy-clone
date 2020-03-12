export default function loadLists() {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar NodeJS',
          labels: ['#7159c1', '#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        },
        {
          id: 2,
          content: 'Estudar Java',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        },
        {
          id: 3,
          content: 'Estudar Spring',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        },
        {
          id: 4,
          content: 'Fazer Atividade de Engenharia de Linguagens',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        },
        {
          id: 5,
          content: 'Aprender sobre autenticação, JWT e Refresh Token com NodeJS',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        },
      ],
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        },
      ],
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Criar Model de Avisos no projeto de Projeto Detalhado de Software',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        },
        {
          id: 8,
          content: 'Assistir vídeo aula sobre GraphQL com NodeJS',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        },
        {
          id: 9,
          content: 'Ajustar aplicação Gitcompare',
          labels: [],
        },
      ],
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Fazer atividade de Teste de Software',
          labels: [],
        },
        {
          id: 12,
          content: 'Fazer deploy da aplicação de Web I',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Ajustar CRUDs no projeto de Projeto Detalhado de Software',
          labels: ['#7159c1'],
        },
      ],
    },
  ];
}
