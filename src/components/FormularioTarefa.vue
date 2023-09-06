<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option v-for="projeto in projetos" :value="projeto.id" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TemporizadorTarefa @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

import { key } from '@/store';
import TemporizadorTarefa from "./TemporizadorTarefa.vue";
import { NOTIFICAR } from '@/store/tipo-mutacoes';
import { TipoNotificao } from '@/interfaces/INotificacao';

export default defineComponent({
    name: "FormularioTarefa",
    emits: ['aoFinalizarTarefa'],
    components: { TemporizadorTarefa },
    data() {
        return {
            idProjeto: '',
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {

            const projeto = this.projetos.find((p) => p.id == this.idProjeto);

            if (!projeto) {
                this.store.commit(NOTIFICAR, {
                    titulo: 'Aviso',
                    texto: 'Selecione um projeto antes de finalizar a tarefa!',
                    tipo: TipoNotificao.ATENCAO
                });
                return;
            }
            
            this.$emit('aoFinalizarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: projeto
            });
            this.descricao = '';
        }
    },    
    setup() {
        const store = useStore(key);
        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    }
});
</script>

<style scoped>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario)
}
</style>