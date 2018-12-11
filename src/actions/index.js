// export function changeFilter(filter) {
//   return{
//     type: 'CHANGE_FILTER',
//     filter
//   }
// }

import { ADD_ARTICLE } from '../constants/action-types';

// export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

export function addArticle(article) {
  return {
    type: ADD_ARTICLE,
    payload: article,
  }
}
