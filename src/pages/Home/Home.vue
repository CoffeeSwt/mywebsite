<template>
    <div class="bg-slate-700">1111</div>
    <a-button type="primary" @click="routeTo({ path: '/blog' })">Primary</a-button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const routeTo = (routeParm) => {
    router.push({
        path: routeParm.path
    })
}
</script>