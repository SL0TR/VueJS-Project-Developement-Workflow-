<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div>
            <div>
                <appUserDetail :name="name" @nameWasReset="name = $event"></appUserDetail>
            </div>
            <div>
                <appUserEdit></appUserEdit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
          return {
            name: 'Max',

          }
        },
        methods: {
          changeName() {
            this.name = 'Ana';
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
