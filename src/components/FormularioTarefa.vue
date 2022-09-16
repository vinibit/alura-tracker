<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input 
                    type="text" 
                    class="input" 
                    placeholder="Qual tarefa você deseja iniciar?"
                    v-model="descricao">
            </div>
            <div class="column">
                <TemporizadorTarefa @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>      
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import TemporizadorTarefa from "./TemporizadorTarefa.vue";

    export default defineComponent({
        name: "FormularioTarefa",
        components: { TemporizadorTarefa },
        data () {
            return {
                descricao: ''
            }
        },
        methods: {
            finalizarTarefa (tempoDecorrido: number) : void {
                console.log('Tempo da tarefa', tempoDecorrido);
                console.log('Descrição da tarefa', this.descricao);
                this.descricao = '';
            }
        }
    });
</script>