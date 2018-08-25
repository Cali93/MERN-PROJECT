import { SET_CURRENT_USER } from '../actions/types';
import { isEmpty } from '../utils/is-empty';
const initialState = {
  isAuthenticated: false,
  userLevel:'not authenticated',
  user: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case SET_CURRENT_USER:
      return {
        ...state,
        userLevel: action.payload.memberType,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}