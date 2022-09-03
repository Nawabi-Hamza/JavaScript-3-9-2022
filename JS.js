/*
var x={
    name:"hamza",
    fn:"farhad",
    number:0777777777
};
for (let key in x){
document.write(key + x[key]);
}

document.write()

const car={};
const person =new person */

// add object litral 


/*
const car ={
    name:'toyota',
    color:'red',
    model:2000,
    pn:-3

};
const person={
    name :'ali',
    ln:'noori',
    age:23
};


// add object new keyword
const person1 =new object();
person1.name="nabi";
person1.ln='ahmadi';
person.age=23;
*/


const myClass = {
    myPc:'pc1',
    model:'thinkpad',
    ram:'8gb',
    rom:256
    
};
myClass.job='casher';
// console.log(myClass.myPc);
// console.log(myClass.model);
// console.log(myClass['rom']);
// console.log(myClass.job);
// delete myClass.rom;
myClass.fan='spex';
for (let key in myClass){
    document.write("<h1> " + key + ": " + myClass[key] + "</h1>");
}


const MyClass=new object();

MyClass.myPc='dell';
MyClass.model='pc3';
MyClass.ram='4gb';
MyClass.rom=500;
