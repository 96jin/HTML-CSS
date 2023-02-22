// First.  Type Annoation
// Type Annoation 이란 변수에는 이러한 타입만 들어올 수 있다고 선언하는것.

// 그냥 선언하게 되면 a에는 any라는 (아무타입) 타입이 들어갈 수 있다.
let a: string  // 그래서 콜론뒤에 string이라고 하면 변수 a에 들어갈 타입을 string로 설정해주는것이다.
a = 'Mark'

// a = 'Mark';
// a = 39;
// a에는 이미 string이 할당되어있어서 a에는 같은 타입의 string이 들어가야한다.

let ab: number
ab=3

function hello(b: number){}
// hello('dd') 받아들이는 인자의 타입도 맞춰줘야한다.