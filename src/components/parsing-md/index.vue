<!-- parsing -->
<template>
  <README></README>
</template>

<script>
import { defineComponent } from 'vue'
import README from '@post/README.md'
export default defineComponent({
  name: 'parsing-md',
  components: {
    README
  },
  setup() {
    console.log(README)
    let contents = document.getElementsByClassName('markdown-body')[0]
    console.log('🚀 ~ file: index.vue ~ line 18 ~ setup ~ contents', contents)
    return {}
  }
})
</script>

<style lang="less" scoped>
.markdown-body {
  border: 1px solid #e5e5e5;
  background: #f9f9f9;
  padding: 30px;
  margin-bottom: 30px;
  position: relative;
  margin-top: 90px;
}
.table-of-contents {
  position: absolute;
  top: 0;
  width: 100px;
  height: 100px;
  z-index: 99999;
  border: 1px solid #e5e5e5;
}
#container-md {
  border: 1px solid #f40;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  z-index: 99999;
}
</style>
