import { defineStore } from 'pinia';
import type { Meditation } from '../interfaces/meditation.interface';
import { ref } from 'vue';
import { http } from '../api';
import { API_ROUTES } from '../api';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);

  async function fetchMeditations() {
    try {
      console.log('Fetching meditations...');
      const response = await http.get(API_ROUTES.meditations);
      console.log('API Response:', response.data);
      meditations.value = response.data.data.meditations;
      console.log('Meditations loaded:', meditations.value);
    } catch (error) {
      console.error('Error fetching meditations:', error);
    }
  }

  return { meditations, fetchMeditations };
});
