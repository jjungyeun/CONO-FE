<template>
  <header>
    <div class="header-wrapper" v-show="$route.path != '/'">
      <router-link to="/"><img class="header-logo" src="../../assets/logo.png" /></router-link>
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
  box-shadow: 0 6px 8px -3px rgba(0, 0, 0, 0.15);
}
</style>
