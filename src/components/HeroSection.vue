<script setup lang="ts">
const cvUrl = '/CV_Yaser_Alnezami_optimise.pdf'
</script>

<template>
  <section
    id="accueil"
    class="mx-auto grid min-h-[610px] w-[calc(100%-80px)] max-w-[1120px] grid-cols-[1fr_0.83fr] items-center gap-20 py-[67px] pb-[77px] max-[900px]:min-h-[540px] max-[900px]:w-[calc(100%-48px)] max-[900px]:max-w-[720px] max-[900px]:grid-cols-[1fr_0.78fr] max-[900px]:gap-[35px] max-[650px]:w-[calc(100%-40px)] max-[650px]:grid-cols-1 max-[650px]:gap-[35px] max-[650px]:py-[57px] max-[650px]:pb-[53px]"
  >
    <div>
      <p
        class="mb-6 flex items-center gap-[10px] text-[10px] font-bold uppercase tracking-[0.14em] text-muted"
      >
        <span class="h-px w-5 bg-accent-deep"></span>
        Développeur full-stack · Rennes
      </p>
      <h1
        class="mb-[25px] font-display text-[clamp(56px,6.4vw,82px)] font-semibold leading-[0.99] tracking-[-0.075em] max-[900px]:text-[clamp(53px,7vw,70px)] max-[650px]:text-[clamp(48px,13.5vw,72px)]"
      >
        Je donne<br /><span class="text-accent-deep">forme aux<br />idées utiles.</span>
      </h1>
      <p
        class="mb-[30px] max-w-[445px] text-[15px] leading-[1.8] text-[#66685f] max-[650px]:max-w-[420px] max-[650px]:text-sm"
      >
        Étudiant en Master Ingénierie logicielle, je conçois des expériences web soignées, de
        l’interface jusqu’aux coulisses.
      </p>
      <div class="flex items-center gap-[25px]">
        <a
          class="inline-flex min-h-12 items-center justify-center gap-[22px] rounded-[3px] bg-ink px-[19px] text-xs font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a4031]"
          href="#projets"
        >
          Voir mes projets <span aria-hidden="true">↘</span>
        </a>
        <a class="text-xs font-semibold" :href="cvUrl" target="_blank" rel="noopener">
          Télécharger mon CV <span class="pl-1 text-accent-deep" aria-hidden="true">↗</span>
        </a>
      </div>
      <div
        class="mt-12 flex items-center gap-3 text-[11px] text-[#77796f] max-[650px]:mt-[30px]"
      >
        <span>Disponible pour un stage</span>
        <span class="size-[3px] rounded-full bg-[#9b9d91]"></span>
        <span>Mars — août 2027</span>
      </div>
    </div>

    <div
      class="hero-art relative isolate min-h-[430px] overflow-hidden bg-[#dce5cd] max-[900px]:min-h-[380px] max-[650px]:min-h-[365px]"
      role="img"
      aria-label="Présentation de Yaser Alnezami"
    >
      <div class="hero-orbit hero-orbit-one"></div>
      <div class="hero-orbit hero-orbit-two"></div>
      <div class="hero-sun"></div>
      <div
        class="absolute top-[62px] right-[37px] flex size-[86px] rotate-[9deg] flex-col items-center justify-center gap-0.5 rounded-full bg-paper text-center text-[9px] font-semibold leading-[1.25]"
      >
        <span class="text-[23px] text-accent-deep">✳</span>
        <span>Curieux<br />par nature</span>
      </div>
      <div class="absolute right-[21px] bottom-5 left-[21px] grid grid-cols-[1fr_1.2fr_1fr] items-end">
        <span class="text-[9px] text-[#555b4d]">01 / 04</span>
        <span class="font-display text-[18px] leading-[1.05] font-semibold tracking-[-0.06em]">
          Yaser<br />Alnezami
        </span>
        <span class="text-right text-[9px] text-[#555b4d]">Rennes, France</span>
      </div>
      <span
        class="absolute top-1/2 -left-[47px] -rotate-90 text-[8px] font-bold tracking-[0.18em] text-[#626b54]"
      >DESIGN · CODE · COLLABORATION</span>
    </div>
  </section>
</template>

<style scoped>
.hero-art::before {
  position: absolute;
  z-index: -1;
  inset: 20px;
  border: 1px solid rgb(32 35 29 / 12%);
  content: '';
}

.hero-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgb(32 35 29 / 18%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.hero-orbit-one {
  width: 280px;
  height: 280px;
}

.hero-orbit-two {
  width: 380px;
  height: 380px;
  border-color: rgb(32 35 29 / 11%);
}

.hero-sun {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 195px;
  height: 195px;
  border-radius: 50%;
  background: #c4e67e;
  transform: translate(-50%, -50%);
}

.hero-sun::after {
  position: absolute;
  inset: 18px;
  border: 1px solid rgb(32 35 29 / 22%);
  border-radius: inherit;
  content: '';
}
</style>
