import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('')
  const initTheme = () => {
    const storageTheme = localStorage.getItem('coffee-theme')
    //获取缓存主题
    if (storageTheme) {
      if (storageTheme == 'dark') setThemeDark()
      else setThemeLight()
    }
    //主题不存在
    else {
      const currentHours = new Date().getHours()
      if (currentHours >= 18 || currentHours <= 7) setThemeDark()
      else setThemeDark()
    }
  }
  const setThemeDark = () => {
    theme.value = 'dark'
    document.body.setAttribute('arco-theme', 'dark')
    localStorage.setItem('coffee-theme', 'dark')
  }
  const setThemeLight = () => {
    theme.value = 'light'
    document.body.removeAttribute('arco-theme')
    localStorage.setItem('coffee-theme', 'light')
  }
  return { initTheme, setThemeDark, setThemeLight }
})
