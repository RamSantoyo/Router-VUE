import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {

    state: () => ({ // el estado en el que se encuentra 
        count: 0
    }),
    actions: { // acciones que se pueden realizar en el estado con metodos
        increment() {
            this.count++
        }
    },
    getters: { // acciones computadas que se pueden realizar en el estado
        multiplo: (state) => state.count * 2
    }
});