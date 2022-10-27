import { useRecoilState, useRecoilValue } from "recoil";
import { React } from 'react';
import { fontSizeLabelState, fontSizeState } from './store';
import { textState } from './CounterStors';

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  const [text, setText] = useRecoilState(textState);


  return (
    <>
      <div>Current fort Size : {fontSizeLabel}</div>
      <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
        Click to Enlarge {text}
      </button>
    </>
  );
}