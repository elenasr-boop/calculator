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
            if (symbol === 'c' && state.clickedSymbol === 'c') {
                commit('clearExpression');
            } else if (symbol === 'c') {
                commit('removeLastSymbol');
            } else {
                commit('setClickedSymbol', symbol);
                commit('updateExpression', symbol);
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