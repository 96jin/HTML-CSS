function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message
}

// 같은 역할을 하지만 타입만 다른 반복된 함수들이 생김

function hello(message: any): any {
  return message
}

console.log(hello('Mark'))
console.log(hello(22))

// any에 들어가는 타입을 변수같이 활용해서 return 되는 타입에 연관되게 해준다. -> 제너릭

// T 라고하는 타입을 의미하는 변수를 지정
function helloGeneric<T>(message: T): T {
  return message
}
// 타입을 따로 지정해주지 않으면 해당 리터럴 타입으로 적용된다.
console.log(helloGeneric('Mark').length)
console.log(helloGeneric(39))
console.log(helloGeneric(true))