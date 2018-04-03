<template>
    <div>
        <button class="btn btn-primary" @click="increament">Increment</button>
        <button class="btn btn-primary" @click="decreament">Decrement</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations([
      'increament',
      'decreament'
    ])
  }
}
</script>