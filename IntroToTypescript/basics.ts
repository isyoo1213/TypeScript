// Primitives : number, String, boolean + null, undefined
// More comples types : arrays, objects
// Function type, parameters

// Primitives

let age: number; //대문자 사용 시 JS의 Number객체를 가리킴

age = 12.1; //float형도 가능

let userName : string; //문자형 또한 소문자로 시작

userName = 'insung';

let isInstructor : boolean;
isInstructor = false;

let hobby: null;
// hobby = 'game';

// More complex types

let hobbies : string[];

hobbies = ['Sports', 'Game'];

let person: {
  name: string;
  age: number;

}; 
//any 타입은 예비적으로 사용되는 타입으로 사용하지 않는 것이 타입스크립트의 취지에 맞음

person = {
  name: 'insung',
  age: 32,
  // isEmployee: true
}

let people: {
  name: string;
  age: number;

}[]; // 객체 배열 


// Type inference

let course = 'React';

// course = 1234;

// Union Type
let names: string | string[];

names = 'insung';
names = ['insung', 'koala'];


// TypeAlliases

type Person = {
  name: string;
  age : number;
}

let insung: Person;

insung = {
  name: 'insung',
  age : 32
}

let insungs: Person[];

insungs = [{
  name: 'insung1',
  age: 32
}, {
  name: 'insung2',
  age: 33
}]


// Functions & types

function add(a: number, b: number): number|string {
  return a+b;
}

function printValue(value: any): void{
  console.log(value);
}
//void는 undefined와 비슷하지만 함수의 반환타입에 결합해 사용하는 특수한 타입
//반환값이 없을 때 반환자체를 사용하기 위해서는 undefined 사용


// Generics

function insertAtBeginning(array: any[], value: any){
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

let updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray에 마우스를 올려보면 any[] 타입 >> any[]선언으로 숫자만 들어있는 것을 인식하지 않음

updatedArray[0].split(''); // ide에서 오류를 발견하지 못하나, 런타임 에러 발생


function insertAtBeginningWithGeneric<T>(array: T[], value: T){
  const newArray = [value, ...array];
  return newArray;
}

const updatedArrayByGeneric = insertAtBeginningWithGeneric(demoArray, -1);

// updatedArrayByGeneric[0].split(''); //오류 발생

updatedArray = insertAtBeginningWithGeneric(updatedArray, -2);
updatedArray[0].split(''); // 기존의 함수를 통해 any[]타입이 결정된 updatedArray는 generic처리를 하는 함수를 거치더라도 any[]타입으로 들어감

