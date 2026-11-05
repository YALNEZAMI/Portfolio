<template>
  <header
    class="mx-auto flex h-[88px] w-[calc(100%-80px)] max-w-[1280px] items-center justify-between border-b border-line max-[650px]:h-auto max-[650px]:min-h-[70px] max-[650px]:w-[calc(100%-40px)] max-[650px]:flex-wrap max-[650px]:gap-y-[13px] max-[650px]:py-3"
  >
    <a
      class="inline-flex items-center gap-[10px] font-display text-sm font-bold tracking-[-0.035em] max-[650px]:gap-[7px] max-[650px]:text-xs"
      href="#accueil"
      aria-label="Yaser Alnezami, accueil"
    >
      <span
        class="grid size-[30px] place-items-center rounded-full bg-ink font-display text-[13px] font-extrabold tracking-[-0.08em] text-accent max-[650px]:size-[27px]"
      >ya</span>
      <span>Yaser Alnezami</span>
    </a>
    <nav
      class="flex gap-[35px] text-[13px] text-[#66685f] max-[650px]:order-3 max-[650px]:w-full max-[650px]:justify-between max-[650px]:gap-3 max-[650px]:border-t max-[650px]:border-line max-[650px]:pt-[11px] max-[650px]:text-[11px]"
      aria-label="Navigation principale"
    >
      <a class="transition-colors hover:text-accent-deep" href="#projets">Projets</a>
      <a class="transition-colors hover:text-accent-deep" href="#parcours">Parcours</a>
      <a class="transition-colors hover:text-accent-deep" href="#contact">Contact</a>
    </nav>
    <a
      class="flex items-center gap-[9px] text-xs font-semibold max-[650px]:gap-[7px] max-[650px]:text-[10px]"
      href="#contact"
    >
      <span class="relative flex size-2" aria-hidden="true">
        <span
          class="absolute inset-0 inline-flex size-full animate-ping rounded-full bg-[#79a742] opacity-75"
        ></span>
        <span class="relative z-10 inline-flex size-2 rounded-full bg-[#79a742]"></span>
      </span>
      Stage · mars 2027
    </a>
  </header>
</template>
