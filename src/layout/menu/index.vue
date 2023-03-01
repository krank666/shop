<template>
<div>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      router
      unique-opened
      :default-active="Active"
  >
    <el-sub-menu v-for="item in menuList" :key="item.id" :index="item.id">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
            :index="`/` + value.path"
            v-for="value in item.children"
            :key="value.id"
            @click="savePath(value.path)"
        >
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

const Active = ref(sessionStorage.getItem('path') || '/users')
const menuList = ref([])
const initMenuList = async () => {
  const res = await getMenu()
  menuList.value = res
}
initMenuList()

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}


</script>

<style scoped lang="scss">
//:deep .el-menu{
//  height: 100vh !important;
//}
</style>