import { GithubProfile } from 'api/github';
import { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'reducers';
import { Dispatch } from 'redux';

type GithubAction =
  | ReturnType<typeof getUserProfile>
  | ReturnType<typeof getUserProfileSuccess>
  | ReturnType<typeof getUserProfileError>;
  
export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  }
};


const GET_USER_PROFILE = 'github/GET_USER_PROFILE' as const;
const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS' as const;
const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR' as const;

export const getUserProfile = (username:string) => ({
  type: GET_USER_PROFILE,
  username
});
export const getUserProfileSuccess = (userProfile: GithubProfile) => ({
  type: GET_USER_PROFILE_SUCCESS,
  userProfile
});
export const getUserProfileError = (error:Error) => ({
  type: GET_USER_PROFILE_ERROR,
  error
});



export const getUserProfileThunk = (username:string):ThunkAction<void, RootState, null, GithubAction> => async (dispatch:Dispatch) => {
  try {
    const userProfile = await getUserProfile(username);
    console.log(userProfile);
    //dispatch(getUserProfileSuccess(userProfile));
  } catch (error) {
    dispatch(getUserProfileError(error));
  }
};



const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null
  }
};


function githubController(
  state: GithubState = initialState,
  action: GithubAction
): GithubState {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          loading: true,
          error: null,
          data: null
        }
      }
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          loading: false,
          error: null,
          data: action.userProfile
        }
      }
    case GET_USER_PROFILE_ERROR:
      return {
        ...state,
        userProfile: {
          loading: false,
          error: action.error,
          data: null
        }
      }
    default:
      return state;
  }
}


export default githubController;