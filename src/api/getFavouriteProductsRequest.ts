// Import types
import { AccountConfigType, AccountDataType, FavouriteProductType } from '../types'

// Import debug console log
import { debug } from '../utils'

// Import constants
import { DEGIRO_API_PATHS } from '../enums'
const { GET_FAVOURITES_PATH, BASE_API_URL } = DEGIRO_API_PATHS

// tslint:disable-next-line: max-line-length
export function getFavouriteProductsRequest(accountData: AccountDataType, accountConfig: AccountConfigType): Promise<FavouriteProductType[]> {
  return new Promise((resolve, reject) => {

    // Create fetch request options
    const requestOptions: {
      method?: string,
      body?: string,
      headers: {
        [key: string]: string,
      },
      credentials: 'include',
      referer: string,
    } = {
      headers: {
        Cookie: `JSESSIONID=${accountConfig.data.sessionId};`,
      },
      credentials: 'include',
      referer: 'https://trader.degiro.nl/trader/',
    }

    // Create params to reach favourites
    let params = ''
    params += `intAccount=${accountData.data.intAccount}&`
    params += `sessionId=${accountConfig.data.sessionId}`

    // Do the request to get favourites data
    const url = `${BASE_API_URL}${GET_FAVOURITES_PATH}?${params}`
    debug(`Making request to ${url} with params: \n${JSON.stringify(requestOptions)}`)
    fetch(url, requestOptions)
      .then(res => res.json())
      .then((res) => {
        resolve(res.data)
      })
      .catch(reject)
  })
}
