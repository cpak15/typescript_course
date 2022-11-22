//const person: { 
  //  name: string;
  //  age: number;
//} = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2; 

enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR}; // YOU CAN USE ANY NUMBER AS AN IDENTIFIER 


const person = {
    name: "Curtis",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

//person.role.push('admin');
//person.role[1] = 10;

let favoriteActivities: string[];
// let favoriteActivities: any[]; this lets you use any types in the array, at the cost of the benefits of typescript

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!! 
}

if (person.role === Role.AUTHOR){
    console.log('is admin');
};