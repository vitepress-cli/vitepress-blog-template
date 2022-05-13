// .vitepress/theme/index.js
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import DefaultTheme from 'vitepress/theme'
import './index.css'
import './styles/scroll.scss'
export default {
  ...DefaultTheme,
  Layout,
  NotFound
}
