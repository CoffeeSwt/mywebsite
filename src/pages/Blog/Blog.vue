<template>
    <div>111123123</div>
    <a-button type="primary" @click="themeStore.setThemeDark()">Dark</a-button>
    <a-button type="primary" @click="themeStore.setThemeLight()">Light</a-button>
</template>

<script setup>
import { useThemeStore } from '@/stores'
const themeStore = useThemeStore()
</script>