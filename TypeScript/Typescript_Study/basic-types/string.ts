// js와 마찬가지로 '' or "" 을 사용

let myName: string = 'Mark';

myName = 'Anna';

let fullName: string = 'Mark Lee';
let age: number = 39;

let sentence: string = `이름은 ${fullName}, 나이는 ${age}입니다.

나는 2달뒤에 ${age+1}세가 됩니다.`
// 백틱 안의 개행도 같이 출력이 된다.
console.log(sentence)