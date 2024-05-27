<template>
  <div id="search-page">
    <table>
      <tr>
        <td style="width: 85%">
          <input v-model="searchQuery" placeholder="검색어를 입력해주세요." autocomplete="off" />
        </td>
        <td style="width: 15%">
          <button @click="search()">검색</button>
        </td>
      </tr>
    </table>

    <div id="no-search-result" v-show="isSearchSuccess && conoList.length == 0">
      <p>"{{ searchQuery }}"에 대한 검색 결과가 없습니다.</p>
    </div>

    <div id="search-result" v-show="isSearchSuccess && conoList.length > 0">
      <p>"{{ searchQuery }}"에 대한 검색 결과입니다.</p>

      <ul>
        <li v-for="(cono, idx) in conoList" v-bind:key="cono.id">
          <SearchElement v-bind:cono="cono" v-bind:isLast="idx == conoList.length - 1" />
        </li>
      </ul>
    </div>

    <div id="add-cono" v-show="isSearchSuccess">
      <p>❕ 찾으시는 노래방이 없나요?</p>
    </div>
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
      isSearchSuccess: false,
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
  },
  methods: {
    search() {
      if (this.searchQuery == '') {
        alert('검색어를 입력해주세요.')
      } else {
        this.isSearchSuccess = true
      }
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
  margin-top: 2%;
  margin-bottom: 5%;
}

#search-page {
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 5%;
  margin-bottom: 5%;
}

table {
  padding-left: 1%;
  padding-right: 1%;
  width: 100%;
}

td {
  align-content: center;
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

button {
  width: 90%;
  margin-left: 10%;
  padding: 10px;
  background-color: lightgray;
  border-radius: 20px;
  border: none;
  font-size: small;
  color: gray;
  cursor: pointer;
}

#search-result {
  margin-top: 5%;

  p {
    margin-left: 1%;
    color: goldenrod;
  }
}

#no-search-result {
  text-align: center;
  font-size: large;
  color: gray;
  margin-bottom: 30px;
}

#add-cono {
  text-align: center;
  color: gray;
  font-size: small;
  cursor: pointer;
  text-decoration: underline;
}
</style>
