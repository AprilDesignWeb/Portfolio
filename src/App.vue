<template>
  <div id="nav">
    <div class="in">
      <div class="logo"><img src="./assets/logo.png" alt="四月設計" /></div>
      <div class="menu">
        <router-link to="/">回首頁</router-link>
        <router-link to="/about">關於四月設計</router-link>
        <router-link to="/">聯絡我們</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">

#nav {
  box-shadow: 0 5px 5px #ccc;
  padding: 10px 0;
  .in {
      @extend %center;
    display: flex;
    height: 80px;
    align-items: stretch;
  }
  .logo {
    flex: 30%;
    text-align: left;
    img {
      height: 100%;
    }
  }
  .menu {
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a{
        text-decoration: none;
        color: #343434;
        +a{
            margin-left: 20px;
        }
    }
  }
}
</style>
