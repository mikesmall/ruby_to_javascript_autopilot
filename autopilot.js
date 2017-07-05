function getNewCar(car) {
  city: 'Toronto',
  passengers = 0,
  gas = 100
}

function addCar(newCar,getNewCar) {
  cars.push(newCar);
  console.log('Adding new car to fleet. Fleet size is now ' + cars.length + ' cars.')
}

function pickUpPassenger(car) {
  (car.passengers += 1);
  (car.gas -= 10);
  console.log('Picked up passenger. Car now has ' + car.passengers + ' passengers.')
}

function getDestination(car) {
  if (car.city == 'Toronto') {
    return 'Mississauga';
  }
  else if (car.city == 'Mississauga') {
    return 'London';
  }
  else if (car.city == 'London') {
    return 'Toronto';
  }
}

function fillUpGas(car) {
  oldGas == car.gas;
  car.gas == 100;
  console.log('Filled up to ' + getGasDisplay(car.gas) + ' on gas from ' + getGasDisplay(oldGas) + '.');
}

function getGasDisplay(gasAmount) {
  console.log(gasAmount);
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    fillUpGas(car);
  }
  car.city = getDestination(car);
  car.gas -= cityDistance;
  console.log('Drove to ' + car.city + '. Remaining gas: ' + getGasDisplay(car.gas) + '.')
}

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers == 0;
  console.log('Dropped off ' + previousPassengers + ' passengers.');
}

function act(car) {
  var distanceBetweenCities = 50

  if (car.gas < 20) {
    fillUpGas(car);
  }
  else if (car.passengers < 3) {
    pickUpPassenger(car);
  }
  else if (car.gas < distanceBetweenCities) {
    fillUpGas(car);
  }

  droveTo = drive(car, distanceBetweenCities);
  passengersDropped = dropOffPassengers(car);
  console.log(droveTo + passengersDropped);
}

function commandFleet(cars) {
  for (i=0; i < cars.length; i++) {
    var action = act(cars);
    console.log('Car ' + (i + 1) + ': ' + action);
  }
  console.log('---')
}

function addOneCarPerDay(cars, numDays) {
  for (i=0; i < numDays; i++) {
    newCar = getNewCar;
    console.log(addCar);
    console.log(cars);
    console.log(newCar);
    commandFleet(cars);
  }
}

var cars = []
addOneCarPerDay(cars, 10)
