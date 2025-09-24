<script setup>
import { useDataGridStore } from '@/stores/dataGrid'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const url1 = ref('')
const url2 = ref('')
</script>

<template>
    <div class="block">
        <div class="block--elem">
            <input v-model="url1" />
        </div>
        <div class="block--elem">
            <input v-model="url2" />
        </div>
        <button @click="useDataGridStore().newUrl(url1, url2)">Загрузить</button>
    </div>
    <div>
        <RouterView />
    </div>
</template>

<style scoped>
.block {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 20px 100px;
}
input {
    padding: 10px 20px;
    font-size: 18px;
    color: #121212;
    border-radius: 8px;
    border: 1px solid #0808e5;
}
input:focus-visible {
    outline: #08e508 auto 1px;
}
button {
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    font-size: 20px;
    color: #212121;
}
</style>
