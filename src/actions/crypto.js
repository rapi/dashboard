import {
  CRYPTO_API,
  // CRYPTO_HISTORY_API,
  CRYPTO_PAIR_LOADING,
  // CRYPTO_PAIRS_LOADING,
  CRYPTO_PAIR_ERROR,
  CRYPTO_PAIR_FETCH,
  CRYPTO_PAIRS_FETCH,
  CRYPTO_PAIR_FETCH_HISTORY,
  CRYPTO_LOADING,
  // GET_RANDOM
} from 'constants/crypto'
import {get} from './requests'
import {danger} from './notifications'

// Fetch list of pairs of symbols
export const getCryptoPairs = (filter) => ((dispatch) => {
  //Make the GET request
  dispatch(cryptoLoading(true))
  return get(CRYPTO_API, filter)
    //On response
    .then((list) => {
      //Add pairs in store
      dispatch(cryptoPairsFetch(list.reduce((res,el)=>({
        ...res,
        //Prepare every ellement
        [el.from+'/'+el.to]:{
          ...el,
          //format every element date from string to date
          dailyHistory: el.dailyHistory.reduce((arr, cur) => arr.concat({
            ...cur,
            time: new Date(cur.time)
          }),[])
        }
      }) ,{})))
  })
  .catch(e => dispatch(danger(e + '')))
  .finally(e => dispatch(cryptoLoading(false)))

})
// export const getCryptoPair = (pair) => ((dispatch) => {
//   dispatch(cryptoPairLoading(pair, true));
//   return get(CRYPTO_API + '/' + pair).then((e) => ({
//     ...e,
//     dailyHistory: e.dailyHistory.reduce((arr, cur) => arr.concat({
//       ...cur,
//       time: new Date(cur.time)
//     }), [])
//   })).then(e => dispatch(cryptoPairFetch(pair, e))).catch((e) => {
//     dispatch(danger(e + ''))
//     dispatch(cryptoPairError(pair, e + ''))
//   }). finally((e) => dispatch(cryptoPairLoading(pair, false)))
// })
//
// export const getCryptoHistory = (pair) => ((dispatch) => {
//   dispatch(cryptoPairLoading(pair, true));
//   return get(CRYPTO_HISTORY_API + '/' + pair).then((e) => e.reduce((arr, cur) => arr.concat({
//     ...cur,
//     time: new Date(cur.time)
//   }), [])).then(e => dispatch(cryptoPairFetchHistory(pair, e))).catch((e) => {
//     dispatch(danger(e + ''))
//     dispatch(cryptoPairError(pair, e + ''))
//   }). finally((e) => dispatch(cryptoPairLoading(pair, false)))
// })

export const cryptoLoading = (bool) => ({
  type: CRYPTO_LOADING,
  payload: bool
})

export const cryptoPairLoading = (pair, bool) => ({
  type: CRYPTO_PAIR_LOADING,
  payload: {
    pair,
    bool
  }
})
export const cryptoPairError = (pair, error) => ({
  type: CRYPTO_PAIR_ERROR,
  payload: {
    pair,
    error
  }
})
export const cryptoPairFetchHistory = (pair, history) => ({
  type: CRYPTO_PAIR_FETCH_HISTORY,
  payload: {
    pair,
    history
  }
})
export const cryptoPairFetch = (pair, data) => ({
  type: CRYPTO_PAIR_FETCH,
  payload: {
    pair,
    data
  }
})
export const cryptoPairsFetch = (data) => ({
  type: CRYPTO_PAIRS_FETCH,
  payload: {
    data
  }
})
