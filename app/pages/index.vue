<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <main class="relative w-full max-w-2xl glass-effect p-8 md:p-12 overflow-hidden shadow-2xl rounded-box">
      <!-- Background Accents -->
      <div class="absolute inset-0 pointer-events-none opacity-20">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary blur-[100px] rounded-box"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary blur-[100px] rounded-box"></div>
      </div>

      <div class="relative z-10">
        <header class="flex flex-col md:flex-row items-start gap-6 mb-8">
          <!-- Logo -->
          <div class="p-4 flex items-center justify-center glass-effect bg-gradient-to-br from-primary/10 to-secondary/10 rounded-field">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-16 h-16"
              viewBox="0 0 1300 1300"
            >
              <defs>
                <linearGradient id="logoGradient" x1="531.81" y1="765.53" x2="1239.28" y2="57.35" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="var(--color-primary)" />
                  <stop offset="1" stop-color="var(--color-secondary)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#logoGradient)"
                d="M219.59 605.89l337.84 0c75.28,0 136.67,61.4 136.67,136.67l0 337.84c0,18.81 10.73,34.88 28.12,42.09 17.39,7.2 36.34,3.43 49.65,-9.87l466.7 -466.7c26.62,-26.61 40.03,-59 40.03,-96.64l0 -391.22c0,-75.28 -61.39,-136.67 -136.67,-136.67l-391.21 0c-37.64,0 -70.03,13.42 -96.65,40.03l-466.69 466.7c-13.31,13.31 -17.08,32.26 -9.88,49.65 7.2,17.39 23.27,28.13 42.09,28.13zm-75.23 666.81l380.62 -140.69c36.46,-13.48 59.53,-46.59 59.53,-85.46l0 -258.18c0,-40.15 -32.75,-72.89 -72.89,-72.89l-258.17 0c-38.87,0 -71.99,23.07 -85.46,59.53l-140.67 380.64c-12.62,34.15 -4.7,70.28 21.04,96.02 25.74,25.74 61.87,33.65 96.02,21.04z"
              />
            </svg>
          </div>

          <div class="flex-1">
            <div class="badge badge-outline gap-2 py-3 px-4 mb-3 border-base-content/20 text-base-content/70">
              <span class="w-2 h-2 rounded-box bg-primary shadow-[0_0_12px_var(--color-primary)]"></span>
              Em breve
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-base-content leading-tight mb-2">
              Apptime Academy
            </h1>
            <p class="text-lg text-base-content/70 font-medium font-archivo">
              Tudo o que você precisa para lançar e validar suas ideias digitais, sem perder tempo. 
            </p>
          </div>
        </header>

        <div class="mt-8">
          <a
            href="https://wa.me/5511975205644"
            target="_blank"
            class="btn btn-primary btn-lg rounded-field px-8 font-bold text-lg hover:-translate-y-0.5 transition-transform brand-gradient border-none text-primary-content shadow-[0_12px_35px_rgba(255,0,174,0.35)]"
          >
            Fale Conosco
            <span class="text-xl">→</span>
          </a>
        </div>

        <footer class="mt-8 pt-8 border-t border-base-content/10">
          <p class="text-sm text-base-content/60">
            Dúvidas? Visite nosso
            <a
              href="https://apptime.ai/help"
              target="_blank"
              class="link link-hover text-base-content/80 font-semibold"
            >
              suporte
            </a>.
          </p>
        </footer>
      </div>
    </main>
  </div>
</template>
