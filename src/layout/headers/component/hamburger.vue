<template>
<div>
  <el-icon :size="20" @click="handleClick">
    <DArrowLeft />
  </el-icon>
</div>
</template>

<script setup>
import { DArrowLeft } from '@element-plus/icons-vue'
import {ref} from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isCollapseArrow = ref(false)
const handleClick = () => {
  isCollapseArrow.value = !isCollapseArrow.value;
  store.dispatch('app/setCollapse', isCollapseArrow.value)
}


</script>

<style scoped>

</style>