<!--  -->
<template>
  <div class="container">
    <!-- <common-md></common-md> -->
    <parsing-md></parsing-md>
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
.container {
  position: relative;
  :deep(.markdown-body) {
    width: 900px;
    position: unset;
  }
  :deep(#container-md) {
    position: absolute;
    right: 0;
    top: 0;
    width: 280px;
    padding: 20px;
    box-sizing: border-box;
    background: #f9f9f9;
  }
}
</style>
