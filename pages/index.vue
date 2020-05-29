<template>
  <h1>Welcome to the home page</h1>
</template>

<script>
export default {
  name: 'home',
  asyncData() {
    console.log('async')
  },
  methods: {
    async test() {
      var test = await this.$axios.$get('/api/users')
    }
  }
}
</script>
