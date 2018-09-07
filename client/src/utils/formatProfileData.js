import {isEmpty} from './is-empty';
export const formatProfileData = profile => {
  let newProfile = {};
  for(let key in profile){
    if(key === 'social'){
      newProfile[key] = !isEmpty(profile[key]) ? profile[key] : {}
      for(let childKey in profile[key]){
        newProfile[key][childKey] = !isEmpty(profile[key][childKey]) ? profile[key][childKey] : ''
      }
    } else {
      newProfile[key] = !isEmpty(profile[key]) ? profile[key] : ''
    }
  }
  return newProfile
}