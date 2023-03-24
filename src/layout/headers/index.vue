<template>
<div class="navbar">
  <Hamburger />
  <BreadCrumb />
  <Avatar class="navbar-right"  />
</div>
</template>

<script setup>
import Hamburger from '@/layout/headers/component/hamburger.vue'
import BreadCrumb from '@/layout/headers/component/breadCrumb.vue'
import Avatar from '@/layout/headers/component/avatar.vue'
</script>

<style scoped lang="scss">
.navbar {
  background: pink;
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    :deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  .arrow {
    color: pink;
  }
}
</style>