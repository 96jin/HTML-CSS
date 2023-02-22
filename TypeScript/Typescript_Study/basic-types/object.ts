// object : 개체 , 객체
//  - 흔히 알려진 바로는 Primitimve type 과는 다르게 직접 값을 가지지 않고 값을 가진곳을 가리키는 정보를 담고있다고 알고있는데 , Ts에서는 다르다.

const person1 = {name:'Mark', age:39}
// person1 은 object 타입이 아니라 , {name:'Mark', age:19} 타입으로 나온다. -> object 리터럴 타입이라고 한다.
// primitive type이 아닌것을 나타내고 싶을 때 사용하는 타입

// create by Object.create
const person2 = Object.create({name:'Mark', age:39})  // 안에는 object | null 타입이 와야하므로 {} , [] , null 이 와야한다.