// 모르는 변수의 타입을 묘사해야 할 때 (API로 부터의 동적 컨텐츠)
// 이 경우, 이 변수 가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공한다.
// 원래는 any를 썼었는데, 문제가 생기므로 unknown 타입을 사용한다.
// 타입을 확정해주지 않으면 다른곳에 할당할 수 없고, 사용할 수 없다.

declare const maybe: unknown;


// const aNumber: number = maybe;

if(maybe === true){
  // 런타임과정에서 maybe는 boolean 값인 true로 바껴서 boolean타입 변수에 할당 가능하다. 이를 타입가드라고 한다.
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
}

// 런타임에 어떤 특정한 변수나 객체에 typeof를 붙이면 그 타입이 문자열로 튀어나온다.
if(typeof maybe === 'string'){
  const aString: string =  maybe;

  // const aBoolean: boolean = maybe;
}
