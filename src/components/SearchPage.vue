<template>
  <div id="search-page">
    <input v-model="searchQuery" placeholder="검색어를 입력해주세요." />
    <ul>
      <li v-for="(cono, idx) in conoList" v-bind:key="cono.id">
        <SearchElement v-bind:cono="cono" v-bind:isLast="idx == conoList.length - 1" />
      </li>
    </ul>
  </div>
</template>

<script>
import SearchElement from './search/SearchElement.vue'

export default {
  name: 'SearchPage',
  components: {
    SearchElement
  },
  data: () => {
    return {
      searchQuery: '',
      conoList: [
        {
          id: 3,
          name: '슈퍼스타 코인노래방 미금역점',
          address: '성남시 분당구'
        },
        {
          id: 4,
          name: '슈퍼스타 코인노래방 미금역 2호점',
          address: '성남시 분당구'
        },
        {
          id: 5,
          name: '판타스틱 코인노래방 미금역점',
          address: '성남시 분당구'
        }
      ]
    }
  }
}
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul {
  margin-top: 3%;
  margin-bottom: 3%;
}

div {
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 3%;
  margin-bottom: 5%;
}

input {
  padding: 10px;
  padding-left: 15px;
  width: 100%;
  border-radius: 20px;
  border: solid 1px lightgray;
  font-size: medium;
}

input:focus {
  border-color: aqua;
  outline: none;
}
</style>
