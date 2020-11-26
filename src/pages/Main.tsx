import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import  { RootState }  from 'reducers';
import Counter from 'components/Counter';


export default function Main() {
  
  // const [count, dispatch] = useReducer(rootReducer, 0);
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch({ type: 'counter/INCREASE' });
  const onDecrease = () => dispatch({ type: 'counter/DECREASE' });
  return (
    <div id="wrap">
      <div className="mb-view">
        <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
      </div>
    </div>
  )
}
