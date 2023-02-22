// class => object를 만들어내는 역할
// object가 {mark: 'male', jade: 'male;}
// {chole: 'female', alex: 'male', anna: 'female'}
// class Students{
//   [index: string]: 'male' | 'female'
//   mark: "male" = 'male'
// }
// const a = new Students()
// a.mark = 'male'
// a.jade = 'male' 
// console.log(a)
// const b = new Students()
// b.chole = 'female'
// b.ales = 'male'
// b.anna = 'female'
// console.log(b)
// class Person{
//   private static CITY = 'Seoul'
//   public hello(){
//     console.log(`안녕하세요 ${Person.CITY}`)
//   }
//   public change(){
//     Person.CITY = "LA"
//   }
// }
// const p1 = new Person() 
// p1.hello()
// const p2 = new Person()
// p2.hello()
// p1.change()
// p2.hello()
// 접근제어자
// public : 외부에서 접근 가능 (Default)
// private : 외부에서 접근 불가능, 생성자에 사용하면 제일 처음 선언할때만 값을 저장할 수 있고, 외부에서 불러오는건 불가능하다.
// protected : 외부에서 접근 불가능, 상속관계에 있으면 접근 가능
// 클래스에서 ! 는 값을 클래스 내부에서 할당하지 않고, 나중에 할당해주겠다.는 의미로 오류가 발생하지않는다. ex) age!: number
// class Person {
//   public readonly name: string = "Mark"
//   private readonly country: string
//   constructor(public _name: string, public age: number) {  // 생성자 매개변수에 public 을 붙여주면 굳이 this.name = name 같은걸 할 필요가 없이 자동으로 들어간다.
//     this.country = "Korea"
//   }
// }
// const p1: Person = new Person("Mark", 22);
// console.log(p1.name);
// p1.name = "Woongjin"
// console.log(p1.name)
// 싱글톤 패턴
// 생성자를 private로 하면 생성이 제한됨
// class ClassName{
//   private static instance: ClassName | null = null
//   public static getInstance(): ClassName {
//     // ClassName 으로부터 만든 object가 있으면, 그걸 return 한다. 없으면 생성한 다음 return
//     if(ClassName.instance === null){
//       ClassName.instance = new ClassName();
//     }
//     return ClassName.instance
//   }
//   private constructor(){
//   }
// }
// const a = ClassName.getInstance()
// const b = ClassName.getInstance()
// console.log(a === b)
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
// const p = new Parent('Mark', 38)
// p.print()
// 상속
class Child extends Parent {
    constructor(age) {
        super('Mark Jr.', age);
        this.gender = 'male';
        this.printName();
    }
}
const c = new Child(2);
c.print();
