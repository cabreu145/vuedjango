<template>
  <div id="app">
    <Header/>

    <router-link to="/">List</router-link>
    <router-link to="/detail">Detail</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  components: {

    Header
  }
}
</script>


