<script setup lang="ts">
const milestones = [
  {
    date: '2025 — 2027',
    title: 'Master Ingénierie logicielle',
    place: 'Université de Rennes',
    description:
      'Développement, ergonomie et conception centrée utilisateur. Participation à ExpoIA, un projet de numérisation d’exposition.',
  },
  {
    date: 'Mai — juil. 2024',
    title: 'Développeur full-stack · Stage',
    place: 'Antidots · Aix-les-Bains',
    description:
      'Intégration d’une API de réservation de croisières, documentation Swagger et conteneurisation Docker au sein d’une architecture multi-services.',
  },
  {
    date: '2021 — 2024',
    title: 'Licence Informatique',
    place: 'Université de Rennes',
    description:
      'Trois années de fondamentaux en informatique et de projets en Java, MySQL et PHP.',
  },
]
</script>

<template>
  <section id="parcours" class="bg-[#eeeee6] py-[100px] max-[650px]:py-[75px]">
    <div
      class="mx-auto grid w-[calc(100%-80px)] max-w-[1120px] grid-cols-[0.85fr_1fr] gap-[100px] max-[900px]:w-[calc(100%-48px)] max-[900px]:max-w-[720px] max-[900px]:gap-[55px] max-[650px]:w-[calc(100%-40px)] max-[650px]:grid-cols-1 max-[650px]:gap-[35px]"
    >
      <div>
        <p class="mb-[18px] flex items-center gap-[10px] text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
          <span class="h-px w-5 bg-accent-deep"></span> Le parcours
        </p>
        <h2 class="mb-[23px] font-display text-[clamp(38px,4vw,52px)] leading-[1.02] font-semibold tracking-[-0.075em] max-[650px]:text-[47px]">
          Apprendre.<br /><span class="text-accent-deep">Faire. Recommencer.</span>
        </h2>
        <p class="m-0 max-w-[340px] text-[13px] leading-[1.8] text-muted max-[650px]:max-w-[440px]">
          Du premier projet en licence à l’intégration d’API en entreprise, je progresse en gardant
          le goût du travail bien fait et du travail d’équipe.
        </p>
      </div>
      <div class="border-t border-[#d4d5ca]">
        <article
          v-for="milestone in milestones"
          :key="milestone.date"
          class="grid grid-cols-[120px_1fr] gap-5 border-b border-[#d4d5ca] py-6 max-[900px]:grid-cols-[100px_1fr] max-[900px]:gap-[14px] max-[650px]:grid-cols-[98px_1fr]"
        >
          <span class="pt-1 text-[10px] text-muted">{{ milestone.date }}</span>
          <div>
            <h3 class="mb-[5px] font-display text-base font-semibold tracking-[-0.035em]">
              {{ milestone.title }}
            </h3>
            <p class="mb-[10px] text-[11px] font-semibold text-accent-deep">{{ milestone.place }}</p>
            <p class="m-0 text-[11px] leading-[1.7] text-muted">{{ milestone.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
