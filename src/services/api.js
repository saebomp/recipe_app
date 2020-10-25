import axios from 'axios';

import {APP_ID, APP_KEY, BASE_URL} from '../config/api_config'

export const getRecipes = async (recipeName) => {
  const url = BASE_URL;
  try {
    const response = await axios.get(url, {
      params:{
        q:recipeName,
        app_id:APP_ID,
        app_key:APP_KEY
      }
    })
    console.log('response', response)

    const recipes = response.data.hits
    return recipes
    
    } 
    catch(error) {
      throw error
  }
}

export const getRecipe = async (recipeUri) => {
  const encodedUri = encodeURIComponent(recipeUri)
  //encodeURIComponent()를 사용해, 서버에 POST로 요청할 양식 필드를 인코딩 하세요. 입력 중 의도치 않게 생성될 수 있는 HTML 특수 개체 등의 "&" 문자를 처리할 수 있습니다.
  //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

  const url = BASE_URL

  try {
    // const response = await axios.get(url, {
    //   params: {
    //     r: encodedUri,
    //     app_id: APP_ID,
    //     app_key: APP_KEY
    //   }
    // })

    const response = await axios.get(
      `${BASE_URL}?r=${encodedUri}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )

    const recipe = response.data[0]

    return recipe
  } catch (error) {
    throw error
  }
}