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
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style lang="less" scoped>
@import "index.less";
</style>
