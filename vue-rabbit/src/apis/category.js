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