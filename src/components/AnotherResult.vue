<template>
  <div>
    <h3>ANOTHER RESULT</h3>
    <p>Another Counter is: {{ doubleCounter }} </p>
    <p>Another Number of Clicks: {{ stringCounter }} </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: { 
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ]) 
  }
}
</script>