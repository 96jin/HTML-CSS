interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
  // 어떤 이름의 프로퍼티가 와도 괜찮다.
  // [key: key의 타입] : value의 타입 형태이다. 이미 만들어 놓은 속성에도 적용된다. string형태의 key 값, any타입의 value 값
}

function hello3(person: Person3): void {
  console.log(`안녕하세요 ${person.name} 입니다.`)
}

const p31: Person3 = {
  name: 'Mark',
  age: 39,
}

const p32: Person3 = {
  name: 'Anna',
  systers: ['Sung', 'Chan']
}

const p33: Person3 = {
  name: 'Bokda',
  father: p31,
  mother: p32,
}

hello3(p31)
hello3(p32)
hello3(p33)