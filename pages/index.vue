<template>
  <div class="text-center">
    <h1 class="title">Data chart with D3.js</h1>
    <div id="my_chart"></div>
  </div>
</template>

<script>
import { plotyStockChart } from '~/utils/chart.util'

export default {
  data () {
    return {
      csv: null
    }
  },
  async fetch() {
    this.csv = await this.$content('stock')
      .fetch()
    this.plotyChart()
  },
  methods: {
    plotyChart () {
      const data = this.csv[0].body
      plotyStockChart(data, 'my_chart')
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Rubik';
  font-size: 25px;
  color: #444444;
}
.text-center {
  text-align: center;
}
</style>
