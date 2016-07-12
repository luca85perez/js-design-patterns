function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.info = () => `${this.model} has done ${this.miles} miles.`;

const civic = new Car('Honda Civic', 2009, 20000);
const mondeo = new Car('Ford Mondeo', 2010, 5000);

console.log(civic.info());
// -> Honda Civic has done 20000 miles.
console.log(mondeo.info());
// -> Ford Mondeo has done 5000 miles.
