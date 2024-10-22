// 把components里面的组件注册成全局统一的组件
// 通过插件的方式
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
    install(app){
        // app.component('组件名字','组件对象')
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}