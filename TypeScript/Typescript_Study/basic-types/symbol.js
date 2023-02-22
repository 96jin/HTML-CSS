// symbol 은 new Symbol로 사용할 수 없다. 대신 Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다.
console.log(Symbol('foo') === Symbol('foo'));
