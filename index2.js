 function checkProp(str, object) {
    if (str in object) {
         return true;
    } else {
         return false;
     }
 }

 let person = {
     name: 'Ivan',
     surname: 'Ivanov',
     age: '120'
 }

 console.log(checkProp('name', person));
 console.log(checkProp('hair', person));