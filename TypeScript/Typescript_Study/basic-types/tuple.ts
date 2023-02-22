let x: [string, number];

x = ['hello', 39];
// 항상 순서와 타입, 길이가 일치해야한다.

const person: [string, number] = ['Mark', 39];

const [first, second] = person; // 디스트럭쳐링 , 구조분해할당 할때도 길이를 맞춰줘야한다.
