<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in breadCrumbList"
      :key="index"
      :to="{path: item.path}"
    >{{ $t(`menus.${item.name}`) }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const route = useRoute()
const breadCrumbList = ref([])

watch(route, (nv, ov) => {
  breadCrumbList.value = nv.matched
 },
    {deep: true, immediate: true}
)


</script>

<style scoped>

</style>
