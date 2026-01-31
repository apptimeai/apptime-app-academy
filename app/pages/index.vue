<template>
  <div class="min-h-screen flex flex-col font-archivo relative overflow-x-hidden">
    <!-- Main Content -->
     <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-[-20%] left-[-10%] w-[50vh] h-[50vh] bg-primary/10 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[50vh] h-[50vh] bg-secondary/10 blur-[120px] rounded-full"></div>
      </div>

    <main class="relative z-10 w-full max-w-5xl mx-auto px-4 py-8 md:py-16 flex flex-col gap-16 md:gap-24">
      
      <!-- HERO SECTION -->
      <section class="text-center flex flex-col items-center gap-6 animate-fade-in-up">
         <!-- Logo -->
        <div class="w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center glass-effect bg-primary/5 rounded-2xl shadow-[0_0_30px_rgba(217,38,255,0.2)] border border-primary/20">
             <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 1300 1300">
              <defs>
                <linearGradient id="logoGradient" x1="531.81" y1="765.53" x2="1239.28" y2="57.35" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="var(--color-primary)" />
                  <stop offset="1" stop-color="var(--color-secondary)" />
                </linearGradient>
              </defs>
              <path fill="url(#logoGradient)" d="M219.59 605.89l337.84 0c75.28,0 136.67,61.4 136.67,136.67l0 337.84c0,18.81 10.73,34.88 28.12,42.09 17.39,7.2 36.34,3.43 49.65,-9.87l466.7 -466.7c26.62,-26.61 40.03,-59 40.03,-96.64l0 -391.22c0,-75.28 -61.39,-136.67 -136.67,-136.67l-391.21 0c-37.64,0 -70.03,13.42 -96.65,40.03l-466.69 466.7c-13.31,13.31 -17.08,32.26 -9.88,49.65 7.2,17.39 23.27,28.13 42.09,28.13zm-75.23 666.81l380.62 -140.69c36.46,-13.48 59.53,-46.59 59.53,-85.46l0 -258.18c0,-40.15 -32.75,-72.89 -72.89,-72.89l-258.17 0c-38.87,0 -71.99,23.07 -85.46,59.53l-140.67 380.64c-12.62,34.15 -4.7,70.28 21.04,96.02 25.74,25.74 61.87,33.65 96.02,21.04z" />
            </svg>
        </div>

        <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tighter">
          <span class="block text-base-content mb-2 tracking-tighter">Apptime Academy</span>
          <span class="brand-text-gradient block text-2xl md:text-4xl font-bold mt-2 font-body">Crie sua presença digital do jeito certo — simples, rápida e que vende</span>
        </h1>
        
        <p class="text-lg md:text-xl text-base-content/80 max-w-2xl leading-relaxed">
          👉 Aprenda a montar seu site essencial, organizado e profissional, mesmo sem saber programar. <br class="hidden md:block" />
          👉 Ideal para quem quer parar de improvisar e começar a validar ideias, projetos e negócios.
        </p>

        <a href="#offer" class="btn btn-primary btn-lg rounded-none px-10 font-bold font-mono text-lg hover:-translate-y-1 transition-all border-none text-black shadow-[0_0_30px_rgba(217,38,255,0.4)] mt-4 skew-x-[-10deg]">
          <span class="skew-x-[10deg]">QUERO COMEÇAR AGORA</span>
        </a>
      </section>

      <!-- PROBLEM SECTION -->
      <section class="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80"></div>
        <h2 class="text-3xl font-bold mb-8 text-center"><span class="text-red-500 font-mono">[ ERROR ]</span> O problema</h2>
        
        <div class="grid md:grid-cols-2 gap-10">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-base-content/90 border-b border-base-content/10 pb-2">Todo mundo hoje tem:</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3"><span class="text-2xl">📱</span> Instagram</li>
              <li class="flex items-center gap-3"><span class="text-2xl">💬</span> WhatsApp</li>
              <li class="flex items-center gap-3"><span class="text-2xl">🔗</span> Algum link jogado na bio</li>
            </ul>
          </div>
          
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-base-content/90 border-b border-base-content/10 pb-2">Mas quase ninguém tem:</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-red-400"><i class="fa-solid fa-xmark text-xl"></i> Organização</li>
              <li class="flex items-center gap-3 text-red-400"><i class="fa-solid fa-xmark text-xl"></i> Clareza</li>
              <li class="flex items-center gap-3 text-red-400"><i class="fa-solid fa-xmark text-xl"></i> Estrutura pra vender ou captar leads</li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-base-content/10 text-center">
            <p class="text-xl font-medium text-base-content/80">Resultado: <span class="text-red-400 font-bold">Você até chama atenção… mas não converte.</span></p>
            <p class="mt-2 text-base-content/60">A Apptime Academy existe pra resolver exatamente isso.</p>
        </div>
      </section>

      <!-- SOLUTION SECTION -->
      <section class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
            <div class="badge badge-outline badge-lg border-primary text-primary px-4 py-3">💡 A Solução</div>
            <h2 class="text-3xl md:text-4xl font-bold">O que é a Apptime Academy?</h2>
            <p class="text-lg text-base-content/80 leading-relaxed">
                A Apptime Academy é o braço educacional da Apptime. Aqui você aprende só o que importa, sem enrolação, para:
            </p>
            <ul class="space-y-4 text-base-content/80">
                <li class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm shrink-0 mt-0.5">✓</span>
                    Criar sua presença digital mínima e eficiente
                </li>
                 <li class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm shrink-0 mt-0.5">✓</span>
                    Organizar links, ofertas e informações
                </li>
                 <li class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm shrink-0 mt-0.5">✓</span>
                    Usar IA e ferramentas modernas a seu favor
                </li>
            </ul>
            <p class="font-medium text-primary">Tudo pensado para quem quer resultado real, não só “mais um link na bio”.</p>
        </div>
        <div class="relative group">
            <div class="absolute inset-0 bg-primary/20 blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl"></div>
            <div class="glass-effect p-8 rounded-xl border border-primary/20 relative overflow-hidden h-full flex items-center justify-center min-h-[300px]">
                <!-- Abstract Representation of Structure -->
                <div class="flex flex-col gap-4 w-full max-w-[200px] opacity-80">
                    <div class="h-4 w-1/2 bg-base-content/20 rounded-full"></div>
                     <div class="h-24 w-full bg-base-content/10 rounded-xl"></div>
                     <div class="flex gap-2">
                        <div class="h-20 w-1/2 bg-primary/20 rounded-xl"></div>
                        <div class="h-20 w-1/2 bg-secondary/20 rounded-xl"></div>
                     </div>
                </div>
                <div class="absolute bottom-4 right-4 animate-pulse">
                    <div class="w-12 h-12 bg-primary/20 rounded-none border border-primary text-primary flex items-center justify-center">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <!-- MODULES SECTION -->
      <section>
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">📦 O que você vai aprender neste playbook</h2>
             <p class="text-base-content/60">Conteúdo direto ao ponto, dividido em 4 módulos práticos.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
            <!-- Module 1 -->
            <div class="glass-effect p-6 rounded-2xl hover:border-primary/50 transition-colors group">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold group-hover:text-primary transition-colors">Módulo 1</h3>
                    <span class="text-sm opacity-50 px-2 py-1 bg-base-100 rounded">Fundamentos</span>
                </div>
                <h4 class="font-medium text-lg mb-3">Fundamentos da Presença Digital</h4>
                <ul class="space-y-2 text-sm text-base-content/70">
                    <li>• O que realmente importa em um site hoje</li>
                    <li>• Por que linktree não é suficiente</li>
                    <li>• Como pensar em conversão desde o início</li>
                </ul>
            </div>

             <!-- Module 2 -->
             <div class="glass-effect p-6 rounded-2xl hover:border-primary transition-colors group">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold group-hover:text-primary transition-colors">Módulo 2</h3>
                    <span class="text-sm opacity-50 px-2 py-1 bg-base-100 rounded">Prática</span>
                </div>
                <h4 class="font-medium text-lg mb-3">Seu Site Essencial</h4>
                <ul class="space-y-2 text-sm text-base-content/70">
                    <li>• Estrutura ideal (mesmo pra iniciantes)</li>
                    <li>• O que colocar e o que evitar</li>
                    <li>• Organização que passa profissionalismo</li>
                </ul>
            </div>

             <!-- Module 3 -->
             <div class="glass-effect p-6 rounded-2xl hover:border-primary transition-colors group">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold group-hover:text-secondary transition-colors">Módulo 3</h3>
                     <span class="text-sm opacity-50 px-2 py-1 bg-base-100 rounded">Inteligência Artificial</span>
                </div>
                <h4 class="font-medium text-lg mb-3">IA na prática (sem complicação)</h4>
                <ul class="space-y-2 text-sm text-base-content/70">
                    <li>• Como usar IA para criar textos e estrutura</li>
                    <li>• Prompts prontos para acelerar tudo</li>
                    <li>• Como ganhar velocidade sem perder qualidade</li>
                </ul>
            </div>

             <!-- Module 4 -->
             <div class="glass-effect p-6 rounded-2xl hover:border-primary transition-colors group">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold group-hover:text-secondary transition-colors">Módulo 4</h3>
                     <span class="text-sm opacity-50 px-2 py-1 bg-base-100 rounded">Growth</span>
                </div>
                <h4 class="font-medium text-lg mb-3">Do site ao próximo nível</h4>
                <ul class="space-y-2 text-sm text-base-content/70">
                    <li>• Como validar ideias</li>
                    <li>• Como transformar presença em vendas</li>
                    <li>• Quando faz sentido evoluir para algo maior</li>
                </ul>
            </div>
        </div>
      </section>

      <!-- TARGET AUDIENCE & DIFFERENTIATOR -->
      <section class="grid md:grid-cols-2 gap-8 md:gap-16">
        <div>
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2"><span class="text-primary">🎯</span> Para quem é?</h2>
            <div class="space-y-3">
                <div class="flex items-center gap-3 p-3 glass-effect rounded-none border-l-2 border-primary"><span class="text-primary font-mono">[OK]</span> Criadores</div>
                <div class="flex items-center gap-3 p-3 glass-effect rounded-none border-l-2 border-primary"><span class="text-primary font-mono">[OK]</span> Infoprodutores iniciantes</div>
                <div class="flex items-center gap-3 p-3 glass-effect rounded-none border-l-2 border-primary"><span class="text-primary font-mono">[OK]</span> Freelancers</div>
                <div class="flex items-center gap-3 p-3 glass-effect rounded-none border-l-2 border-primary"><span class="text-primary font-mono">[OK]</span> Founders</div>
                <div class="flex items-center gap-3 p-3 glass-effect rounded-none border-l-2 border-primary"><span class="text-primary font-mono">[OK]</span> Agências pequenas</div>
                <div class="flex items-center gap-3 p-3 glass-effect rounded-none border-l-2 border-primary"><span class="text-primary font-mono">[OK]</span> Quem quer tirar ideias do papel rápido</div>
            </div>
            <div class="mt-6 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200">
                <span class="text-xl">❌</span> Não é pra quem quer “site bonito sem objetivo”.
            </div>
        </div>

        <div class="flex flex-col justify-center">
             <h2 class="text-2xl font-bold mb-6 flex items-center gap-2"><span class="text-secondary">⚡</span> Por que a Apptime é diferente?</h2>
             <div class="space-y-6">
                 <div class="pl-4 border-l-2 border-base-content/20 opacity-60">
                     <p class="text-sm uppercase tracking-wider mb-1">Outros ensinam:</p>
                     <p class="italic">“Crie um SaaS”, “Faça um site complexo”, “Monte algo gigante desde o início”</p>
                 </div>
                 
                 <div class="pl-4 border-l-4 border-primary">
                     <p class="text-sm uppercase tracking-wider text-primary mb-1">A Apptime diz:</p>
                     <p class="text-xl font-bold">Crie o essencial. Valide. Venda. Evolua.</p>
                     <p class="mt-2 text-base-content/80">Sem perder tempo. Sem hype vazio.</p>
                 </div>
             </div>
        </div>
      </section>
      
      <!-- FUTURE PATH -->
      <section class="text-center relative">
         <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
         <h2 class="text-2xl md:text-3xl font-bold mb-8">🔗 O que acontece depois?</h2>
         
         <div class="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
             <div class="glass-effect p-6 rounded-xl flex flex-col items-center gap-4">
                 <div class="w-12 h-12 bg-base-100 rounded-full flex items-center justify-center text-xl font-bold border border-white/10">1</div>
                 <p class="text-sm">Criar projetos reais na plataforma da Apptime</p>
             </div>
             <div class="glass-effect p-6 rounded-xl flex flex-col items-center gap-4 border-primary/30 border">
                 <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/40">2</div>
                  <p class="text-sm font-medium">Você está aqui:<br>Aprendendo o jogo certo</p>
             </div>
             <div class="glass-effect p-6 rounded-xl flex flex-col items-center gap-4">
                 <div class="w-12 h-12 bg-base-100 rounded-full flex items-center justify-center text-xl font-bold border border-white/10">3</div>
                 <p class="text-sm">Evoluir para automações ou contratar a agência</p>
             </div>
         </div>
      </section>

       <!-- CTA / OFFER -->
       <section id="offer" class="py-12 md:py-20 relative text-center">
          <div class="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-[100px] -z-10"></div>
                  <div class="glass-effect p-8 md:p-12 rounded-3xl border border-primary/40 max-w-4xl mx-auto shadow-[0_0_50px_rgba(217,38,255,0.1)]">
              <div class="badge badge-lg bg-primary text-black mb-6 border-none shadow-[0_0_20px_rgba(217,38,255,0.4)] font-mono tracking-wide">Acesso Imediato – Playbook</div>
             
             <h2 class="text-3xl md:text-5xl font-black mb-8 leading-tight">Comece agora e organize sua presença digital do jeito certo</h2>
                          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left md:text-center text-sm md:text-base font-medium">
                  <div class="flex items-center md:flex-col gap-2"><span class="text-primary text-xl">🎓</span> Curso direto ao ponto</div>
                  <div class="flex items-center md:flex-col gap-2"><span class="text-primary text-xl">⚡</span> Conteúdo prático</div>
                  <div class="flex items-center md:flex-col gap-2"><span class="text-primary text-xl">🧠</span> Mentalidade de produto</div>
                  <div class="flex items-center md:flex-col gap-2"><span class="text-primary text-xl">🤖</span> IA aplicada de verdade</div>
              </div>

              <a href="https://wa.me/5511975205644" target="_blank" class="btn btn-primary btn-xl w-full md:w-auto px-12 py-4 h-auto text-xl font-bold font-mono rounded-none skew-x-[-10deg] shadow-[0_0_30px_rgba(217,38,255,0.5)] hover:shadow-[0_0_50px_rgba(217,38,255,0.7)] hover:scale-105 transition-all brand-gradient border-none text-black">
                  <span class="skew-x-[10deg] flex items-center gap-3">
                      QUERO ACESSAR <span class="bg-black/20 px-2 py-0.5 rounded text-base">R$ 27,90</span>
                  </span>
              </a>
         </div>
      </section>

      <footer class="text-center text-base-content/40 text-sm pb-8">
          <p>&copy; {{ new Date().getFullYear() }} Apptime Serviços de Internet Ltda. Todos os direitos reservados.</p>
      </footer>

    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Apptime Academy | Crie sua presença digital do jeito certo'
})
</script>

<style scoped>
.leading-tighter {
    line-height: 1.1;
}
.btn-xl {
    font-size: 1.25rem;
    padding-left: 2rem;
    padding-right: 2rem;
    min-height: 4rem;
}
</style>
