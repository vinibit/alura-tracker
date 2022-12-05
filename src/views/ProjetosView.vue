<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <router-view></router-view>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { computed } from '@vue/reactivity';

export default defineComponent({
    name: "ProjetosView",
    data() {
        return {
            nomeProjeto: ""            
        }
    }    
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>