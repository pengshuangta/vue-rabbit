import httpInstance from '@/utils/http'

// 获取banner
export function getBannerAPI(param = {}){
    // 默认:1,商品:2
    const { distributionSite = '1'} = param
    return httpInstance({
        url:'home/banner',
        params: {
            distributionSite
        }
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function getHomeNewAPI(){
    return httpInstance({
        url:'home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHomeHotAPI(){
    return httpInstance({
        url:'home/hot'
    })
}

/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export function getHomeGoodsAPI(){
    return httpInstance({
        url: "/home/goods"
    })
}

