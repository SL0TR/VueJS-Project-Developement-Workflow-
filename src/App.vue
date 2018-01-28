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
    <button @click="fetch">Get Data</button>
    <ul>
      <li v-for="u in users">{{ u.userName }} - {{ u.email }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          userName: '',
          email: ''
        },
        users: [

        ]
      }
    },
    methods: {
      submit() {
        this.$http.post('https://vue-js-http-4112c.firebaseio.com/data.json', this.user).
          then(response => {
            console.log(response)
          }, error => {
            console.log(error)
          })

      },
      fetch() {
        this.$http.get('https://vue-js-http-4112c.firebaseio.com/data.json')
          .then(response => {
            return response.json()
          })
            .then( data => {
              const resultArray = []
              for (let key in data) {
                resultArray.push(data[key])
                this.users = resultArray
              }
            })
      }
    }
  }
</script>

<style>
    
</style>
