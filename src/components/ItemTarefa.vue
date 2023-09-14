<template>
    <AppBox>
        <div class="columns">
            <div class="column is-4">
                {{ tarefa?.descricao || "Tarefa sem descrição" }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
            <div class="column">
                <CronomentroTarefa :tempoEmSegundos = tarefa?.duracaoEmSegundos />
            </div>
        </div>
    </AppBox>
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import { defineComponent, PropType } from 'vue';
import CronomentroTarefa from './CronomentroTarefa.vue';
import AppBox from './AppBox.vue';

export default defineComponent({
    name: "ItemTarefa",
    components: { CronomentroTarefa, AppBox },
    props: {
        tarefa: {
            type:Object as PropType<ITarefa>,
            required: true
        }
    }
});
</script>