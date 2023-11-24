<template>
  <h1 class="row-title">不同方向</h1>
  <div class="row">
    <Dyd-Tooltip content="this is a test" placement="top" @visible-change="handle">
      <Dyd-Button type="primary">top</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="bottom">
      <Dyd-Button type="warning">bottom</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="left">
      <Dyd-Button type="danger">left</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="right">
      <Dyd-Button type="success">right</Dyd-Button>
    </Dyd-Tooltip>
  </div>

  <div class="row">
    <Dyd-Tooltip content="this is a test top-start" placement="top-start" @visible-change="handle">
      <Dyd-Button type="primary">top-start</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test top-end" placement="top-end">
      <Dyd-Button type="warning">top-end</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test right-start" placement="right-start">
      <Dyd-Button type="danger">right-start</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test right-end" placement="right-end">
      <Dyd-Button type="success">right-end</Dyd-Button>
    </Dyd-Tooltip>
  </div>

  <h1 class="row-title">切换触发模式</h1>
  <div class="row">
    <Dyd-Tooltip content="this is a test" placement="top" trigger="click">
      <Dyd-Button type="primary">top</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="bottom" trigger="click">
      <Dyd-Button type="warning">bottom</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="left" trigger="click">
      <Dyd-Button type="danger">left</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="right" trigger="click">
      <Dyd-Button type="success">right</Dyd-Button>
    </Dyd-Tooltip>
  </div>
  <h1 class="row-title">手动触发模式</h1>
  <div class="row-c">
    <Dyd-Tooltip content="this is a test" placement="right" manual ref="tooltipRef">
      <Dyd-Button type="primary">right</Dyd-Button>
    </Dyd-Tooltip>
  </div>
  <div class="row-c">
    <div style="padding: 0 8px;"> <Dyd-Button @click="openHandler">打开提示框</Dyd-Button></div>
    <div style="padding: 0 8px;"><Dyd-Button @click="closeHandler">关闭提示框</Dyd-Button></div>
  </div>
  <h1 class="row-title">延时触发</h1>
  <div class="row">
    <Dyd-Tooltip
      content="this is a test"
      placement="top"
      :open-delay="500"
      :close-delay="200"
      @visible-change="handle"
    >
      <Dyd-Button type="primary">top</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip
      content="this is a test"
      placement="bottom"
      :open-delay="1000"
      :close-delay="10000"
    >
      <Dyd-Button type="warning">bottom</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="left" :open-delay="2000" :close-delay="2000">
      <Dyd-Button type="danger">left</Dyd-Button>
    </Dyd-Tooltip>
    <Dyd-Tooltip content="this is a test" placement="right" :open-delay="2000" :close-delay="2000">
      <Dyd-Button type="success">right</Dyd-Button>
    </Dyd-Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tooltipRef = ref(null)
const handle = (isShow) => {
  if (isShow) console.log('提示框显示')
  else console.log('提示框隐藏')
}

const openHandler = () => {
  // 用户要手动打开
  tooltipRef.value.show()
}
const closeHandler = () => {
  // 用户要手动关闭
  tooltipRef.value.hide()
}
</script>

<style lang="scss" scoped></style> 
