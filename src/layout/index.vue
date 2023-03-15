<template>
  <el-container class="app-wrapper">
    <el-aside class="sidebar-container" :width="asideWidth">
      <Menu />
    </el-aside>
    <el-container class="container">
      <el-header>
        <Headers />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import Menu from './menu/index'
import Headers from './headers/index'
import variables from '@/styles/js.module.scss'
const asideWidth = ref(variables.sideBarWidth)


</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
:deep .el-header {
  padding: 0;
}
</style>