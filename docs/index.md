---
layout: home

hero:
  name: Finalytix
  text: <span id="typed" class="typing-area"><span id="typed-inner"></span><span id="typed-cursor" class="cursor"></span></span>
  tagline: Combining AI analysis, market data, and customized strategies.
  actions:
    - theme: brand
      text: Quickstart
      link: http://ai.mozelle.top/#/login
    - theme: alt
      text: Heatmap
      link: /heatmap/
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

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const textSpan = document.getElementById('typed-inner')
  const fullText = "Your Intelligent Financial Assistant"

  const typeSpeed = 70
  const deleteSpeed = 40
  const pauseAfterType = 2000
  const pauseAfterDelete = 800

  let i = 0
  let forward = true

  const doType = () => {
    if (forward) {
      if (i <= fullText.length) {
        textSpan.textContent = fullText.slice(0, i)
        i++
        setTimeout(doType, typeSpeed)
      } else {
        forward = false
        setTimeout(doType, pauseAfterType)
      }
    } else {
      if (i >= 0) {
        textSpan.textContent = fullText.slice(0, i)
        i--
        setTimeout(doType, deleteSpeed)
      } else {
        forward = true
        i = 0
        setTimeout(doType, pauseAfterDelete)
      }
    }
  }

  setTimeout(doType, 200)
})
</script>


<style>
:root {
  --line-height: 1.2em; /* 与 VitePress 默认 hero 内容匹配 */
}

.typing-area {
  display: inline-block;
  line-height: var(--line-height);

  /* 固定两行高度 */
  height: calc(2 * var(--line-height));
  max-height: calc(2 * var(--line-height));
  overflow: hidden; /* 阻止第三行出现 */

  white-space: normal; /* 允许自动换行 */
  position: relative;
}

/* 内层真实文字容器 */
#typed-inner {
  white-space: normal;      /* 自动换行 */
  word-break: break-word;   /* 单词太长就断开 */
}

/* 下划线光标 */
.cursor {
  display: inline-block;
  width: 0.4em;
  height: 0.12em;
  background: currentColor;
  vertical-align: baseline;
  animation: blink 900ms steps(1) infinite;
  position: relative;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

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
  /* 使用纯白背景以便底部的 backdrop-filter (磨砂) 能更明显 */
  background: #ffffff;
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
  /* 取消阴影，内部背景改为浅灰（默认白改为浅灰以减少强对比） */
  background: #f3f4f6; /* 浅灰 */
  box-shadow: none;
}
.dark .VPFeatures .VPFeature {
  /* 暗色主题保留较深背景，但去掉强阴影 */
  background: rgba(30, 41, 59, 0.6);
  box-shadow: none;
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

/* 大图标（SVG）显示在右侧：使用 VPHero 的伪元素，这样不会破坏布局。
   - 将 SVG 放到 public/images/logo.svg（或改成你的路径）
   - 在小屏幕隐藏以避免遮挡 */
.VPHero::after {
  content: "";
  position: absolute;
  right: 160px;
  top: 55%;
  transform: translateY(-50%);
  width: 320px;
  height: 320px;
  background-image: url('/images/logo.svg');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: contain;
  opacity: 0.95;
  pointer-events: none;
  filter: drop-shadow(0 10px 30px rgba(0,0,0,0.12));
  z-index: 20; /* 确保 logo 在更上层 */
}

/* 暗色主题下保持对比 */
.dark .VPHero::after {
  opacity: 0.9;
}

/* 底部磨砂半透明效果：覆盖在 Hero 底部 */
.VPHero::before {
  /* 局部的模糊光斑（仅在 logo 下方），避免覆盖标题区域。
     使用多个 radial-gradient 叠加并用 filter: blur() 产生柔和的 glow 效果。
     位置以与 ::after logo 近似对齐（right/top 可根据需要微调）。 */
  content: "";
  position: absolute;
  right: 0px; /* 与 logo ::after 相同的 right 值，便于对齐 */
  top: 62%;
  transform: translateY(-50%);
  width: 520px;
  height: 420px;
  background:
    radial-gradient( circle at 30% 35%, rgba(59,130,246,0.40) 0%, rgba(99,102,241,0.28) 22%, rgba(139,92,246,0.18) 40%, transparent 70%),
    radial-gradient( circle at 70% 70%, rgba(168,85,247,0.22) 0%, rgba(236,72,153,0.06) 40%, transparent 70% );
  filter: blur(30px);
  opacity: 1;
  pointer-events: none;
  z-index: 9; /* 在 logo (::after, z-index:20) 之下 */
}
.dark .VPHero::before {
  /* 暗色主题使用更柔和的冷色 glow */
  background:
    radial-gradient( circle at 30% 35%, rgba(59,130,246,0.28) 0%, rgba(99,102,241,0.18) 22%, rgba(139,92,246,0.12) 40%, transparent 70%),
    radial-gradient( circle at 70% 70%, rgba(124,58,237,0.14) 0%, rgba(236,72,153,0.04) 40%, transparent 70% );
  filter: blur(28px);
  opacity: 0.85;
}

/* 响应式：在窄屏隐藏右侧大图标和缩小底部高度 */
@media (max-width: 900px) {
  .VPHero::after { display: none; }
  .VPHero::before { height: 80px; }
}
</style>
