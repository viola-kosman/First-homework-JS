// задача 1

const sayHello  = function(name){
    if (name == 'Mark'){
    console.log('Hi,', 'Mark');
    }
    else {
        console.log('Hello,' + name);
    }
}
sayHello('Olga');
sayHello('Mark');


const sayHello1 = (name1) =>{
    if (name1 == 'Mark'){
        console.log('Hi,', 'Mark');
        }
    else {
            console.log('Hello,' + name1);
    } 
}
sayHello1('Viola');
sayHello1('Mark');




// задача 2

const hypotenuse = function(n, m){
    const result = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
    return result;
}
console.log(hypotenuse (3, 2) );



const hypotenuse1 = (nn, mm) =>{
    const result = Math.sqrt(Math.pow(nn, 2) + Math.pow(mm, 2));
    return result;
}
console.log(hypotenuse1 (3, 2) );





// задача 3

const min = function(a, b){
    const result = Math.min(a, b);
    return result;
}
console.log(min (2, 5));
console.log(min (1, 1));


const min1 = (aa, bb) =>{
    const result = Math.min(aa, bb);
    return result;
}
console.log(min1 (3, -1));






// Задача 4

const isEven = function (value1){
    if (value1 % 2 == 0)
       return true;
    else 
       return false;

}
console.log(isEven (33));


const isEven1 = (value2) =>{
    if (value2 % 2 == 0)
       return true;
    else 
       return false;

}
console.log(isEven (44));







// Задача 5

const deleteChars = function(strr){
    const result = strr.slice (1, -1);
    return result;
}
console.log(deleteChars('Hello'));



const deleteChars1 = (strrr) =>{
    const result = strrr.slice (1, -1);
    return result;
}
console.log(deleteChars('A'));







// Задача 6

const fn6 = function(str){
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}
console.log(fn6 ('пиТеР') )



const fn61 = (str) =>{
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}
console.log(fn61 ('javaScript') )







// Задача 7

const array1 = [1, 2, 3, '4', '5', 6];



const mixArray = function(newArray) {
    const result = [];

    for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] ==='number'){
       result.push(newArray[i].toString())
    }
    else {
        result.push(+newArray[i]);
    }
}
return result;
}
console.log(mixArray(array1));



const mixArray1 = (array11) =>{
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

const newArray1 = (ar11, ar22) =>{
    const result = ar1.concat(ar2);
    return result;
}
console.log(newArray ([4, 5, 6], [7, 8, 9]) );






// Задача 9

const stringCutter = function (str, num){
    if (str.length <= num) {
        return str;
        } 
    else {
        return str.slice(0, num) + '...';
        }
}
console.log(stringCutter('Привет мир!', 6));
stringCutter('Привет мир!', 6);


const stringCutter1 = (str, num) =>{
    if (str.length <= num) {
        return str;
        } 
    else {
        return str.slice(0, num) + '...';
        }
}
console.log(stringCutter1('Hello world', 5));
