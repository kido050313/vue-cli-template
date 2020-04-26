import request from '@/utils/request'


export function fetchArticle() {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get'
  })
}


