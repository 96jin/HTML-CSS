// 제너릭에서 extends 는 상속의 개념보다는 다른 의미로  사용된다.
// T는 string 이나 number 만 가능하다. extends 로 타입 제한 가능
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T){
    this._name = name
  }
}

new PersonExtends('Mark')
new PersonExtends(343)
// new PersonExtends(true) // 에러발생