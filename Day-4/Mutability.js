// checking for string immutability
let myStr='Replacing a particular character';
myStr[2]='a';
let newstr=myStr.replace('i','v')
console.log(newstr)
console.log(myStr);


let myObj={name:'Octopus', type:'Stuffed toy'}
myObj.color='orange/yellow';
console.log(myObj);

let student1 = "Halina";
let student2 = student1;
student1 = "Brookes"
console.log(student1);
console.log(student2);
