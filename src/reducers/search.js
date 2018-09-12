import {
  CRYPTO_PAIR_LOADING,
  CRYPTO_PAIR_ERROR,
  CRYPTO_PAIR_FETCH,
  CRYPTO_PAIR_FETCH_HISTORY,
} from 'constants/crypto'
export default function symbols(state = {
  sorting: {},
  filter: {},
  isFetching: false,
  list: {}
}, action) {
  switch (action.type) {
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
