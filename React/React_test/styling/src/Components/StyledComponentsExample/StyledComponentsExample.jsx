import React from 'react'
import styled from 'styled-components'

// styled-components는 style 이 들어가는 react 컴포넌트를 만들어준다. 
// 스타일드 컴포넌트를 만들어 줄 때에는 render method 바깥에다가 만들어주는것이 좋다.
// render method 안에다가 만들어주면 다른 요소들의 라이프사이클로 리렌더링이 될 때 이 스타일드 컴포넌트들도 모두 리렌더링된다.
// -> 렌더링의 속도가 느려질 수 있다.
// const Title = () => { return <div>Hello</div>} 원래는 이렇게해야한다.
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// style 의 상속도 가능하다. -> styled(컴포넌트 이름) 하면 상속 가능
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;
  // & 는 나 자신을 뜻함 ( <Thing>컴포넌트 )
  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & { // 첫번째 &를 뒤따르는 모든 & 요소
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & { // <thing>태그 바로 옆에 있는 <thing>태그
    background: lime; // <Thing> next to <Thing>
  }

  &.something { // something라는 클래스를 가지고있는 <thing>태그
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & { // something-else 클래스를 가지고있는 태그 아래의 <thing>태그
    border: 3px solid; // <Thing> inside another element labeled ".something-else"
  }
`


// props.children.split('').reverse() -> 반대로 뒤집는다.
const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

export default function StyledComponentsExample() {
  
  // Use Title and Wrapper like any other React component – except they're styled!
    return (
      <>
        <>
          <Thing>Hello world!</Thing>
          <Thing>How ya doing?</Thing>
          <Thing className="something">The sun is shining...</Thing>
          <div>Pretty nice day today.</div>
          <Thing>Don't you think?</Thing>
          <div className="something-else">
            <Thing>Splendid.</Thing>
          </div>
        </>
      {/* <Wrapper>
      <Title>
        Hello World!
      </Title>
      <Button onClick={()=>{alert('normal')}}>Normal</Button>
      <Button primary onClick={()=>{alert('primary')}}>Primary</Button>
      <TomatoButton>Tomato</TomatoButton>
    </Wrapper>
    <br/>
    <Button as="a" href="#">Link with Button styles</Button>
    <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
    <br />
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button> */}
    </>
    )
    // as 안에는 native tag뿐만 아니라 우리가 원하는 태그 모두 넣을 수 있다.
  }
