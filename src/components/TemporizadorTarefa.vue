<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronomentroTarefa :tempoEmSegundos="tempoEmSegundos" />
        <div>          
            <BotaoTemporizador icone="fas fa-stop" texto="stop" :desabilitado="!executando" @aoClicar="finalizar" />
            <BotaoTemporizador icone="fas fa-play" texto="play" :desabilitado="executando" @aoClicar="iniciar" />
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CronomentroTarefa from './CronomentroTarefa.vue';
import BotaoTemporizador from './BotaoTemporizador.vue';

export default defineComponent({
    name: "TemporizadorTarefa",
    components: { 
        CronomentroTarefa, 
        BotaoTemporizador },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            executando: false
        };
    },    
    methods: {
        iniciar() {
            console.log("Iniciando");

            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
            this.executando = true;
        },
        finalizar() {
            console.log("Finalizando");

            clearInterval(this.cronometro);
            this.executando = false;
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
        }
    },
    emits: ['aoTemporizadorFinalizado']
})
</script>