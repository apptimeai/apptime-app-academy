const { createApp, ref } = Vue;

createApp({
  setup() {
    // Dados das Ferramentas
    const tools = ref([
      {
        name: 'ChatGPT Plus',
        desc: 'O assistente de linguagem natural mais avançado para produtividade.',
        icon: 'fa-solid fa-message',
        bgClass: 'bg-emerald-500/20 text-emerald-400',
      },
      {
        name: 'Midjourney',
        desc: 'Crie artes impressionantes a partir de texto em segundos.',
        icon: 'fa-solid fa-palette',
        bgClass: 'bg-indigo-500/20 text-indigo-400',
      },
      {
        name: 'Notion AI',
        desc: 'Organize sua vida e automatize anotações inteligentes.',
        icon: 'fa-solid fa-book-open',
        bgClass: 'bg-slate-500/20 text-slate-200',
      },
      {
        name: 'GitHub Copilot',
        desc: 'Programe mais rápido com sugestões de código em tempo real.',
        icon: 'fa-solid fa-code',
        bgClass: 'bg-purple-500/20 text-purple-400',
      },
    ]);

    // Dados dos Cursos
    const courses = ref([
      {
        title: 'Mestre do ChatGPT',
        desc: 'Aprenda engenharia de prompt e domine o mercado.',
        price: 'R$ 97,00',
        level: 'Iniciante',
        image:
          'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
      },
      {
        title: 'IA para Negócios',
        desc: 'Automatize processos e escale sua empresa com IA.',
        price: 'R$ 197,00',
        level: 'Intermediário',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      },
      {
        title: 'Python AI Fullstack',
        desc: 'Crie seus próprios aplicativos inteligentes do zero.',
        price: 'R$ 297,00',
        level: 'Avançado',
        image:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
      },
    ]);

    // Métodos
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      tools,
      courses,
      scrollTo,
    };
  },
}).mount('#app');
