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
  position: relative;
  height: calc(100vh - 100px);
  color: #595959;
  font-size: 15px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  background-image: linear-gradient(90deg, rgba(60, 10, 30, 0.04) 3%, transparent 0),
    linear-gradient(1turn, rgba(60, 10, 30, 0.04) 3%, transparent 0);
  background-size: 20px 20px;
  background-position: 50%;
}
</style>
