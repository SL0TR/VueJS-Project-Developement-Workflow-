<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncreament({by: 100, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecreament({by: 50, duration: 1500})">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'asyncIncreament',
      'asyncDecreament'
    ])
  }
}
</script>