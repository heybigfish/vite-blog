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
