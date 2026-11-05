<script setup lang="ts">
const skills = [
  { label: 'Frontend', items: 'Vue · Nuxt · React · Angular · Tailwind' },
  { label: 'Backend', items: 'NestJS · Node.js · Django · Java' },
  { label: 'Données & outils', items: 'MongoDB · MySQL · Git · Docker · Figma' },
]
</script>

<template>
  <section
    class="mx-auto grid w-[calc(100%-80px)] max-w-[1120px] grid-cols-[0.85fr_1fr] items-center gap-[100px] py-[110px] max-[900px]:w-[calc(100%-48px)] max-[900px]:max-w-[720px] max-[900px]:gap-[55px] max-[650px]:w-[calc(100%-40px)] max-[650px]:grid-cols-1 max-[650px]:gap-[35px] max-[650px]:py-[75px]"
  >
    <div>
      <p class="mb-[18px] flex items-center gap-[10px] text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
        <span class="h-px w-5 bg-accent-deep"></span> Boîte à outils
      </p>
      <h2 class="font-display text-[clamp(37px,4.2vw,53px)] leading-[1.02] font-semibold tracking-[-0.075em] max-[650px]:text-[42px]">
        Les bons outils,<br /><span class="text-accent-deep">pour les bonnes raisons.</span>
      </h2>
    </div>
    <div>
      <div
        v-for="(skill, index) in skills"
        :key="skill.label"
        class="grid min-h-[66px] grid-cols-[135px_1fr_20px] items-center gap-[15px] border-b border-line max-[650px]:grid-cols-[95px_1fr_15px] max-[650px]:gap-2"
        :class="index === 0 ? 'border-t' : ''"
      >
        <span class="text-[10px] text-muted">{{ skill.label }}</span>
        <p class="m-0 text-[11px] leading-[1.6]">{{ skill.items }}</p>
        <span class="text-xs text-[#8da553]" aria-hidden="true">↗</span>
      </div>
      <div
        class="grid min-h-[66px] grid-cols-[135px_1fr_20px] items-center gap-[15px] border-b border-line max-[650px]:grid-cols-[95px_1fr_15px] max-[650px]:gap-2"
      >
        <span class="text-[10px] text-muted">Langues</span>
        <p class="m-0 text-[11px] leading-[1.6]">
          Français courant <span class="px-[5px] text-[#a0a195]">·</span> Anglais B2
        </p>
        <span class="text-base text-[#8da553]" aria-hidden="true">✳</span>
      </div>
    </div>
  </section>
</template>
