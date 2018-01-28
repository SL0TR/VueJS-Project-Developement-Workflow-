<template>
  <div class="container">
    <h1>Hello</h1>
    <div>
      <label>User</label>
      <input type="text" label="blah" v-model="user.userName">
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="user.email">
    </div>
    <button @click="submit">Submit </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          userName: '',
          email: ''
        }
      }
    },
    methods: {
      submit() {
        console.log(this.user)
      }
    }

  }
</script>

<style>
    
</style>
