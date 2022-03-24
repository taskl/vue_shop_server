<template>
  <div>
    你好
    <UserLoginInput @userLoginInfo="handleLogin" />
  </div>
</template>

<script>
import UserLoginInput from '@/components/userLoginInput.vue'
import { getLogin }  from '../api/login'
export default {
  components: {
    UserLoginInput
  },
  methods: {
    async handleLogin(val) {
      console.log(val);
      let res = await getLogin({
        username: val.username,
        password: val.password
      })
      console.log(res.data.msg);
      
    }
  }
}
</script>

<style>

</style>