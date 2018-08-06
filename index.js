// create driver class
// add a name to the constructor
// create the store object to push driver into
// add driverId to the class - don't forget to declare driverId outside of the class
let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips() {
    // return all trips the driver has taken
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    })
    // return this.trips()
    // })
  }
}

// Create passnger class
// add name argument to constructor
// add the passenger to the store
// adds a numerical id to each passenger
let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips() {
    // Returns all trips that the passenger took
    return store.trips.find(trip => {
      return trip.passengerId === this.id;
    })
  }
  drivers() {
    // returns all the drivers that has taken a passenger on a trip
    return store.trips.map(trip => {
      return trip.driver();
    })
  }
}

// creates a new trip class
// push new trip into the store object
// add a unique id to each trip - make a tripId variable to store the next tripId
// Anytime you create a new trip the id goes up 1
// How do I use the passengerId to find the passenger? - I'll try to find method
// Why won't passenger let me grab this.passengerId
// What's the setUser method for in the object Relations Methods reading?
let tripId = 0;

class Trip {
  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    store.trips.push(this);
  }
  passenger() {
    // I need to use arrow function attached to the .find, etc, methods to keep this to the current variable
    // Or it'll make new one.
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }
  driver() {
    // returns all drivers associated with a trip
    // debugger;
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }
}
