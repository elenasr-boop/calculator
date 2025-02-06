import { createStore } from 'vuex';
import { calculationFunction } from './calcFunction';

export default createStore({
    state: {
        clickedSymbol: null,
        expression: '',
        result: null,
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
        },
        setResult(state, answer) {
            state.result = answer;
        },
    },
    actions: { 
        pressButton({ commit, state }, symbol) {
            if (state.result !== null) {
                commit('clearExpression');
                commit('updateExpression', state.result);
                commit('setResult', null);
            }

            switch (symbol) {
                case '=': 
                    commit('setResult', calculationFunction(state.expression));
                    break
                case 'c':
                    commit('removeLastSymbol');
                    break
                case 'ce':
                    commit('clearExpression');
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