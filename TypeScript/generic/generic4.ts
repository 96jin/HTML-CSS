// 타입 선언 후 사용
type HelloFunctionGeneric1 = <T>(message: T) => T

const helloFUnction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message
}

// 인터페이스 선언 후 사용
interface HelloFunctionGeneric2 {
  <T>(message: T): T
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message
}