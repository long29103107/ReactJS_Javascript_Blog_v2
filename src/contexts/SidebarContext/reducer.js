import { SHOW_SIDEBAR } from './contants';


export const initialState = {
  isShow: window.innerWidth >= 1200
}

export const reducer = (state, action) => {
  
  switch (action.type) {
    case SHOW_SIDEBAR:
      console.log(action.isShow);
      return {
        ...state,
        isShow: action.isShow
      }

    default:
      return state
  }
}