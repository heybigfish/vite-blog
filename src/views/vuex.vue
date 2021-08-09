<!-- vuex -->
<template>
  <div>vuex</div>
</template>

<script>
import { computed, reactive, ref, watch, onMounted, onUpdate, onUnmounted } from 'vue'
export default {
  setup() {
    //类mounted
    onMounted(() => {})
    //相当于updated
    onUpdate(() => {})
    //相当于destroyen
    onUnmounted(() => {})
    return {}
  }
}
</script>

<style lang="less" scoped></style>
