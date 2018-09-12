import {ADD_POST, GET_POSTS, GET_POST, POST_LOADING, DELETE_POST} from '../actions/types';

const initState = {
  posts: [],
  post:{},
  loadgin:false
}

export default function(state = initState, action){
  switch(action.type){
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
      case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
      case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      }
      case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
        loading: false
      }
      case POST_LOADING:
        return {
          ...state,
          loading: true
        }
    default:
      return state;
  }
}