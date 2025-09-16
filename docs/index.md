---
layout: home

hero:
  name: VitePress Demo
  text: 由 Vite & Vue 驱动
  tagline: 极速开发 · 磨砂导航 · 彩虹标题
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com

features:
  - icon: ⚡
    title: 极速体验
    details: 基于 Vite，秒级热更新，开发如飞。
  - icon: 🎨
    title: 高度自定义
    details: 直接在 Markdown 中使用 Vue 组件。
  - icon: 🪄
    title: 现代设计
    details: 磨砂导航，彩虹标题，现代渐变风格。
---

<!-- Hero 区域下方的箭头 -->
<div class="scroll-down">
  <span></span>
</div>

<style>
/* 顶部导航栏磨砂玻璃效果 */
.VPNavBar {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.7) !important;
}
.dark .VPNavBar {
  background: rgba(30, 30, 30, 0.7) !important;
}

/* 彩虹渐变标题 */
.VPHero .name {
  background: linear-gradient(90deg, #ff6ec4, #7873f5, #4ade80, #facc15, #f87171);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

/* Hero 背景渐变 */
.VPHero {
  background: linear-gradient(135deg, #eef2ff, #f0f9ff, #fff7ed);
  position: relative; /* 方便定位箭头 */
  padding-bottom: 80px; /* 给箭头留空间 */
}
.dark .VPHero {
  background: linear-gradient(135deg, #1e293b, #0f172a, #111827);
}

/* Feature 卡片阴影 + 背景 */
.VPFeatures .VPFeature {
  border-radius: 16px;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}
.dark .VPFeatures .VPFeature {
  background: rgba(30, 41, 59, 0.6);
  box-shadow: 0 6px 16px rgba(0,0,0,0.6);
}

/* 下滑箭头样式 */
.scroll-down {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.scroll-down span {
  display: block;
  width: 24px;
  height: 24px;
  border-bottom: 3px solid currentColor;
  border-right: 3px solid currentColor;
  transform: rotate(45deg);
  margin: 0 auto;
  animation: bounce 1.5s infinite;
  color: #444;
}
.dark .scroll-down span {
  color: #ddd;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); }
  40% { transform: translateY(10px) rotate(45deg); }
  60% { transform: translateY(5px) rotate(45deg); }
}
</style>
