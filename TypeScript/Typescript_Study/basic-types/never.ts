// 일반적으로 return 에 사용된다.
function error(message: string): never{
  throw new Error(message); // 함수는 return 되어야 끝이나는데 에러를 throw 하는 경우 거기서 밑으로 내려오지 않고 그대로 끝난다.

}

function fail(){
  return error('failed');
}

function infiniteLoop(): never{
  while(true){
    // 무한 루프, 이 밑으로 내려가지 않음
  }
}

// never 타입은 모든 타입에 할당할 수 있다.
// never 에는 그 어떤것도 할당할 수 없다.

let a1: string = 'hello'
if(typeof a !== 'string'){
  a; // a는 이미 string으로 선언되었는데 a가 string가 아니면 이라는 조건이라 a는 never 타입이 된다.
     // 잘못된 값을 넣지않기위해 never 사용 혹은 특정 타입이 되도록 사용  
}

type Indexable<T> = T extends string ? T & {[index : string]: any} : never
// 조건부 타입이라고 하는것이다. 타입을 마치 변수처럼 쓰는 제너릭이다. T가 string타입이면~ 첫번째 타입, 아니면 never타입
type ObjectIndexable = Indexable<{}>

const b1: Indexable<'ss'> = d