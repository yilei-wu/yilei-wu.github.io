<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

onMounted(async () => {
  try {
    const response = await fetch('https://api.countapi.xyz/hit/yilei-wu.github.io/visits')
    const data = await response.json()
    count.value = data.value
  } catch (error) {
    console.error('Failed to fetch page views:', error)
  }
})
</script>

<template>
  <div class="page-views">
    <span>访问量：{{ count }}</span>
  </div>
</template>

<style scoped>
.page-views {
  text-align: center;
  margin-top: 2rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>