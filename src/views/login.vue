<template>
  <transition name="fade">
    <o-view column hor ver class="login">
      <h1>~~次饭饭APP~~</h1>
      <p>欢迎回来!</p>
      <router-link to="/">
        <o-view ver hor class="btn">
          <o-icon class="weichat" name="weichat" />
          <span>使用微信登录</span>
        </o-view>
      </router-link>
    </o-view>
  </transition>
</template>
<style lang="scss" scoped>
.login {
  background-image: url(../assets/image/login.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  h1 {
    margin-top: 60%;
    margin-bottom: 0;
  }
  p {
    margin-top: 10px;
    margin-bottom: 60px;
  }
}
.btn {
  height: 40px;
  line-height: 40px;
  width: 70vw;
  border-radius: 20px;
  text-align: center;
  background-color: #5860ff;
  color: #fff;
  position: relative;

  .weichat {
    fill: #fff;
    height: 30px;
    width: 30px;
  }

  span {
    padding-left: 6px;
  }

  &:after {
    content: "";
    display: block;
    box-shadow: 0 6px 20px #5860ff;
    width: 80%;
    height: 50%;
    margin: 0 auto;
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
  }
}

.fade-enter-active {
  transition: all 0.4s ease;
}
.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .fade-leave-active for below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
</style>
