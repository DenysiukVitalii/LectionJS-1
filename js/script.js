/*function leftPad(str, number) {
  if (str.length < number) {
    var raz = number - str.length;
    var mystr = "";
    for (var i = 0; i < raz; i++) {
        mystr[i] = '0';
    }
    var newStr = mystr + str;
}
return newStr;  
}

*/

function leftPad(str, len, sym) {
    if (str.length >= len) {
        return str;
    }
    let arr= [];
    for (let i = 0; i < len - str.length; i++) {
        arr.push(sym);
    }
    arr.push(str);
    return arr.join("");
}

//console.log(leftPad('foo', 3, "$"));

class Person {
    constructor (name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}

Person.prototype.add2 = () => a + b;



console.dir(man);