<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { getCurrentInstance, defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const internalInstance: any = getCurrentInstance()
    let api = internalInstance.appContext.config.globalProperties.$api // access to globalProperties
    return {
      api: reactive(api)
    }
  },
  async mounted() {
    // try {
    //   let res = await this.api.login({
    //     parentCode: 'edu_dic'
    //   })
    // } catch (e) {
    //   console.log('error', e)
    // }
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
}
</style>
