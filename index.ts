abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    public abstract getDescription(): string;
  
    public abstract rentalRate(): number;
  
    public getMake(): string {
      return this.make;
    }
  
    public setMake(make: string): void {
      this.make = make;
    }
  
    public getModel(): string {
      return this.model;
    }
  
    public setModel(model: string): void {
      this.model = model;
    }
  
    public getYear(): number {
      return this.year;
    }
  
    public setYear(year: number): void {
      this.year = year;
    }
  
    public isRented(): boolean {
      return this.rented;
    }
  
    public rent(): void {
      if (this.rented) {
        console.log("Vehicle is already rented");
      } else {
        this.rented = true;
        console.log("Vehicle has been rented");
      }
    }
  
    public returnVehicle(): void {
      if (this.rented) {
        this.rented = false;
        console.log("Vehicle has been returned");
      } else {
        console.log("Vehicle is not currently rented");
      }
    }
  }

  class Car extends Vehicle {
    private numDoors: number;
    private transmission: string;
  
    constructor(make: string, model: string, year: number, rented: boolean, numDoors: number, transmission: string) {
      super(make, model, year, rented);
      this.numDoors = numDoors;
      this.transmission = transmission;
    }
  
    public getDescription(): string {
      return `${this.year} ${this.make} ${this.model}, ${this.numDoors} doors, ${this.transmission} transmission`;
    }
  
    public rentalRate(): number {
      return 50;
    }
  
    public getNumDoors(): number {
      return this.numDoors;
    }
  
    public setNumDoors(numDoors: number): void {
      this.numDoors = numDoors;
    }
  
    public getTransmission(): string {
      return this.transmission;
    }
  
    public setTransmission(transmission: string): void {
      this.transmission = transmission;
    }
  }
  
  class Truck extends Vehicle {
    private payloadCapacity: number;
    private numAxles: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, payloadCapacity: number, numAxles: number) {
      super(make, model, year, rented);
      this.payloadCapacity = payloadCapacity;
      this.numAxles = numAxles;
    }
  
    public getDescription(): string {
      return `${this.year} ${this.make} ${this.model}, payload capacity: ${this.payloadCapacity} lbs, ${this.numAxles} axles`;
    }
  
    public rentalRate(): number {
      return 100;
    }
  
    public getPayloadCapacity(): number {
      return this.payloadCapacity;
    }
  
    public setPayloadCapacity(payloadCapacity: number): void {
      this.payloadCapacity = payloadCapacity;
    }
  
    public getNumAxles(): number {
      return this.numAxles;
    }
  
    public setNumAxles(numAxles: number): void {
      this.numAxles = numAxles;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineDisplacement: number;
    private isSportBike: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineDisplacement: number, isSportBike: boolean) {
      super(make, model, year, rented);
      this.engineDisplacement = engineDisplacement;
      this.isSportBike = isSportBike;
    }
  
    public getDescription(): string {
      return `${this.year} ${this.make} ${this.model}, engine displacement: ${this.engineDisplacement}cc, ${this.isSportBike ? 'sport bike' : 'standard bike'}`;
    }
  
    public rentalRate(): number {
      return 30;
    }
  
    public getEngineDisplacement(): number {
      return this.engineDisplacement;
    }
  
    public setEngineDisplacement(engineDisplacement: number): void {
      this.engineDisplacement = engineDisplacement;
    }
  
    public getIsSportBike(): boolean {
      return this.isSportBike;
    }
  
    public setIsSportBike(isSportBike: boolean): void {
      this.isSportBike = isSportBike;
    }
  }

  

const car = new Car('Honda', 'Civic', 2022, false, 4, 'automatic');
const truck = new Truck('Ford', 'F-150', 2021, false, 1500, 2);
const motorcycle = new Motorcycle('Ducati', 'Monster', 2020, false, 821, true);

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
