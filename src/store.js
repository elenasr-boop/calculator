import { createStore } from 'vuex';

export default createStore({
    state: {
        clickedSymbol: null,
        expression: '',
    },
    mutations: {
        setClickedSymbol(state, symbol) {
            state.clickedSymbol = symbol;
        },
        updateExpression(state, char) {
            state.expression += char;
        },
        removeLastSymbol(state) {
            state.expression = state.expression.slice(0, -1);
        },
        clearExpression(state) {
            state.expression = '';
        }
    },
    actions: { 
        pressButton({ commit, state }, symbol) {
            switch (symbol) {
                case '=': 
                    console.log(`Производится вычисление выражения ${state.expression}`);
                    break
                case 'c':
                    if (state.clickedSymbol === 'c') {
                        commit('clearExpression');
                    } else {
                        commit('removeLastSymbol');
                    }
                    break
                default: 
                    commit('updateExpression', symbol);
                    break
            }

            commit('setClickedSymbol', symbol);
        },
        clearExpression({ commit }) {
            commit('clearExpression');
        },
        deleteLastSymbol({ commit}) {
            commit('');
        }
    },
})