<!--  -->
<template>
  <div>
    <Navbar />
    <AppMain></AppMain>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Navbar, AppMain } from './components'
export default defineComponent({
  name: '',
  components: {
    Navbar,
    AppMain
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
