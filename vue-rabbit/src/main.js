
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

// 测试接口函数
// import {getCategory} from '@/apis/testAPI'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        // el:当前的img元素
        // binging数据值,即src
        console.log(el,binding)
        // useIntersectionObserver(el,([{isIntersecting}]) => {
        //     console.log(isIntersecting)
        // })

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


