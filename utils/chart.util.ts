import * as Plotly from 'plotly.js-dist'

interface StockPayload {
  date: string;
  total_rev: string;
  total_vol: string;
}

const unpackValuesFromPayload = (dataPayload: Array<StockPayload>, key: keyof StockPayload) => {
  return dataPayload.map(item => item[key] )
}

export const plotyStockChart = (dataPayload: Array<StockPayload>, elementId: string): void => {
  const line1 = {
    type: 'scatter',
    mode: 'lines',
    name: 'total_rev',
    x: unpackValuesFromPayload(dataPayload, 'date'),
    y: unpackValuesFromPayload(dataPayload, 'total_rev'),
    line: { color: '#17BECF' }
  }

  const line2 = {
    type: 'scatter',
    mode: 'lines',
    yaxis: 'y2',
    name: 'total_vol',
    x: unpackValuesFromPayload(dataPayload, 'date'),
    y: unpackValuesFromPayload(dataPayload, 'total_vol'),
    line: { color: '#7C3884' }
  }

  const chartData = [line1, line2]

  const chartLayout = {
    title: 'Stock market chart',
    yaxis: {
      title: 'Total revenue',
      titlefont: {color: '#17BECF'},
      tickfont: {color: '#17BECF'}
    },
    yaxis2: {
      title: 'Total volume',
      titlefont: {color: '#7C3884'},
      tickfont: {color: '#7C3884'},
      overlaying: 'y',
      side: 'right'
    }
  }

  Plotly.newPlot(elementId, chartData, chartLayout)
}
