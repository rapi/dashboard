import {
  SYMBOLS_API,
  SYMBOLS_LOGO_API,
  SYMBOLS_LOADING,
  // GET_RANDOM
} from 'constants/symbols'
import {get,del,post} from './requests'
import {
  danger,
} from './notifications'

export const getRandom = () => {
  return(dispatch) => {
    return dispatch(getSymbols({name: 'random'})).then(
      (e)=>{
        return e[0]
      }
    )
  }
}
export const removeSymbol = (id) => ((dispatch) => {
    dispatch(symbolsLoading(true));
    return del(SYMBOLS_API+id)
})

export const getSymbols = (filter) => ((dispatch) => {
  dispatch(symbolsLoading(true));
  let url = SYMBOLS_API
  if (filter && filter.name) {
    url += filter.name
    delete filter.name
  }
  return get(url, filter).then((e) => {
    dispatch(symbolsLoading(true));
    e.map((symbol) =>(symbol.ohlc)?symbol.ohlc = symbol.ohlc.map((tick) => {
      return {
      ...tick,
      time: new Date(tick.date*1000),
      close: parseFloat(tick.close)
    }}):symbol)
    return e;
  })
  .catch((e)=>{
    dispatch(danger(e+''))
  })
  .finally((e)=>dispatch(symbolsLoading(false)))
})
export const searchProvider = (name) => ((dispatch) => {
  dispatch(symbolsLoading(true));
  return get(SYMBOLS_API+'providers/'+name)

})
export const searchLogo = (name) => ((dispatch) => {
  dispatch(symbolsLoading(true));
  return get(SYMBOLS_LOGO_API+'search/'+name)
})

export const addSymbol = (form) => ((dispatch) => {
  dispatch(symbolsLoading(true));
  return post(SYMBOLS_API,form)
})

export const editSymbol = (id,form) => ((dispatch) => {
  return post(SYMBOLS_API+id,form)
})

export const symbolsLoading = (bool) =>({type: SYMBOLS_LOADING, payload: bool})
