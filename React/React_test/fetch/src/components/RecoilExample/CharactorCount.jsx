import React from 'react'
import { useRecoilState } from 'recoil';
import { charCountState, textState } from './CounterStors';
import { fontSizeState } from './store';
import { useRecoilValue } from 'recoil';

export default function CharactorCount() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const [fontSize] = useRecoilState(fontSizeState)

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input style={{fontSize}} type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}