<template>
<div>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
      unique-opened
  >
    <el-sub-menu v-for="item in menuList" :key="item.id" :index="item.id">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="`/` + value.path" v-for="value in item.children" :key="value.id">
          {{ value.authName }}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</div>
</template>

<script setup>
import { Location } from '@element-plus/icons-vue'
import { getMenu } from '@/api/menu'
import { ref } from 'vue'

const menuList = ref([])
const initMenuList = async () => {
  const res = await getMenu()
  console.log(res);
  menuList.value = res
}

initMenuList()

</script>

<style scoped lang="scss">
//:deep .el-menu{
//  height: 100vh !important;
//}
</style>