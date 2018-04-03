<template>
    <div>
        <button class="btn btn-primary" @click="increament">Increment</button>
        <button class="btn btn-primary" @click="decreament">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
          increament () {
            this.$store.state.counter++;
          },
          decreament () {
            this.$store.state.counter--;
          }
        }
    }
</script>