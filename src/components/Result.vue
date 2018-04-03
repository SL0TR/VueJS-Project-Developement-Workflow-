<template>
  <div>
    <p>Counter is: {{ counter }} </p>
    <!-- <p>Number of Clicks: </p> -->
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter;
    }
  }
}
</script>