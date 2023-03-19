<template>
<div>
  <el-icon :size="20" @click="handleClick">
    <DArrowLeft />
  </el-icon>
</div>
</template>

<script setup>
import { DArrowLeft } from '@element-plus/icons-vue'


const handleClick = () => {
  console.log('hello');

}


</script>

<style scoped>

</style>