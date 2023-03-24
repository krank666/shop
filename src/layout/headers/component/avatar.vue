<template>
<div>
  <el-dropdown trigger="click">
    <el-avatar :size="50" shape="square" :src="circleUrl" />

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="SwitchFilled" @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</div>

</template>

<script setup>
import { ref } from 'vue'
import { useStore }  from "vuex";
const store = useStore()
const info = JSON.parse(localStorage.getItem('userInfo'))
const logout = () => {
  store.dispatch('app/logout')
}

import { Plus, SwitchFilled } from '@element-plus/icons-vue'
const circleUrl = ref('https://tse3-mm.cn.bing.net/th/id/OIP-C.QIJE5LRkfilimiZmEG38mAHaHd?w=196&h=197&c=7&r=0&o=5&pid=1.7')
</script>

<style scoped>

</style>