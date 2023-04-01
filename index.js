var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.setMake = function (make) {
        this.make = make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.setModel = function (model) {
        this.model = model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.setYear = function (year) {
        this.year = year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            console.log("Vehicle is already rented");
        }
        else {
            this.rented = true;
            console.log("Vehicle has been rented");
        }
    };
    Vehicle.prototype.returnVehicle = function () {
        if (this.rented) {
            this.rented = false;
            console.log("Vehicle has been returned");
        }
        else {
            console.log("Vehicle is not currently rented");
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, numDoors, transmission) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.numDoors = numDoors;
        _this.transmission = transmission;
        return _this;
    }
    Car.prototype.getDescription = function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model, ", ").concat(this.numDoors, " doors, ").concat(this.transmission, " transmission");
    };
    Car.prototype.rentalRate = function () {
        return 50;
    };
    Car.prototype.getNumDoors = function () {
        return this.numDoors;
    };
    Car.prototype.setNumDoors = function (numDoors) {
        this.numDoors = numDoors;
    };
    Car.prototype.getTransmission = function () {
        return this.transmission;
    };
    Car.prototype.setTransmission = function (transmission) {
        this.transmission = transmission;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, payloadCapacity, numAxles) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.payloadCapacity = payloadCapacity;
        _this.numAxles = numAxles;
        return _this;
    }
    Truck.prototype.getDescription = function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model, ", payload capacity: ").concat(this.payloadCapacity, " lbs, ").concat(this.numAxles, " axles");
    };
    Truck.prototype.rentalRate = function () {
        return 100;
    };
    Truck.prototype.getPayloadCapacity = function () {
        return this.payloadCapacity;
    };
    Truck.prototype.setPayloadCapacity = function (payloadCapacity) {
        this.payloadCapacity = payloadCapacity;
    };
    Truck.prototype.getNumAxles = function () {
        return this.numAxles;
    };
    Truck.prototype.setNumAxles = function (numAxles) {
        this.numAxles = numAxles;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, engineDisplacement, isSportBike) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.engineDisplacement = engineDisplacement;
        _this.isSportBike = isSportBike;
        return _this;
    }
    Motorcycle.prototype.getDescription = function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model, ", engine displacement: ").concat(this.engineDisplacement, "cc, ").concat(this.isSportBike ? 'sport bike' : 'standard bike');
    };
    Motorcycle.prototype.rentalRate = function () {
        return 30;
    };
    Motorcycle.prototype.getEngineDisplacement = function () {
        return this.engineDisplacement;
    };
    Motorcycle.prototype.setEngineDisplacement = function (engineDisplacement) {
        this.engineDisplacement = engineDisplacement;
    };
    Motorcycle.prototype.getIsSportBike = function () {
        return this.isSportBike;
    };
    Motorcycle.prototype.setIsSportBike = function (isSportBike) {
        this.isSportBike = isSportBike;
    };
    return Motorcycle;
}(Vehicle));
var car = new Car('Honda', 'Civic', 2022, false, 4, 'automatic');
var truck = new Truck('Ford', 'F-150', 2021, false, 1500, 2);
var motorcycle = new Motorcycle('Ducati', 'Monster', 2020, false, 821, true);
// Test rent() method
console.log(car.getDescription()); // "2022 Honda Civic, 4 doors, automatic transmission"
console.log(car.rent()); // "Vehicle rented"
console.log(car.rent()); // "Vehicle is already rented"
console.log(truck.getDescription()); // "2021 Ford F-150, payload capacity: 1500 lbs, 2 axles"
console.log(truck.rent()); // "Vehicle rented"
// Test return() method
console.log(car.returnVehicle()); // "Vehicle returnVehicle
console.log(car.returnVehicle()); // "Vehicle is not currently rented"
console.log(truck.returnVehicle()); // "Vehicle returned"
console.log(truck.returnVehicle()); // "Vehicle is not currently rented"
