interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}
// implements 는 상속받을 interface 에서 선언만 해두고 undefined 상태인 요소들을 override 해서 쓰는것
class Person implements IPerson1 {
  name: string;
  age: number | undefined;

  constructor(name:string){
    this.name = name
  }

  hello(): void {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }
}

const person:IPerson1 = new Person('Mark')
person.hello()