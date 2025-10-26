---
layout: home

hero:
  name: "Yilei's Blog"
  text: "记录与分享"
  tagline: Keep it simple
  actions:
    - theme: brand
      text: 博客
      link: /posts/
    - theme: alt
      text: 关于
      link: /about

features:
  - icon: ✍️
    title: 写作
    details: 记录技术与思考
  - icon: 💡
    title: 分享
    details: 交流想法与经验

---

<script setup>
import PageViews from './.vitepress/components/PageViews.vue'
</script>

<PageViews />