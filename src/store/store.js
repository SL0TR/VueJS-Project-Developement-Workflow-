import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter
    },
    clickCounter: state => {
      return state.counter + ' clicks!'
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload
    },
    decrement: (state, payload) => {
      state.counter -= payload
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit('increment', payload)
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload)
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout( () => {
        commit('increment', payload)
      },1000)
    },
    asyncDeccrement: ({ commit }, payload) => {
      setTimeout( () => {
        commit('decrement', payload)
      },1000)
    }
  }
})