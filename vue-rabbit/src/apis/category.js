import httpInstance from '@/utils/http'

/**
 * @description: 获取首页分类列表
 * @param {*}
 * @return {*}
 */
export function getCategoryAPI(id){
    return httpInstance({
        url : '/category',
        params: {
            id
        }
    })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*}id 分类id
 * @return {*}
 */
export function getCategoryFilterAPI(id){
    return httpInstance({
        url :"/category/sub/filter",
        params: {
            id
        }
    })
}