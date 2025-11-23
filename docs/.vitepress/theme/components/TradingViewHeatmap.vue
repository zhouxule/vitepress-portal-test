<template>
  <div ref="root"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  // height: can be a number (pixels) or string like '700px' or '60vh'
  height: { type: [String, Number], default: '900px' },
  // width: optional, number (pixels) or string like '1200px'
  width: { type: [String, Number], default: null },
  // whether the wrapper should break out to full viewport width
  fullWidth: { type: Boolean, default: false },
  // whether to use container size mode for TradingView (width/height = '100%')
  useContainer: { type: Boolean, default: false },
  colorTheme: { type: String, default: 'light' },
  // expose common options for debugging/config
  dataSource: { type: String, default: 'SPX500' },
  blockSize: { type: String, default: 'market_cap_basic' },
  blockColor: { type: String, default: 'change' },
  grouping: { type: String, default: 'sector' }
})

const root = ref(null)

onMounted(() => {
  if (!root.value) return

  //https://www.tradingview.com/widget-docs/widgets/heatmaps/stock-heatmap/
  const wrapper = document.createElement('div')
  wrapper.className = 'tradingview-widget-container'
  // set height on wrapper
  if (typeof props.height === 'number') {
    wrapper.style.height = props.height + 'px'
  } else {
    wrapper.style.height = String(props.height)
  }

  // Layout modes:
  // - fullWidth: break out to viewport width (existing behavior)
  // - centered fixed width: use props.width (px) and center via margin auto
  // - container mode (useContainer): wrapper should have an explicit px width/height and TradingView uses 100%

  if (props.fullWidth) {
    wrapper.style.width = '100vw'
    wrapper.style.maxWidth = 'none'
    wrapper.style.position = 'relative'
    wrapper.style.left = '50%'
    wrapper.style.transform = 'translateX(-50%)'
    wrapper.style.boxSizing = 'border-box'
  } else if (props.width) {
    // use explicit width (number or '1234px') and center relative to the viewport
    if (typeof props.width === 'number') {
      wrapper.style.width = props.width + 'px'
    } else {
      wrapper.style.width = String(props.width)
    }
    wrapper.style.maxWidth = 'none'
    // center the fixed-width wrapper relative to the viewport (ignore theme content offsets)
    wrapper.style.position = 'relative'
    wrapper.style.left = '50%'
    wrapper.style.transform = 'translateX(-50%)'
    wrapper.style.boxSizing = 'border-box'
  } else {
    // default: stay within content width, let VitePress container control size
    wrapper.style.width = '100%'
    wrapper.style.boxSizing = 'border-box'
  }

  const widget = document.createElement('div')
  widget.className = 'tradingview-widget-container__widget'
  // ensure the widget fills the wrapper
  widget.style.height = '100%'
  widget.style.width = '100%'
  wrapper.appendChild(widget)

  /*
  const copyright = document.createElement('div')
  copyright.className = 'tradingview-widget-copyright'
  copyright.innerHTML = '<a href="https://www.tradingview.com/heatmap/stock/" rel="noopener nofollow" target="_blank"><span class="blue-text">Stock Heatmap</span></a><span class="trademark"> by TradingView</span>'
  wrapper.appendChild(copyright)
  */

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js'
  script.async = true
  // TradingView expects the JSON config as the script text
  // The widget often expects a numeric pixel height; convert when possible.
  let configHeight = 700
  try {
    if (props.height && props.height.endsWith('px')) {
      configHeight = parseInt(props.height.replace('px', ''), 10) || 700
    } else if (props.height && props.height.endsWith('vh')) {
      // convert vh to approximate px based on window height
      const vh = parseFloat(props.height.replace('vh', '')) || 60
      configHeight = Math.round((vh / 100) * window.innerHeight)
    }
  } catch (e) {
    configHeight = 700
  }

  // TradingView config: either use container sizing (width/height = '100%')
  // or pass numeric pixel width/height. Prefer explicit props when provided.
  let useContainer = !!props.useContainer

  let configWidth = null
  if (!useContainer) {
    // prefer explicit width prop
    if (props.width) {
      if (typeof props.width === 'number') configWidth = Math.round(props.width)
      else if (typeof props.width === 'string' && props.width.endsWith('px')) configWidth = parseInt(props.width)
    }

    // otherwise measure wrapper
    if (!configWidth) {
      try {
        const w = wrapper.getBoundingClientRect().width
        if (w && Number.isFinite(w)) configWidth = Math.round(w)
      } catch (e) {
        configWidth = window.innerWidth || 1200
      }
    }
  }

  const config = {
    dataSource: props.dataSource,
    blockSize: props.blockSize,
    blockColor: props.blockColor,
    grouping: props.grouping,
    locale: 'en',
    symbolUrl: '',
    colorTheme: props.colorTheme,
    exchanges: [],
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: useContainer ? '100%' : configWidth,
    height: useContainer ? '100%' : configHeight
  }

  script.text = JSON.stringify(config, null, 2)
  // debug logging
  script.onload = () => console.debug('[TradingViewHeatmap] script loaded', config)
  script.onerror = (err) => console.error('[TradingViewHeatmap] script failed to load', err)

  // Append script last (after widget & copyright)
  wrapper.appendChild(script)

  root.value.appendChild(wrapper)
})
</script>

<style scoped>
/* Ensure the container and injected widget occupy intended space */
.tradingview-widget-container {
  width: 100%;
  min-height: 200px;
}

.tradingview-widget-container__widget {
  width: 100%;
  height: 100%;
}
</style>
