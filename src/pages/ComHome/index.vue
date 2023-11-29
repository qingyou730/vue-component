<template>
 <nav class="nav" style="margin-top: 2em;">
    <router-link to="/comHome">Button</router-link>
    <router-link to="/comHome/icon">Icon</router-link>
    <router-link to="/comHome/tooltip">Tooltip</router-link>
    <router-link to="/comHome/dialog">Dialog</router-link>
  </nav>
  <div class="displayArea">
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>