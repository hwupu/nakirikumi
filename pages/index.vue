<template>
  <div>
    <button v-on:click="sign()">sign</button>
    <nakirigami-form />
  </div>
</template>

<script>
export default {
  layout: 'nakiri2020',
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    sign () {
      this.$store.commit('sign')
    }
  }
}
</script>
