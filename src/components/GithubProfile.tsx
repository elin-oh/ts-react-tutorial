import React, {useState, FormEvent, ChangeEvent} from 'react';
import { RootState } from 'reducers';
import {useSelector, useDispatch} from 'react-redux'
import { getUserProfileThunk } from 'reducers/github';
import GithubProfileInfo from 'components/GithubProfileInfo'

const GithubProfile = () => {

  const { data, loading, error } = useSelector((state: RootState) => state.githubReducer.userProfile);

  const dispatch = useDispatch();
  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileThunk(username));
  };
  
  const [input, setInput] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    onSubmitUsername(input);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form className="GithubUsernameForm" onSubmit={onSubmit}>
        <input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요." />
        <button type="submit">조회</button>
      </form>
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && <GithubProfileInfo bio={data.bio} blog={data.blog} name={data.name} thumbnail={data.avatar_url} />}
    </div>
  );
}

export default GithubProfile;
