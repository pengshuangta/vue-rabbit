
import {ref,onMounted} from "vue"
import { getCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router"

export function useCategory() {
    // 获取分类
    const route = useRoute();
    const categoryData = ref({});
    // (id = route.params.id):当没有传参数,id默认 = route.parmas.id
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        console.log(res);
        categoryData.value = res.result;
    };
    onMounted(() => {
        // 
        getCategory();
    });

    // 在路由发生变化时,需要在重新执行获取分类
    onBeforeRouteUpdate((to) => {
        console.log("路由变化了")
        // 最新的路由id
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}