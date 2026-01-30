<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-transparent">
    <main class="relative w-full max-w-[720px] glass-effect p-8 md:p-12 overflow-hidden shadow-2xl">
      <!-- Background Accents -->
      <div class="absolute inset-0 pointer-events-none opacity-20">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ff7f00] blur-[100px] rounded-full"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff00ae] blur-[100px] rounded-full"></div>
      </div>

      <div class="relative z-10">
        <header class="flex flex-col md:flex-row items-start gap-6 mb-8">
          <!-- Logo -->
          <div class="p-4 flex items-center justify-center glass-effect bg-gradient-to-br from-[#ff7f00]/15 to-[#ff00ae]/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-16 h-16"
              viewBox="0 0 1300 1300"
            >
              <defs>
                <linearGradient id="logoGradient" x1="531.81" y1="765.53" x2="1239.28" y2="57.35" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#ff7f00" />
                  <stop offset="1" stop-color="#ff00ae" />
                </linearGradient>
              </defs>
              <path
                fill="url(#logoGradient)"
                d="M219.59 605.89l337.84 0c75.28,0 136.67,61.4 136.67,136.67l0 337.84c0,18.81 10.73,34.88 28.12,42.09 17.39,7.2 36.34,3.43 49.65,-9.87l466.7 -466.7c26.62,-26.61 40.03,-59 40.03,-96.64l0 -391.22c0,-75.28 -61.39,-136.67 -136.67,-136.67l-391.21 0c-37.64,0 -70.03,13.42 -96.65,40.03l-466.69 466.7c-13.31,13.31 -17.08,32.26 -9.88,49.65 7.2,17.39 23.27,28.13 42.09,28.13zm-75.23 666.81l380.62 -140.69c36.46,-13.48 59.53,-46.59 59.53,-85.46l0 -258.18c0,-40.15 -32.75,-72.89 -72.89,-72.89l-258.17 0c-38.87,0 -71.99,23.07 -85.46,59.53l-140.67 380.64c-12.62,34.15 -4.7,70.28 21.04,96.02 25.74,25.74 61.87,33.65 96.02,21.04z"
              />
            </svg>
          </div>

          <div class="flex-1">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 glass-effect text-sm text-[#f5f5f7]/70 mb-3">
              <span class="w-2 h-2 rounded-full brand-gradient shadow-[0_0_12px_rgba(255,127,0,0.6)]"></span>
              Starter Project
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-[#f5f5f7] leading-tight mb-2">
              Apptime Starter
            </h1>
            <p class="text-lg text-[#f5f5f7]/70 font-medium">
              Your modern foundation for high-performance web applications.
            </p>
          </div>
        </header>

        <div class="mt-8">
          <a
            href="https://apptime.ai"
            target="_blank"
            class="inline-flex items-center gap-2 px-8 py-3 brand-gradient text-[#0c0c12] font-bold text-lg transition-transform hover:-translate-y-0.5 shadow-[0_12px_35px_rgba(255,0,174,0.35)] hover:shadow-[0_16px_40px_rgba(255,0,174,0.5)]"
          >
            Get Started
            <span class="text-xl">→</span>
          </a>
        </div>

        <footer class="mt-8 pt-8 border-t border-[#f5f5f7]/10">
          <p class="text-sm text-[#f5f5f7]/60">
            Need help? Visit our
            <a
              href="https://apptime.ai/docs"
              target="_blank"
              class="text-[#f5f5f7]/80 hover:text-[#f5f5f7] border-b border-dashed border-[#f5f5f7]/30 transition-colors"
            >
              documentation
            </a>.
          </p>
        </footer>
      </div>
    </main>
  </div>
</template>

<style>
/* Custom local styles if needed */
</style>
