
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 5;
    this.fitness = 10;
}
Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger +=5;
    this.fitness +=3;
}

Pet.prototype.walk = function () {
    const MAX_FITNESS = 10;
   if ( (this.fitness + 4) <= MAX_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAX_FITNESS;
    }
}

module.exports = Pet;
