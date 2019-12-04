/**
 * ===========================================================================================
 * 
 * Factory Pattern
 * 
 * The Factory pattern is another creational pattern concerned with the notion of creating objects. 
 * 
 * Where it differs from the other patterns in its category is that it doesn't explicitly require us to use a constructor. 
 * Instead, a Factory can provide a generic interface for creating objects, where we can specify the type 
 * of factory object we wish to be created.
 * 
 * ===========================================================================================
 */


/**
 * @typedef {object} Options options to be provided when creating a vehicle;
 * @property {string} name Name of the vehicle
 * @property {string} noOfDoors Number of doors in the vehicle
 * @property {string} color Color of the vehicle
 * @property {string} wheelbase Wheelbase  of the vehicle. Applicable from truck only.
 * @property {string} power Power of vehicle. for trucks only.
 * 
 */


/**
 * @param {Options} options options to be provided when creating a car 
 */
function Car(options){
    this.name = options.name || 'Truck';
    this.color = options.color || 'blue';
    this.noOfDoors = options.noOfDoors || '4';
}


/**
 * @param {Options} options options to be provided when creating a truck 
*/
function Truck(options){
    this.name = options.name || 'Truck';
    this.wheelbase = options.wheelbase || 'broad';
    this.power = options.power || '200';
}

/**
 * Main VehicleFactory which will create facory on the basis of type provided
 * @param {('car' | 'truck')} type Type of the vehicle that needs to be created
 * @param {Options} options 
 */
function VehicleFactory(type, options){
    if(type === 'car'){
        return new Car(options)
    }else if (type === 'truck'){
        return new Truck(options)
    }else{
        throw new Error('currently we produce only Car and Truck');
    }
}


const identify = function(){
    console.log(`I am ${this.name}`)
}



let car = new VehicleFactory('car',{
    name: "MyCar",
    color: "Silver"
});


let truck =  new VehicleFactory('truck',{});

identify.call(car);
identify.call(truck);