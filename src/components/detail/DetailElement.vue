<template>
  <tr>
    <td style="width: 30%">
      <span id="detail-title">{{ title }}</span>
    </td>
    <td style="width: 70%">
      <span id="detail-content">{{ content }}</span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'DetailElement',
  props: {
    title: String,
    content: String
  }
}
</script>

<style scoped>
#detail-title {
  width: 100%;
  font-weight: bold;
  color: #3a3a3a;
  font-size: medium;
}

#detail-content {
  width: 100%;
}
</style>
