class Element {
  constructor(name, buildYear)
  {
    this.name = name;
    this.buildYear = buildYear;
  }
}


class Park extends Element
  {
    constructor(name, buildYear, area, numTrees){
    super(name, buildYear);
    this. numTrees = numTrees;
    this.area = area; // km2
  }

   treeDensity (){
    const density = this.numTrees / this.area ;
    return density
  }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3){
    super(name, buildYear);
    this.length = length;
    this.size = size;
    }

    classifyStreet () {
      const classification = new Map();
      classification.set(1, 'tiny');
      classification.set(2, 'small');
      classification.set(3, 'medium');
      classification.set(4, 'large');
      classification.set(5, 'big');
      console.log(`${this.name}${classification.get(this.size)}`)
    }
}

const allPark =
[new Park('Green Park', 1987, 0.2, 215),
new Park('national Park', 1894, 2.9, 3541),
new Park('Oak Park', 1953, 0.4, 949)];

const allStreet = [new Street('Ocean Avenue', 1959, 1.1, 4),
new Street('Evergreen Street', 2000, 1.5, 2),
new Street('Sunset Boulevard', 1982, 2.2, 5)];




function calc(arr){
  let sum = arr.reduce((prev, curr, index) => prev + curr, 0)
  return [sum, sum / arr.length]
}

function reportPark(parks) {
  parks.forEach(park => park.treeDensity()) ;


  //const ages = park.map(el => new Date.getFullYear() - el.buildYear();
  const ages = parks.map( el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  const  i = parks.map(el => el.numTrees).findIndex(el => el>= 100);
  console.log(`${parks[i].name} a été ouvert en ${parks[i].buildYear}, sa densité est de : ${parks[i].treeDensity()}`)

}

function reportStreet(street) {
  const[totalLength, averageLength] = calc(street.map(el => el.length))
  console.log();

  street.forEach(el => el.classifyStreet());
}

reportPark(allPark);
reportStreet(allStreet);
