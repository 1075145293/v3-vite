<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { login } from '@/service/login'
const store = useStore()
const name = computed(() => store.getters.name)
console.log(name, '')
login().then(res => {
  console.log(res)
})
</script>
<template>
  <div id="#app">
    <div>
      {{name}}
      <router-link to="/" >todolist</router-link>
      |
      <router-link to="/home" >father</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background: $background;
  .sss {
    width: 1rem;
    height: 1rem;
    border-radius: 0.1rem;
    background: blue;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
