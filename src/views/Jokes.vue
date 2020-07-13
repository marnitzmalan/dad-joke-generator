<template>
  <div class="about">
    <h1 class="text-2xl p-12 font-bold">This is all the jokes you've retrieved</h1>
    <h4 v-for="(joke, index) in allJokes" :key="index">
      <span>{{ index + 1 }}</span>
      {{ joke }}
    </h4>
  </div>
</template>

<script>
export default {
  computed: {
    allJokes () {
      return this.$store.getters.getAllJokes;
    }
  }
}
</script>