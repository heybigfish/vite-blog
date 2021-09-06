<!--  -->
<template>
  <div class="header-widget">
    <div class="header-container">
      <div>bigfish‘blog</div>
      <div>
        <el-button type="text">首页</el-button>
        <el-button type="text">关于</el-button>
        <el-button type="text">归档</el-button>
      </div>
    </div>
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
.header-widget {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  width: 100vw;
  height: 50px;
  padding: 0 15px;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 6px 30px -10px rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;

  .header-container {
    width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
