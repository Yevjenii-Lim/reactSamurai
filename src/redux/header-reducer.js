import { getAuthApi, getProfileApi} from "./api/api"
import { setAuthUserData } from "./auth-reducer"
import { setUserProfile } from "./profile-reduce"

let initialState = {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Img_logo_blue.jpg'
}

const header = (state = initialState, action) => {

    return state 
}


export const setHeaderThunkCreator = () => {
    return (dispatch) => {
      return  getAuthApi().then((data) => {
            
            if (data.resultCode === 0) {
              let { id, email, login } = data.data;
              dispatch(setAuthUserData(id, email, login, true));
              getProfileApi(data.data.id).then((data) =>
              dispatch(setUserProfile(data))
              );
            }
          });
        
    }
}

export default header
