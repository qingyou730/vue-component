<template>
  <div class="layout-center full-w">
    <div id="echarts" ref="refDom" style="width: 60vw; height: 39vw"></div>
  </div>
</template>

<script setup>
import echarts from '../index'
import { ref, watchEffect, onMounted, onUnmounted } from 'vue'
import registerMap, {getPovinceMap} from './regit'
import axios from '../../axios/index'
registerMap(echarts)
const refDom = ref()
const serverDate = ref()

let myChart
watchEffect(() => {
  console.log('serverDate: ', serverDate.value)
  if (refDom.value) {
    console.log('refDom.value: 2', refDom.value)
    myChart = echarts.init(refDom.value)
    // 指定图表的配置项和数据
    var name_title = '网站访问统计'
    var mapName = 'china'
    var data = getPovinceMap(serverDate.value)
    var option = {
      title: {
        text: name_title,
        x: 'center',
        textStyle: {
          fontSize: 24
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          var toolTiphtml = ''
          if (isNaN(params.value)) {
            toolTiphtml = params.name + '用户访问: 0 次'
          } else {
            toolTiphtml = params.name + '用户访问 ' + params.value + '次'
          }
          //console.log(toolTiphtml)
          return toolTiphtml
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      visualMap: {
        show: true,
        left: 'left',
        top: 'bottom',
        seriesIndex: [0],
        type: 'piecewise',
        pieces: [
          { min: 200, color: '#F56C6C' },
          { min: 100, max: 200, color: '#409EFF' },
          { min: 10, max: 100, color: `#f3d19e` },
          { min: 5, max: 10, color: `#b3e19d` },
          { min: 1, max: 3, color: `#79bbff` },
          {min: 0, max: 0, color: `#a0cfff`}
        ],
        textStyle: {
          color: '#000000'
        }
      },
      geo: {
        show: true,
        map: mapName,
        label: {
          normal: {
            show: true,
            fontSize: 12
          },
          emphasis: {
            show: false
          }
        },
        roam: false,
        itemStyle: {
          normal: {
            areaColor: '#FFFFFF',
            borderColor: '#666666'
          },
          emphasis: {
            areaColor: '#0099CC'
          }
        }
      },
      series: [
        {
          type: 'map',
          map: mapName,
          geoIndex: 0,
          animation: false,
          data: data
        }
      ]
    }

    myChart.setOption(option)
  }
})
const fun = function () {
  myChart.resize()
}
onMounted(async () => {
  window.addEventListener('resize', fun)
  serverDate.value = await axios.get('inter')
})

onUnmounted(() => {
  window.removeEventListener('resize', fun)
})

// 接下来的使用就跟之前一样，初始化图表，设置配置项
</script>

<style lang="scss" scoped></style>
