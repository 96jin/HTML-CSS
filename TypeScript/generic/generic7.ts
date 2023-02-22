interface IPerson{
  name: string
  age: number
}

type Keys = keyof IPerson;
// 어떤 객체에 keyof 를 붙이면 타입이 나온다.

const person:IPerson = {
  name: 'Mark',
  age: 23
}

// IPerson[keyof IPerson]
//  => IPerson['name' | 'age']
//  => IPerson['name'] | IPerson['age']
//  => string | number
function getProp<T, K extends keyof T>(obj: T, key: K ): T[K]{
  return obj[key];
}

getProp(person, 'age')

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K] ): void {
  obj[key] = value
}

setProp(person, 'name', 'Anna');