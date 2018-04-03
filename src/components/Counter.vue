<template>
    <div>
        <button class="btn btn-primary" @click="increament(100)">Increment</button>
        <button class="btn btn-primary" @click="decreament(50)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions([
      'increament',
      'decreament'
    ])
  }
}
</script>