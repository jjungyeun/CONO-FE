<template>
  <div id="search-page">
    <table>
      <tr>
        <td style="width: 85%">
          <input
            v-model="query"
            placeholder="검색어를 입력해주세요."
            autocomplete="off"
            @keyup.enter="search()"
          />
        </td>
        <td style="width: 15%">
          <button @click="search()">검색</button>
        </td>
      </tr>
    </table>

    <div id="fail-to-search" v-show="isSearchFailed">
      <p>문제가 발생했습니다. 잠시 후에 다시 시도해 주세요.</p>
    </div>

    <div id="no-search-result" v-show="isSearchSuccess && conoList.length == 0">
      <p>"{{ searchedQuery }}"에 대한 검색 결과가 없습니다.</p>
    </div>

    <div id="search-result" v-show="isSearchSuccess && conoList.length > 0">
      <p>"{{ searchedQuery }}"에 대한 검색 결과입니다.</p>

      <ul>
        <li v-for="(cono, idx) in conoList" v-bind:key="cono.id">
          <SearchElement v-bind:cono="cono" v-bind:isLast="idx == conoList.length - 1" />
        </li>
      </ul>
    </div>

    <div id="add-cono" v-show="isSearchSuccess">
      <router-link to="/register"><p>❕ 찾으시는 노래방이 없나요?</p></router-link>
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
      query: '',
      searchedQuery: '',
      isSearchSuccess: false,
      isSearchFailed: false,
      conoList: []
    }
  },
  methods: {
    search() {
      if (this.query == '') {
        alert('검색어를 입력해주세요.')
      } else {
        this.searchFromServer()
      }
    },
    async searchFromServer() {
      this.axios
        .get('/be-api/conos', {
          params: {
            q: this.query
          }
        })
        .then((res) => {
          this.conoList = res.data.content
          this.isSearchFailed = false
          this.isSearchSuccess = true
        })
        .catch((res) => {
          console.error(res)
          this.isSearchSuccess = false
          this.isSearchFailed = true
        })
        .finally(() => {
          this.searchedQuery = this.query
        })
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
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
  min-height: 90vh;
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

#no-search-result,
#fail-to-search {
  text-align: center;
  font-size: large;
  color: gray;
  margin-bottom: 30px;
}

#add-cono {
  text-align: center;
  a {
    color: gray;
    font-size: small;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
