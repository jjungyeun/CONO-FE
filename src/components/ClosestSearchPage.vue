<template>
  <div id="closest-page">
    <div id="no-closest-result" v-show="isSearchSuccess && conoList.length == 0">
      <p>"{{ searchQuery }}" 주변 노래방이 없습니다.</p>
    </div>

    <div id="closest-result" v-show="isSearchSuccess && conoList.length > 0">
      <p>"{{ searchQuery }}" 주변 노래방을 찾았어요.</p>

      <ul>
        <li v-for="(cono, idx) in conoList" v-bind:key="cono.id">
          <SearchElement v-bind:cono="cono" v-bind:isLast="idx == conoList.length - 1" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchElement from './search/SearchElement.vue'

export default {
  name: 'ClosestSearchPage',
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
      this.searchQuery = '성남시 분당구'
      this.isSearchSuccess = true
    }
  },
  created() {
    this.search()
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

#closest-page {
  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
  min-height: 90vh;
}

#closest-result {
  margin-top: 5%;

  p {
    margin-left: 1%;
    color: goldenrod;
  }
}

#no-closest-result {
  text-align: center;
  font-size: large;
  color: gray;
  margin-bottom: 30px;
}
</style>
