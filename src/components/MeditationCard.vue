<script setup lang="ts">
import { Meditation } from '../interfaces/meditation.interface';

const props = defineProps<{
  meditation: Meditation;
}>();
</script>

<template>
  <div class="meditation-card">
    <div class="card-header">
      <h2 class="card-title">{{ meditation.title }}</h2>
      <span class="duration">{{ meditation.duration_min }} мин</span>
    </div>
    <p class="card-description">{{ meditation.description }}</p>
    <button class="start-button">
      <span class="play-icon">▶</span>
      Начать
    </button>
  </div>
</template>

<style scoped>
.meditation-card {
  width: 339px;
  height: 170px;
  background: #f7f3f0;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.meditation-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.card-title {
  color: #253334;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
  flex: 1;
  padding-right: 10px;
}

.duration {
  color: #666;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
}

.card-description {
  color: #253334;
  font-size: 14px;
  line-height: 1.4;
  margin: 0 0 20px 0;
  flex: 1;
}

.start-button {
  background: #253334;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  transition: background-color 0.2s ease;
}

.start-button:hover {
  background: #1a2628;
}

.play-icon {
  font-size: 14px;
}
</style>