import IProjeto from "@/interfaces/IProjetos";
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import { InjectionKey } from "vue";

interface Data {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Data>> = Symbol()

export const store = createStore<Data>({
    state: {
        projetos: []
    },
    mutations: {
        'ADICIONA_PROJETO'(state, nomeProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeProjeto
            } as IProjeto
            state.projetos.push(projeto);
        }
    }
})

export function useStore(): Store<Data> {
    return vuexUseStore(key);
}