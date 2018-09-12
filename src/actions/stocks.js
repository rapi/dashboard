import {
  STOCKS_API,
  // STOCKS_HISTORY_API,
  STOCKS_PAIR_LOADING,
  // STOCKS_PAIRS_LOADING,
  STOCKS_PAIR_ERROR,
  STOCKS_PAIR_FETCH,
  STOCKS_PAIRS_FETCH,
  STOCKS_PAIR_FETCH_HISTORY,
  STOCKS_LOADING,
  // GET_RANDOM
} from 'constants/stocks'
import {get} from './requests'
import {danger} from './notifications'

// Fetch list of pairs of symbols
export const getStockList = (filter) => ((dispatch) => {
  //Make the GET request
  dispatch(stocksLoading(true))
  return get(STOCKS_API, filter)
    //On response
    .then((list) => {
      //Add pairs in store
      dispatch(stocksListFetch(list.reduce((res,el)=>({
        ...res,
        //Prepare every ellement
        [el.name]:{
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
  .finally(e => dispatch(stocksLoading(false)))

})

export const stocksLoading = (bool) => ({
  type: STOCKS_LOADING,
  payload: bool
})

export const stocksPairLoading = (pair, bool) => ({
  type: STOCKS_PAIR_LOADING,
  payload: {
    pair,
    bool
  }
})
export const stocksPairError = (pair, error) => ({
  type: STOCKS_PAIR_ERROR,
  payload: {
    pair,
    error
  }
})
export const stocksPairFetchHistory = (pair, history) => ({
  type: STOCKS_PAIR_FETCH_HISTORY,
  payload: {
    pair,
    history
  }
})
export const stocksPairFetch = (pair, data) => ({
  type: STOCKS_PAIR_FETCH,
  payload: {
    pair,
    data
  }
})
export const stocksListFetch = (data) => ({
  type: STOCKS_PAIRS_FETCH,
  payload: {
    data
  }
})
