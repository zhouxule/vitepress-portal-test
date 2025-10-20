---
layout: home

hero:
  name: Finalytix
  text: A Simplified Compliance Chatbot
  tagline: scan contracts/invoices · flag high-risk transactions
  actions:
    - theme: brand
      text: Quickstart
      link: http://group01.mozelle.top
    - theme: alt
      text: User Guide
      link: /guide/

features:
  - icon: 🤖
    title: Chatbot Prototype
    details: Chatbot Prototype
  - icon: 🔒
    title: Risk Assessment Algorithm
    details: Risk Assessment Algorithm
  - icon: 🧾
    title: Testing and Validation Report
    details: Testing and Validation Report
  - icon: 🔎
    title: Feedback Mechanism
    details: Feedback Mechanism
  - icon: 📈
    title: Integration Plan
    details: Integration Plan
---


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
  font-weight: 700;
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
