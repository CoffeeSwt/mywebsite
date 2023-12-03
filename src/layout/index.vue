<template>
    <div class="w-full h-screen overflow-hidden">
        <a-layout class="w-full h-full">
            <a-layout-sider breakpoint="md" collapsible>
                <div class="w-full h-11 bg-gray-400" />
                <a-menu ref="Amenu" @menuItemClick="onClickMenuItem">
                    <a-menu-item key="1">
                        <IconHome />
                        Menu 1
                    </a-menu-item>
                    <a-menu-item key="2">
                        <IconCalendar />
                        Menu 2
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header class="bg-gray-500 h-11">
                    <div>111</div>
                </a-layout-header>
                <a-layout-content>
                    <RouterView></RouterView>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { Message } from '@arco-design/web-vue';
import {
    IconHome,
    IconCalendar,
} from '@arco-design/web-vue/es/icon';


const onClickMenuItem = (key) => {
    Message.info({ content: `You select ${key}`, showIcon: true });
}

</script>