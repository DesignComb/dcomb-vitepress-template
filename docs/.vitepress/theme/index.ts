import DefaultTheme from "vitepress/theme";

// element-plus
import { install } from "element-plus";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css'

// tailwind
import './tailwind.css'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    install(app); // element-plus
    app.use(pinia) // pinia
  },
};
