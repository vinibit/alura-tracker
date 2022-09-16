<template>
    <button class="button" @click="aoClicar" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "BotaoTemporizador",
    props: {
        desabilitado: {
            type: Boolean
        },
        icone: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        }
    },
    methods: {
        aoClicar () : void {
            this.$emit('aoClicar')
        }
    },
    emits: ['aoClicar']
})
</script>