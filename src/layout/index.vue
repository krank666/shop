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
const romanToInt = (s) => {
  const obj = {I:1, V:5, X: 10, L: 50, C: 100, D: 500, M: 1000}
  let num = 0
  for (let i = 0; i < s.length; i ++) {
    if (obj[s[i]] < obj[s[i+1]]) {
      num +=  obj[s[i+1]] - obj[s[i]]
      i++
      continue
    }
    num += obj[s[i]]
  }
  console.log(num);
  return num
};
romanToInt('MCMXCIV')

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