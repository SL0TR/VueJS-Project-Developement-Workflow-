<template>
  <div>
    <p>Another Counter is: {{ counter }} </p>
    <!-- <p>Number of Clicks: </p> -->
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.getters.doubleCounter;
    }
  }
}
</script>