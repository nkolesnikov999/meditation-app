<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeditationsStore } from './stores/meditations.store';
import MeditationCard from './components/MeditationCard.vue';

const meditationsStore = useMeditationsStore();

onMounted(() => {
  meditationsStore.fetchMeditations();
});
</script>

<template>
  <div class="app">
    <h1 class="app-title">Медитации</h1>
    <div class="meditation-container">
      <MeditationCard v-for="meditation in meditationsStore.meditations" :key="meditation.id" :meditation="meditation" />
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.app-title {
  text-align: center;
  color: var(--color-fg);
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
}

.meditation-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  max-width: 720px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .app {
    padding: 20px 10px;
  }
  
  .meditation-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    max-width: 360px;
  }
}
</style>
