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

/*
const myClass = {
    myPc:'pc1',
    model:'thinkpad',
    ram:'8gb',
    rom:256,
    // fullN:function(){
    //     return this.model+ " : " + this.ram
    // }
    mobile:{
        name:'galaxy',
        type:'android',
        rom:128,
        color:'black'
    }
};
for (let key in myClass.mobile){
    document.write(key +": " +  myClass.mobile[key]+ "</br>")
}
// document.write(myClass.mobile.name);
myClass.job='casher';
// console.log(myClass.myPc);
// console.log(myClass.model);
// console.log(myClass['rom']);
// console.log(myClass.job);
// delete myClass.rom;
myClass.fan='spex';
myClass.OS='10';
myClass.board='intel'; 
for (let key in myClass){
    document.write("<h1> " + key + ": " + myClass[key] + "</h1>");
}
document.write(myClass.fullN())
const MyClass=new object();

MyClass.myPc='dell';
MyClass.model='pc3';
MyClass.ram='4gb';
MyClass.rom=500;

function click1(){
    document.getElementById('btn1').style.color="white";
}

*/

/*
// uset input
function searckkey(){
    var ia = document.querySelector('#a').value;
    var ib = document.getElementById('b').value;
    // var input = prompt ('enter the key name');
    // let a1 =  document.getElementById('a');
    // let a2 =  document.getElementById('b');
  let z=parseInt(ia) +parseInt(ib);
    window.alert(z);
 
}
*/
/*
const MyO={
    name:'hamza',
    age:23,
    job:'doctor',
    cars:{
        car1:'ford',
        car2:'toyota',
        car3:'bmw'
    }
}
document.write('</br>')
for( let key in MyO){
    document.write(key +":"+MyO[key]+"</br>")
}
for( let key in MyO.cars){
    document.write(key +":"+MyO.cars[key]+"</br>")
}
document.write('</br>')


*/
// use arry in object
const person= {
    name:'ahmad',
    fn:'noor',
    age:43,
    cars:[
        {name:'toyota',model:[2000,10000,2222]},
        {name:'shurlet',model:["new" , "old", "future"]},
        {name:'crola' , model:['1990', '2014','2001','2019']}
    ]
}
document.write("</br>")
for (let key in person.cars){
    document.write('<h1>'+person.cars[key].name+ "</h1></br>");
    for(let key2 in person.cars[key].model){
        document.write(person.cars[key].model[key]+ "</br>")
    }
}
            
