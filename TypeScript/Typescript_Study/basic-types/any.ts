function returnAny(message: any): any {
  console.log(message)
}

const any1 = returnAny('리턴은 아무거나')

any1.toString();

// any : 어떤 타입이어도 상관없는 타입이다. 최대한 쓰지 않는게 핵심. 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
// 타입 안정성은 TypeScript의 주요 동기 중 하나이며, 필요하지 않은 경우에는 any를 사용하지 않도록 해야한다.

// any 는 개체를 통해 전파되기때문에 이런것도 가능해질 수 있다.
let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj : any){
  const a = obj.num;  // any의 프로퍼티이기때문에 a도 any 타입이다. 하지만 여기에서 타입을 선언해주면 전파가 막히고, 이 아래로 모두 해당 타입으로 바뀐다.
  const b = a + 1;    // 마찬가지로 b도 any 타입
  return b
}

const c = leakingAny({num:0})
const e: string = c.indexOf('0')