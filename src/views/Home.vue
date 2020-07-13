<template>
  <div class="home bg-gray-200 w-8/12 mx-auto p-20">
    <h2 class="text-2xl font-bold">Random dad joke:</h2>  
    <h3 class="mb-12">{{ currentJoke }}</h3>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="fetchJoke()">New Joke</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    fetchJoke () {
      this.$store.dispatch("setCurrentJokeAsync");
    }
  },
  computed: {
    currentJoke() {
      return this.$store.getters.getCurrentJoke;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  max-height: 500px; 
}
</style>