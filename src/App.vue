<script setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/common/MyHeader.vue'
import MyFooter from './components/common/MyFooter.vue'
</script>

<template>
  <MyHeader />
  <RouterView />
  <MyFooter />
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;

  > header {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  > footer {
    margin-top: auto; /* footer를 #app의 맨 아래로 보냄 */
  }
}
</style>
