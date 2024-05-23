<template>
  <header>
    <div class="header-wrapper">
      <router-link to="/" v-show="$route.path != '/'"
        ><img class="header-logo" src="../../assets/logo.png"
      /></router-link>
    </div>
  </header>
</template>

<style>
header {
  background-color: #ffffe4;
}

.header-logo {
  width: 30%;
}

.header-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  padding: 0 16px;
}
</style>
