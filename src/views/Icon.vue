<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <Dyd-Icon icon="user-secret" />
    <Dyd-Icon icon="bars" />
    <Dyd-Icon icon="shield-halved" />
    <Dyd-Icon icon="file" />
    <Dyd-Icon icon="filter" />
    <Dyd-Icon icon="gear" />
    <Dyd-Icon icon="barcode" />
    <Dyd-Icon icon="folder" />
    <Dyd-Icon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <Dyd-Icon icon="user-secret" size="2xs" />
    <Dyd-Icon icon="bars" size="xs" />
    <Dyd-Icon icon="shield-halved" size="sm" />
    <Dyd-Icon icon="file" size="lg" />
    <Dyd-Icon icon="filter" size="xl" />
    <Dyd-Icon icon="gear" size="2xl" />
    <Dyd-Icon icon="barcode" size="2x" />
    <Dyd-Icon icon="folder" size="3x" />
    <Dyd-Icon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <Dyd-Icon icon="user-secret" rotation="90" size="xl" />
    <Dyd-Icon icon="bars" rotation="270" size="xl" />
    <Dyd-Icon icon="shield-halved" rotation="180" size="xl" />
    <Dyd-Icon icon="file" flip="horizontal" size="xl" />
    <Dyd-Icon icon="filter" flip="vertical" size="xl" />
    <Dyd-Icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <Dyd-Icon icon="user-secret" size="xl" beat />
    <Dyd-Icon icon="bars" size="xl" beat-fade />
    <Dyd-Icon icon="shield-halved" size="xl" bounce />
    <Dyd-Icon icon="file" size="xl" fade />
    <Dyd-Icon icon="filter" size="xl" flip />
    <Dyd-Icon icon="gear" size="xl" shake />
    <Dyd-Icon icon="barcode" size="xl" spin />
    <Dyd-Icon icon="folder" size="xl" spin spin-reverse />
    <Dyd-Icon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <Dyd-Icon icon="user-secret" size="xl" type="primary" />
    <Dyd-Icon icon="bars" size="xl" type="success" />
    <Dyd-Icon icon="shield-halved" size="xl" type="info" />
    <Dyd-Icon icon="file" size="xl" type="warning" />
    <Dyd-Icon icon="filter" size="xl" type="danger" />
    <Dyd-Icon icon="gear" size="xl" color="#e47412" />
    <Dyd-Icon icon="barcode" size="xl" color="#7ec102" />
    <Dyd-Icon icon="folder" size="xl" color="skyblue" />
    <Dyd-Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
