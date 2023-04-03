<template>
<div>
  <el-dropdown trigger="click" >
    <el-avatar :size="50" shape="square" :src="circleUrl" />
    <template #dropdown>
      <el-dropdown-menu class="test" >
        <el-dropdown-item :icon="Dessert">
          <el-row style="width: 100%;">
            <el-col :span="12">指令菜单</el-col>
            <el-col :span="12">
              <span class="button">{{ first }}</span>
              <span class="button">K</span>
            </el-col>
          </el-row>
        </el-dropdown-item>
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

const first = ref('')
const init = () => {
  if(store.getters.osType === 'WIN') {
    first.value = 'Ctrl'
  } else {
    first.value = '⌘'
  }
}
init()

const info = JSON.parse(localStorage.getItem('userInfo'))
const logout = () => {
  store.dispatch('app/logout')
}
import { Plus, SwitchFilled, Dessert } from '@element-plus/icons-vue'
const circleUrl = ref('https://tse3-mm.cn.bing.net/th/id/OIP-C.QIJE5LRkfilimiZmEG38mAHaHd?w=196&h=197&c=7&r=0&o=5&pid=1.7')
</script>

<style scoped lang="scss">
.test {
  width: 220px !important;
  .button {
    font-size: 14px;
    color: #666;
    background:	#F5F5F5;
    min-width: 25px!important;
    height: 25px;
    padding: 0 4px!important;
  }
}
</style>
