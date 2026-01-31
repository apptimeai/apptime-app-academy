// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        'data-theme': 'apptime'
      },
      title: 'Apptime Academy | Crie sua presença digital do jeito certo',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Aprenda a montar seu site essencial, organizado e profissional, mesmo sem saber programar. Valide ideias, projetos e negócios com a Apptime Academy.' },
        { name: 'keywords', content: 'Apptime Academy, presença digital, site essencial, playbook, marketing digital, landing page, validacao, negocios' },
        { property: 'og:title', content: 'Apptime Academy | Crie sua presença digital do jeito certo' },
        { property: 'og:description', content: 'Aprenda a montar seu site essencial, organizado e profissional, mesmo sem saber programar. Valide ideias, projetos e negócios com a Apptime Academy.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Apptime Academy | Crie sua presença digital do jeito certo' },
        { name: 'twitter:description', content: 'Aprenda a montar seu site essencial, organizado e profissional, mesmo sem saber programar. Valide ideias, projetos e negócios com a Apptime Academy.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;900&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      ],
      script: [
        {
          src: 'https://cdn.apptime.app/apptime.js',
        },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-JZG2V9QZ4C', async: true },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-JZG2V9QZ4C');
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})
