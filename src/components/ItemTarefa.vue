<template>
    <div class="box has-text-weght-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da tarefa
            </div>
            <div class="column">
                <CronomentroTarefa :tempoEmSegundos=15 />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronomentroTarefa from './CronomentroTarefa.vue';

export default defineComponent({
    name: "ItemTarefa",
    components: { CronomentroTarefa }
});
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>