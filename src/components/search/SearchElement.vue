<template>
  <div>
    <router-link v-bind:to="`/cono/${cono.id}/detail`">
      <p class="cono-name">{{ cono.name }}</p>
      <p class="cono-address">{{ cono.address }}</p>
    </router-link>
  </div>
  <hr v-show="!isLast" />
</template>

<script>
export default {
  props: {
    cono: Object,
    isLast: Boolean
  }
}
</script>

<style scoped>
.cono-name {
  text-decoration: none;
  color: black;
  font-size: large;
}

.cono-address {
  font-size: medium;
  color: gray;
}

hr {
  width: 100%;
  height: 1px;
  background-color: lightgray;
  border: 0;
  margin-top: 10px;
}

div {
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 10px;
}
</style>
