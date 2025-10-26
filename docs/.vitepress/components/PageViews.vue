<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 加载不蒜子脚本
  const script = document.createElement('script')
  script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  script.async = true
  document.head.appendChild(script)
})
</script>

<template>
  <div class="page-views">
    <span id="busuanzi_container_site_pv" style="display: none">
      总访问量：<span id="busuanzi_value_site_pv"></span>
    </span>
    <span id="busuanzi_container_site_uv" style="display: none">
      | 访客数：<span id="busuanzi_value_site_uv"></span>
    </span>
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