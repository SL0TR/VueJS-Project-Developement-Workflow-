const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter;
  },
  stringCounter: state => {
    return state.clicks + ' Clicks'
  }
}

const mutations = {
  increament: (state, payload) => {
    state.counter += payload;
    state.clicks++;
  },
  decreament: (state, payload) => {
    state.counter -= payload;
    state.clicks--;
  }
}

const actions = {
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

export default {
  state,
  mutations,
  actions,
  getters
}