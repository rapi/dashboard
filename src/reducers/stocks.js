import {
  STOCKS_PAIR_LOADING,
  STOCKS_PAIR_ERROR,
  STOCKS_PAIR_FETCH,
  STOCKS_PAIRS_FETCH,
  STOCKS_LOADING,
  STOCKS_PAIR_FETCH_HISTORY
} from 'constants/stocks'
export default function symbols(state = {
  sorting: {},
  filter: {},
  isFetching: false,
  list: {}
}, action) {
  switch (action.type) {

    case STOCKS_PAIRS_FETCH:
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload.data
        }
      }

    case STOCKS_LOADING:
      return {
        ...state,
        isFetching:action.payload,
      }
    case STOCKS_PAIR_FETCH:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.pair]: {
            ...state.list[action.payload.pair],
            ...action.payload.data
          }
        }
      }
    case STOCKS_PAIR_FETCH_HISTORY:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.pair]: {
            ...state.list[action.payload.pair],
            history: action.payload.history
          }
        }
      }
    case STOCKS_PAIR_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.pair]: {
            ...state.list[action.payload.pair],
            error: action.payload.error
          }
        }
      }
    case STOCKS_PAIR_LOADING:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.pair]: {
            ...state.list[action.payload.pair],
            isFetching: action.payload.bool
          }
        }
      }
    default:
      return state
  }
}
