<template>
	<main class="columns is-gapless is-multiline">
		<div class="column is-one-quarter">
			<BarraLateral />
		</div>
		<div class="column is-three-quarter">
			<FormularioTarefa @aoFinalizarTarefa="salvarTarefa" />
			<div class="lista">
				<ItemTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
				<AppBox v-if="listaEstaVazia">
					Você não está muito produtivo hoje :(
				</AppBox>
			</div>
		</div>
	</main>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import ItemTarefa from './components/ItemTarefa.vue';
import ITarefa from './interfaces/ITarefa';
import AppBox from './components/AppBox.vue';

export default defineComponent({
	name: 'App',
	components: {
		BarraLateral,
		FormularioTarefa,
		ItemTarefa,
		AppBox
	},
	data() {
		return {
			tarefas: [] as ITarefa[]
		}
	},
	computed: {
		listaEstaVazia(): boolean {
			return this.tarefas.length === 0;
		}
	},
	methods: {
		salvarTarefa(tarefa: ITarefa) {
			this.tarefas.push(tarefa);
		}
	}
});
</script>

<style>
.lista {
	padding: 1.25rem;
}
</style>
