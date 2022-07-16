<template>
  <div class="login">
    <header>
      <van-icon name="arrow-left"/>
      <div class="login_title">{{ $t("login_title") }}</div>
      <van-icon name="ellipsis"/>
    </header>
    <div class="content">
      <img
          :alt="$t('shopRoll')"
          class="shop-roll"
          src="../../static/shoppingRolley.png"
      />
    </div>
    <footer>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
              v-model="userName"
              :rules="[{ required: true, message: '请填写用户名' }]"
              label="用户名"
              name="用户名"
              placeholder="用户名"
          />
          <van-field
              v-model="passWord"
              :rules="[{ required: true, message: '请填写密码' }]"
              label="密码"
              name="密码"
              placeholder="密码"
              type="password"
          />
          <van-field
              v-model="verificationCode"
              :rules="[{ required: true, message: '请填写验证码' }]"
              label="验证码"
              name="验证码"
              placeholder="验证码"
              type="password"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button block native-type="submit" round type="primary">
            提交
          </van-button>
        </div>
      </van-form>

    </footer>
  </div>
</template>

<script>

import {ref} from "vue";

export default {
  name: "Login",
  setup() {
    const userName = ref("");
    const passWord = ref("");
    const verificationCode = ref("");
    const onSubmit = (value) => {
      console.log(value);
    };
    return {
      userName,
      passWord,
      verificationCode,
      onSubmit,
    };
  },
};
</script>

<style lang="less" scoped>
@import "index.less";
</style>
