<template>
  <div>
      <input type="text" v-model="form.username">
      <br>
      <input type="text" v-model="form.password">
      <br>
      <button @click="userLoginInfo">登录</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        userLoginInfo() {
            this.$emit('userLoginInfo', this.form)
        }
    }
}
</script>

<style>

</style>