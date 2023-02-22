// undefined 와 null 은 타입도 소문자, 값도 소문자로 사용한다.
let u: undefined = undefined;
let n: null = null;

// null 과 undefined는 다른 타입에도 할당 할 수 있다. 이렇게하면 문제가 생길 수 있기 때문에
// 컴파일 옵션(tsconfig)에서 --strictNullChecks 를 사용하면, null,undefined는 void 혹은 자기 자신들에게만 할당할 수 있다.
// - 이 경우 , null 과 undefined 를 할당할 수 있게 하려면 union type을 이용해야한다.

// let Name: string = null; 할당 불가
let union: string | null = null ; // string 와 null 타입을 가질 수 있다는 표현이므로 null 도 할당 가능하다.(타입 가드)

// null 이라는 값으로 할당된 것을 null이라고 한다. 무언가가 있는데, 사용할 준비가 덜 된 상태.
// null 이라는 타입은 null 이라는 값만 가질 수 있다. typeof 를 쓰면 object 타입으로 나온다.

// undefined 는 값을 할당하지 않은 변수를 의미한다. 선언만 하고 값을 할당하지 않은 상태, 무언가가 아예 준비가 안된 상태
// object의 property가 없을때에도 undenfined 이다. typeof 를 쓰면 undenfined 타입이다.