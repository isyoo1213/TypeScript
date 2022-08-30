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


