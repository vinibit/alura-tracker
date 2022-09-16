<template>
    <section>
        <strong>
            {{ tempoDecorrido }}
        </strong>
    </section>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: 'CronometroTarefa',
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    },
    computed: {
        tempoDecorrido (): string {
            return new Date(0, 0, 0, 0, 0, this.tempoEmSegundos).toLocaleTimeString();
        }
    },
});
</script>