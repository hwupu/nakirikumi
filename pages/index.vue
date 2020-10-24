<template>
  <div>
    <nakirigami-form />
  </div>
</template>

<script>
export default {
  layout: 'nakiri2020',
  methods: {
    sign () {
      this.$store.commit('sign')
    }
  },
  mounted: function () {
    this.$store.commit('initState');
  }
}
</script>
