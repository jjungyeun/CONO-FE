<template>
  <div class="home">
    <img src="../assets/logo.png" />
    <table>
      <tr>
        <td>
          <router-link to="/search">
            <div style="background-color: #e4f2ff">노래방<br />찾기</div>
          </router-link>
        </td>
        <td>
          <router-link to="/search/closest">
            <div style="background-color: #feecff">내 근처<br />노래방</div>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.home {
  background-color: #ffffe4;
  text-align: center;
  min-height: 95vh;
  align-content: center;
}

img {
  width: 35%;
}

table {
  border-spacing: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 200px;
}

td {
  width: 50%;

  div {
    height: 100%;
    align-content: center;
    border-radius: 20px;

    font-size: x-large;
    color: black;
  }
}
</style>
