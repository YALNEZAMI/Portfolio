<script setup lang="ts">
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import IntroStrip from './components/IntroStrip.vue'
import JourneySection from './components/JourneySection.vue'
import PortfolioFooter from './components/PortfolioFooter.vue'
import PortfolioHeader from './components/PortfolioHeader.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
</script>

<template>
  <div class="overflow-hidden">
    <PortfolioHeader />
    <main>
      <HeroSection />
      <IntroStrip />
      <ProjectsSection />
      <JourneySection />
      <SkillsSection />
      <ContactSection />
    </main>
    <PortfolioFooter />
  </div>
</template>
