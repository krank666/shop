<template>
<div class="box">
  <el-form class="form" :model="form" ref="ruleFormRef" label-width="120px">
    <el-form-item>
      <h3>{{ $t('login.title')}}</h3>
    </el-form-item>
    <el-form-item label="账号" prop="username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button size="large" type="primary" @click="submit">{{ $t('login.btnTitle')}}</el-button>
      <el-button size="large"  @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from "vuex"
const store = useStore()

const form = ref(
    {
      username: 'admin',
      password:'123456'
    }
)
const submit = () => {
  store.dispatch('app/login', form.value)
}

const ruleFormRef = ref(null)
const resetForm = () => {
  ruleFormRef.value.resetFields()
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 100%;
  height: 100%;
  .form {
    position: absolute;
    width: 800px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 10em;
    margin:auto;
  }
}
</style>
