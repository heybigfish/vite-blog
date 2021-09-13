<!-- main -->
<template>
  <div class="app-main">
    <router-view> </router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.app-main {
  height: 400px;
  width: 1200px;
  min-width: 1200px;
  margin: 50px auto;
}
</style>
