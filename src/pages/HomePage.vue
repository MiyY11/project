<template>
  <div class="home-page">
    <HeroSection />
    <DirectionsSection />
    <ServicesSection />
    <TrainersSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import DirectionsSection from '../components/DirectionsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TrainersSection from '../components/TrainersSection.vue'
import CtaSection from '../components/CtaSection.vue'
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
