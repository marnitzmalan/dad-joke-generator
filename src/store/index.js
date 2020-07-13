import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const dadJokesApi = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    currentJoke: 'This is a joke',
    allJokes: []
  },
  mutations: { 
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload)
    }
  },
  actions: {  
    async setCurrentJokeAsync(state) {
      const joke = await fetch(dadJokesApi, { headers });
      const j = await joke.json();
      state.commit("setCurrentJoke", j.joke);
    }
  },
  getters: { 
    getCurrentJoke: state => state.currentJoke
  },
  modules: {
  }
})
