import { ref} from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI} from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {

  // 导航列表的数据管理

  // 1、state状态:响应式的列表数据
  const categoryList = ref([])

  // 2、action:获取导航数据
  const getCategory = async() =>{
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }


  // 3、返回对象数据state 和 action
  return {
    categoryList,
    getCategory
  }
})