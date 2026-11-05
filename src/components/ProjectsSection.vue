<script setup lang="ts">
const projects = [
  {
    number: '01',
    name: 'FAV-Dev',
    type: 'Produit web · En ligne',
    description:
      'Une vitrine de services numériques, pensée pour présenter des solutions web avec clarté et caractère.',
    stack: ['Nuxt', 'Vue', 'Tailwind'],
    href: 'https://fav-dev.onrender.com/',
    theme: 'bg-[#ded8eb]',
    markClass: 'text-[#4a3b67] text-[57px]',
    mark: 'FAV.',
  },
  {
    number: '02',
    name: 'ExpoIA',
    type: 'Projet universitaire · En équipe',
    description:
      'La numérisation d’une exposition sur l’intelligence artificielle au Musée des transmissions de Rennes.',
    stack: ['Next.js', 'React', 'Payload CMS'],
    theme: 'bg-[#f0dfc8]',
    markClass: 'text-[#b65731]',
    mark: 'IA',
  },
  {
    number: '03',
    name: 'Message-It',
    type: 'Projet personnel',
    description:
      'Une messagerie instantanée enrichie d’un chatbot Gemini, du frontend aux micro-services.',
    stack: ['Angular', 'NestJS', 'MongoDB'],
    href: 'https://github.com/YALNEZAMI/messageit-ui-f',
    theme: 'bg-[#d6e5dc]',
    markClass: 'text-[#255f4b]',
    mark: '↗',
  },
  {
    number: '04',
    name: 'Shuffle',
    type: 'Projet personnel',
    description:
      'Une application pour faire émerger les affinités mutuelles au sein d’un groupe.',
    stack: ['Django', 'React', 'Tailwind'],
    theme: 'bg-[#e7e8d0]',
    markClass: 'text-[#646d2e]',
    mark: 'S',
  },
]
</script>

<template>
  <section
    id="projets"
    class="mx-auto w-[calc(100%-80px)] max-w-[1120px] py-[116px] pb-[110px] max-[900px]:w-[calc(100%-48px)] max-[900px]:max-w-[720px] max-[650px]:w-[calc(100%-40px)] max-[650px]:py-[78px] max-[650px]:pb-[75px]"
  >
    <div
      class="mb-[45px] flex items-end justify-between gap-[35px] max-[650px]:mb-[30px] max-[650px]:items-start max-[650px]:flex-col max-[650px]:gap-4"
    >
      <div>
        <p class="mb-[18px] flex items-center gap-[10px] text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
          <span class="h-px w-5 bg-accent-deep"></span> Sélection
        </p>
        <h2 class="m-0 font-display text-[clamp(43px,5vw,61px)] leading-[1.02] font-semibold tracking-[-0.075em] max-[650px]:text-[47px]">
          Du concret,<br /><span class="text-accent-deep">du collectif.</span>
        </h2>
      </div>
      <p class="mb-[5px] max-w-[325px] text-[13px] leading-[1.75] text-muted max-[650px]:max-w-[430px]">
        Des projets personnels, universitaires et professionnels — toujours une occasion d’apprendre
        en construisant.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-x-[25px] gap-y-11 max-[650px]:grid-cols-1 max-[650px]:gap-y-[33px]">
      <article v-for="project in projects" :key="project.number" class="min-w-0">
        <div
          class="relative grid h-[262px] place-items-center overflow-hidden max-[650px]:h-[clamp(220px,65vw,300px)]"
          :class="project.theme"
          aria-hidden="true"
        >
          <span class="absolute top-[18px] left-[19px] text-[10px] text-[rgb(32_35_29_/_58%)]">
            {{ project.number }}
          </span>
          <span class="absolute size-[205px] rounded-full border border-[rgb(32_35_29_/_25%)]"></span>
          <span class="absolute size-[150px] rounded-full border border-dashed border-[rgb(32_35_29_/_25%)]"></span>
          <span
            class="z-10 font-display text-[72px] font-bold tracking-[-0.11em]"
            :class="project.markClass"
          >{{ project.mark }}</span>
          <span class="project-grid-overlay absolute inset-0"></span>
        </div>
        <div class="pt-[18px]">
          <div class="flex min-h-[27px] items-center justify-between text-[10px] text-muted">
            <span>{{ project.type }}</span>
            <a
              v-if="project.href"
              class="grid size-[27px] place-items-center rounded-full border border-[#d6d7cd] text-xs text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
              :href="project.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Découvrir ${project.name}`"
            >↗</a>
            <span
              v-else
              class="grid size-[27px] place-items-center rounded-full border border-[#d6d7cd] text-xs text-muted"
              aria-hidden="true"
            >✳</span>
          </div>
          <h3 class="mt-[10px] mb-[7px] font-display text-[23px] font-semibold tracking-[-0.06em]">
            {{ project.name }}
          </h3>
          <p class="mb-4 min-h-[45px] max-w-[470px] text-xs leading-[1.7] text-muted max-[650px]:min-h-0">
            {{ project.description }}
          </p>
          <ul
            class="m-0 flex list-none flex-wrap gap-[7px] p-0"
            :aria-label="`Technologies utilisées pour ${project.name}`"
          >
            <li
              v-for="tag in project.stack"
              :key="tag"
              class="rounded-[2px] border border-[#dedfd5] px-[9px] py-[6px] text-[9px] text-[#5e6057]"
            >{{ tag }}</li>
          </ul>
        </div>
      </article>
    </div>

    <a
      class="mx-auto mt-[42px] block w-max border-b border-[#aeb19f] pb-[5px] text-xs font-semibold max-[650px]:mt-[34px]"
      href="https://github.com/YALNEZAMI"
      target="_blank"
      rel="noopener noreferrer"
    >
      Parcourir mes dépôts GitHub <span class="ml-[7px] text-accent-deep" aria-hidden="true">↗</span>
    </a>
  </section>
</template>

<style scoped>
.project-grid-overlay {
  background-image:
    linear-gradient(rgb(32 35 29 / 5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(32 35 29 / 5%) 1px, transparent 1px);
  background-size: 33px 33px;
  mask-image: radial-gradient(ellipse at center, transparent 10%, black 100%);
}
</style>
