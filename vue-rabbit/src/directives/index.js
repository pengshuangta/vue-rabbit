import { install } from "element-plus";
// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app){
        // 定义全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
              console.log(isIntersecting)
              if (isIntersecting) {
                // 进入视口区域
                el.src = binding.value
                stop()
              }
            },
        )
    }
})

    }
}