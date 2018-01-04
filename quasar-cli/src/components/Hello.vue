<template>
  <q-layout ref="layout"  >
    <q-toolbar slot="header" color="blue">
      <q-btn flat>
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Mohaimin's App
      </q-toolbar-title>
    </q-toolbar>
    <div class="row ">
      <div class="col-sm"><p class="center">First column</p></div>
      <div class="col-sm"><p>Second column</p></div>
      <div class="col-sm"><p>Third column</p></div>
    </div>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QIcon
} from 'quasar'

export default {
  name: 'index',
  components: {
    QBtn,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QIcon
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style >
   .q-btn {
    margin: 5px;
  }
</style>
