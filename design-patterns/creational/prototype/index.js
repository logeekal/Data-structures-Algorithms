/***
 * ===========================================================================================
 * 
 * Prototypal  Pattern
 * 
 * 
 * It is traditional pattern that javascript follows.
 * 
 * Whenever you create an object, the prototype of Object is assigned to that instance.
 * In below Example we will manually assign the custom protoype of the object we create;
 * 
 * ===========================================================================================
 */


 const owner =  {
    responsibility:   "ownership",
    job :   'owns',
    identify:   function(){
        console.log(`I own ${this.name}`)
    }
 }


 var newOwner = Object.create(owner, {
     name: {
         value: 'NewOwner',
         writable: false,
     },
     age: {
         value: 26,
         writable: true,
     }
 });

 console.log(newOwner.__proto__ === owner);  //true;
 console.log(newOwner.identify());// I own NewOwner
 console.log(newOwner); // {} Currently I am not sure why it is showing as blank; Need to check.
