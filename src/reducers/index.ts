import { combineReducers } from 'redux';
import counterReducer from './counter';
import githubReducer from './github';

const rootReducer = combineReducers({
  counterReducer,
  githubReducer
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;