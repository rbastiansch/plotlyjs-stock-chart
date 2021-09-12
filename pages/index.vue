<template>
  <div class="indexPage">
    <stock-chart />
  </div>
</template>

<script>
import StockChart from '~/components/StockChart.vue'

export default {
  components: {
    StockChart
  }
}
</script>

<style lang="scss" scoped>
.indexPage {
  padding: 1rem;
}
</style>
