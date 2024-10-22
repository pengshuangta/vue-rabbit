
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'
import { lazyPlugin } from './directives'
import { componentPlugin} from './components'


// 测试接口函数
// import {getCategory} from '@/apis/testAPI'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)
app.use(lazyPlugin)
app.use(createPinia())
app.use(router)
app.use(componentPlugin)


app.mount('#app')



