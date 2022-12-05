<template>            
    <form @submit.prevent="salvar">
        <div class="field">
            <label for="nomeProjeto" class="label">Nome do projeto</label>
            <input type="text" 
                id="nomeProjeto"
                class="input"
                v-model="nomeProjeto">
        </div>
        <div class="field">
            <button type="submit" class="button">Salvar</button> 
        </div> 
    </form>    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ADICIONA_PROJETO, ALTERA_PROJETO } from '@/store/tipo-mutacoes';

export default defineComponent({
    name: "Formulario",
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
            this.nomeProjeto = projeto?.nome || '';
        }
    },
    data() {
        return {
            nomeProjeto: ""            
        }
    },
    methods: {
        salvar () {

            if (this.id) {
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeProjeto
                })
            } else {
                this.store.commit(ADICIONA_PROJETO, this.nomeProjeto);
            }
            
            this.nomeProjeto = '';
            this.$router.push('/projetos');
        }
    }, 
    setup () {
        const store = useStore();
        return { 
            store            
        };
    } 
})
</script>