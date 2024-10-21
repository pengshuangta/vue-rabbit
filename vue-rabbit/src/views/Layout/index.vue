<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

// 触发导航栏的action
import {useCategoryStore} from '@/stores/category'
import { onMounted } from "vue";

// 1、执行cation获取实例
const categoryStore = useCategoryStore()

// 2、在合适的时机,即挂载的时候onMount函数执行
onMounted( () =>{
  categoryStore.getCategory()
})

</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key,破坏复用机制,强制重用 -->
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView /> 
  <LayoutFooter />
</template>
