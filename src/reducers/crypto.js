import {
  CRYPTO_PAIR_LOADING,
  CRYPTO_PAIR_ERROR,
  CRYPTO_PAIR_FETCH,
  CRYPTO_PAIRS_FETCH,
  CRYPTO_LOADING,
  CRYPTO_PAIR_FETCH_HISTORY
} from 'constants/crypto'
export default function symbols(state = {
  sorting: {},
  filter: {},
  isFetching: false,
  list: {}
}, action) {
  switch (action.type) {

    case CRYPTO_PAIRS_FETCH:
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload.data
        }
      }

    case CRYPTO_LOADING:
      return {
        ...state,
        isFetching:action.payload,
      }
    case CRYPTO_PAIR_FETCH:
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
    case CRYPTO_PAIR_FETCH_HISTORY:
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
    case CRYPTO_PAIR_ERROR:
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
    case CRYPTO_PAIR_LOADING:
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
