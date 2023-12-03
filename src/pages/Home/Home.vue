<template>
    <div class="bg-slate-700">1111</div>
    <a-button type="primary" @click="routeTo('/layout/blog')">Primary</a-button>
    <div class="h-96 bg-slate-50"></div>
    <div class="h-96 bg-slate-100"></div>
    <div class="h-96 bg-slate-200"></div>
    <div class="h-96 bg-slate-300"></div>
    <div class="h-96 bg-slate-400"></div>
    <div class="h-96 bg-slate-500"></div>
    <div class="h-96 bg-slate-600"></div>
</template>

<script setup>
import { useThemeStore } from '@/stores';
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const routeTo = (path) => {
    router.push({ path })
}
const themeStore = useThemeStore()
onMounted(() => {
    themeStore.initTheme()
})
</script>