<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script>
export default {
  name: 'common-md',
  data() {
    return {
      text: 'test'
    }
  }
}
</script>
<style lang="less" scoped>
:deep(.hljs-keyword) {
  color: #f60;
}
</style>
