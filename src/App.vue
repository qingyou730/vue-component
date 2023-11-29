<template>
  <header class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-content">
        <div v-for="(item, index) in navs" :key="item.name" :class="{active: $route.path === item.path, 'm-r-12': index === 1}" @click="handleClick(item.path)">
          {{item.name}}
        </div>
      </div>
    </div>
  </header>

  <!-- <nav class="nav" style="margin-top: 2em;">
    <router-link to="/">Button</router-link>
    <router-link to="/icon">Icon</router-link>
    <router-link to="/tooltip">Tooltip</router-link>
    <router-link to="/dialog">Dialog</router-link>
  </nav> -->
  <div class="displayArea">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import api from './axios/index';
import { useRouter } from 'vue-router';
onMounted(async () => {
  console.log('App mounted');
  const val = await api.post('/inter');
  console.log('val', val);
});
const navs = [
  {
    name: '组件展示',
    path: '/comHome',
  },
  {
    name: '访问统计',
    path: '/echarts',
  },
];
const router = useRouter();

const handleClick = (path)=> {
  router.push(path);
}



</script>

<style lang="scss" scoped>
h1.title {
  text-align: center;
  // margin-top: 5em;
  font-weight: 200;
}

.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>