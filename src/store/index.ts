import IProjeto from "@/interfaces/IProjetos";
import { INotificacao, TipoNotificacao } from "@/interfaces/INotificacao";
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import { InjectionKey } from "vue";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUI_PROJETO, NOTIFICAR } from "./tipo-mutacoes";

interface Data {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Data>> = Symbol()

export const store = createStore<Data>({
    state: {
        projetos: [],
        notificacoes: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeProjeto
            } as IProjeto
            state.projetos.push(projeto);
        },
        [ALTERA_PROJETO](state, projeto: IProjeto)  {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id);
            state.projetos[index] = projeto;
        },
        [EXCLUI_PROJETO](state, id: string)  {
            state.projetos = state.projetos.filter(proj => proj.id != id);            
        },
        [NOTIFICAR] (state, novaNotificacao: INotificacao)  {
            novaNotificacao.id = new Date().getTime();
            state.notificacoes.push(novaNotificacao);

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != notificacao.id);
            }, 3000);
        }
    }
})

export function useStore(): Store<Data> {
    return vuexUseStore(key);
}