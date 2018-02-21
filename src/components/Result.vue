<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks:  {{ clickCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
    'clickCounter',
    'doubleCounter'
    ]),
    ourOwn() {
      
    }
  }
}
</script>