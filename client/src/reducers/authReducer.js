const initialState = {
  isAuthenticated: false,
  userLevel:'not authenticated',
  user: {}
}

export default function(state =  initialState, action){
  switch(action.type){
    default:
      return state;
  }
}