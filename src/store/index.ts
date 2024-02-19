import IProjeto from "@/interfaces/IProjeto";
import { INotificacao } from "@/interfaces/INotificacao";
import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import { InjectionKey } from "vue";
import { ADICIONA_PROJETO, ALTERA_PROJETO, DEFINR_PROJETOS, EXCLUI_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import { ALTERAR_PROJETO, CADASTRAR_PROJETO, OBTER_PROJETOS, REMOVER_PROJETO } from "./tipo-acoes";
import http from "@/http";

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
        [DEFINR_PROJETOS] (state, projetos: IProjeto[]) {
            state.projetos = projetos;
        },
        [NOTIFICAR] (state, novaNotificacao: INotificacao)  {
            novaNotificacao.id = new Date().getTime();
            state.notificacoes.push(novaNotificacao);

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != notificacao.id);
            }, 3000);
        }        
    },
    actions: {
         [OBTER_PROJETOS] ({ commit }) {
            http.get('projetos')
                .then(res => commit(DEFINR_PROJETOS, res.data))
         },
         [CADASTRAR_PROJETO] (context, nome: string ) {
            return http.post('projetos', { nome });
         },
         [ALTERAR_PROJETO] ( { commit }, projeto: IProjeto ) {
            return http.put(`projetos/${projeto.id}`, projeto)
                       .then(() => commit(ALTERA_PROJETO, projeto ));
         },
         [REMOVER_PROJETO] ( { commit }, id: string ) {
            return http.delete(`projetos/${id}`)
                       .then(() => commit(EXCLUI_PROJETO, id));
         }
    }
})

export function useStore(): Store<Data> {
    return vuexUseStore(key);
}