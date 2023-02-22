// 클래스 이름 뒤에 제너릭을 사용해서 클래스내에서 사용하는 변수의 타입을 지정할 수 있다.
class Person<T,K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K){
    this._name = name
    this._age = age
  }
}

new Person('Mark',22)
new Person<string,number>('sfe',22)