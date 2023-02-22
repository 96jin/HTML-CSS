// 같은 타입의 자료형을 모아놓은 것.
// 자바스크립트에서 array 는 객체이다. 
// 타입스크립트에서의 사용법 : Array<타입> 혹은 타입[]
let list1: (number|string)[] = [1, 2, 3, "4"] // 이렇게 하면 number 와 string의 배열
// let list2: Array<number> = [1, 2, 3] 위에방식을 더 많이 사용.
