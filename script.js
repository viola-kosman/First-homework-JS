// задача 1

const sayHello  = function(name){
    if (typeof name !== 'string') return;
    const favouriteFriend = 'mark';


    if (name.toLowerCase() === favouriteFriend) {
    return `Hi, ${name}`;
    }
    return `Hello, ${name}`;
    
};
console.log(sayHello('Mark'));
console.log(sayHello('Misha'));


const sayHello1 = (name) =>{
    if (typeof name !== 'string') return;
    const favouriteFriend = 'mark';


    if (name.toLowerCase() === favouriteFriend) {
    return `Hi, ${name}`;
    }
    return `Hello, ${name}`;
    
};
console.log(sayHello1('mark'));
console.log(sayHello1('Vika'));




// задача 2

const hypotenuse = function(n, m){
    if (typeof n !== "number" || typeof m !== "number") return;
    const result = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
    return result;
    
}
console.log(hypotenuse (3, 2) );



const hypotenuse1 = (n, m) =>{
    if (typeof n !== "number" || typeof m !== "number") return;
    const result = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
    return result;
}
console.log(hypotenuse1 (3, 2) );





// задача 3

const min = function(a, b){
    if (typeof a !== 'number' || typeof b !== 'number')
    return;

    return Math.min(a, b);
    
};
console.log(min (2, 5));
console.log(min (1, [1,2,3])) ;


const min1 = (a, b) =>{
    if (typeof a !== 'number' || typeof b !== 'number')
    return;

    return Math.min(a, b);
};
console.log(min1 (3, -1));
console.log(min (1, '55')) ;





// Задача 4

const isEven = function (value){
    if (typeof value !== "number") return;

    return value % 2 === 0;

}
console.log(isEven (33));


const isEven1 = (value) =>{
    if (typeof value !== "number") return;
    return value % 2 === 0

}
console.log(isEven (44));







// Задача 5

const deleteChars = function(str){
    if (typeof str === 'string'){
    return str.slice (1, -1);
    }
    return 'Error';
}
console.log(deleteChars('Hello'));
console.log(deleteChars(5));


const deleteChars1 = (str) =>{
    if (typeof str === 'string'){
        return str.slice (1, -1);
        }
        return 'Error';
    }
    console.log(deleteChars('A'));
    console.log(deleteChars([5]));







// Задача 6

const fn6 = function(str){
    if (typeof str === 'string'){
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
    }
    return 'this is not a string'
}
console.log(fn6 ('пиТеР') );
console.log(fn6 (444) );



const fn61 = (str) =>{
    if (typeof str === 'string'){
        return str[0].toUpperCase() + str.toLowerCase().slice(1);
        }
        return 'this is not a string'
    }
console.log(fn61 ('javaScript') );
console.log(fn6 ([1, 2, 3]) );







// Задача 7

const array1 = [1, 2, 3, '4', '5', 6];

const mixArray = function(newArray) {
    if (!Array.isArray(newArray)) return;
    const result = [];
    for (let i = 0; i < newArray.length; i++) {
        if (typeof newArray[i] === 'number'){
            result.push(newArray[i].toString())
        } else {
            result.push(+newArray[i])
        }
    }
    return result;
};
    console.log(mixArray(array1));
    console.log(mixArray(5));





const mixArray1 = (array11) =>{
    if (!Array.isArray(array11)) return;
    const result = [];
    for (let i = 0; i < array11.length; i++) {
        if (typeof array11[i] === 'number'){
            result.push(array11[i].toString())
        } else {
            result.push(+array11[i])
        }
    }
    return result;
}
console.log(mixArray1(array1));



// Задача 8


const newArray = function(ar1, ar2){
    const result = ar1.concat(ar2);
    return result;
}
console.log(newArray ([1,2,3], [4,5,6]) );

const newArray1 = (ar1, ar2) =>{
    const result = ar1.concat(ar2);
    return result;
}
console.log(newArray ([4, 5, 6], [7, 8, 9]) );






// Задача 9



const stringCutter1 = (str, num) =>{
    if (str.length <= num && typeof str === 'string' && typeof num === 'number'){
        return str;
    } else if (str.length > num && typeof str === 'string' && typeof num === 'number') {
        return str.slice(0, num) + '...';
    } else {
        return 'Error';
    
    }
}
console.log(stringCutter1('Hello world', 5));
console.log(stringCutter1('Привет мир', 6));





const stringCutter = function (str, num){
    if (str.length <= num && typeof str === 'string' && typeof num === 'number'){
        return str;
    } else if (str.length > num && typeof str === 'string' && typeof num === 'number') {
        return str.slice(0, num) + '...';
    } else {
        return 'Error';
    
    }
}
    console.log(stringCutter('Hello world', '5'));

