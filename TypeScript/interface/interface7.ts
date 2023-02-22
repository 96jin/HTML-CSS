// 함수 interface

interface HelloPerson {
  (name: string, age?: number): void
}

const helloPerson: HelloPerson = function(name: string, age?: number){
  console.log(`안녕하세요 ${name} 입니다.`)
} 

// readonly interface
interface Person8{
  name: string;
  age?: number;
  readonly gender: string;
}

const p81:Person8 = {
  name: 'Mark',
  gender: 'male',
}

// p81.gender = "femail"  readonly는 값을 수정할 수 없다.