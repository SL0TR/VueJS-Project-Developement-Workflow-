<template>
  <div>
    <h3>RESULT</h3>
    <p>Counter is: {{ counter }} </p>
    <p>Number of Clicks: {{ stringCounter }} </p>
    <hr>
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.getters.doubleCounter;
    },
    stringCounter () {
      return this.$store.getters.stringCounter;
    }
  }
}
</script>