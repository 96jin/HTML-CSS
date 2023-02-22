// 함수표현 & Array 표현
// type alias
type EatType = (food: string) => void;
type PersonList = string[]

// interface
interface IEat {
  (food: string): void;
}
interface IPersonList {
  [index: number | string]: string
}
let a:IPersonList = {
  [1]:'Mark',
  [2]:'Anna',
  age: '35'
}
console.log(a[1],a[2],a.age)

// intersection type
interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}
interface ArtistsData {
  artists: {name: string}[]
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling

// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType
let iar: IArtistsResponse

// union types
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish  // union은 type alias로 표현한다.

// interface IPet extends PetType {} 오류 발생

// Merging
interface MergingInteface{
  a: string;
}
interface MergingInteface{
  b: string;
}

let mi: MergingInteface;
// 사용할때는 둘이 합쳐져서 나온다. type alias로 표현 불가능

// console.log(mi.) -> 선택지가 2개