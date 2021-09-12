<template>
  <div id="my_chart" />
</template>

<script>
import { plotyStockChart } from '~/utils/chart.util'

export default {
  name: 'StockChart',
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
