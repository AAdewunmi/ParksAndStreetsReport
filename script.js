//Town Class
class Town{
  constructor(name, buildYear){
    this.name = name;
    this.buildYear = buildYear;
  }
}
//Park class
class Park extends Town {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }
  //Tree density method
  treeDensity() {
    const density = this.numTrees / this.area;
  	console.log(`${this.name} has a tree density of ${density} trees per square km.`);
  }
}
//Street class
class Street extends Town {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.length = size;
  }
  //Classify street method
    classifyStreet(){
      const classification = new Map();
      classification.set(1, 'tiny');
      classification.set(2, 'small');
      classification.set(3, 'normal');
      classification.set(4, 'big');
      classification.set(5, 'huge');
      console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}
//Park's data model
const allParks = [
  new Park('Oakwood Park', 1987, 0.2, 215),
  new Park('Greenfield Park', 1894, 2.9, 3541),
  new Park('Hamilton Park', 1958, 0.4, 949)];
//Street's data model
const allStreets = [
  new Street('Birkbeck Street', 1999, 1.1, 4),
  new Street('Gloucester Drive', 1999, 1.1, 4),
  new Street('Hillbank Close', 1999, 1.1, 4)];
//Functions
//calc function
function calc(arr){
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}
//reportParks function
function reportParks(p){
  console.log('------- PARKS REPORT --------');
  p.forEach(el => el.treeDensity());
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const[totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}
//reportStreets function
function reportStreets(s){
  console.log('------- STREETS REPORT --------');

}
reportParks(allParks);
reportStreets(allStreets);
