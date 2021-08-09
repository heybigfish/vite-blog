<!--
 * @Author: your name
 * @Date: 2021-08-09 15:20:34
 * @LastEditTime: 2021-08-09 15:23:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-vue3-starter\src\App.vue
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  sasd
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
