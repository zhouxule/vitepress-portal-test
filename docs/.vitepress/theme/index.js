import DefaultTheme from 'vitepress/theme'
import './custom.css'
import TradingViewHeatmap from './components/TradingViewHeatmap.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TradingViewHeatmap', TradingViewHeatmap)
  }
}
