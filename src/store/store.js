import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    clicks: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter;
    },
    stringCounter: state => {
      return state.clicks + ' Clicks'
    }
  },
  mutations: {
    increament: (state, payload) => {
      state.counter += payload;
      state.clicks++;
    },
    decreament: (state, payload) => {
      state.counter -= payload;
      state.clicks--;
    }
  },
  actions: {
    increament: ({ commit }, payload ) => {
      commit('increament', payload)
    },
    decreament: ({ commit }, payload ) => {
      commit('decreament', payload)
    },
    asyncIncreament: ({ commit }, payload ) => {
      setTimeout(() => {
        commit('increament', payload.by)
      }, payload.duration)
    },
    asyncDecreament: ({ commit }, payload ) => {
      setTimeout(() => {
        commit('decreament', payload.by)
      }, payload.duration)
    }
  }
});