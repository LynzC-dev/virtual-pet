

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 5;
    this.fitness = 10;
};

Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger +=5;
    this.fitness +=3;
};

Pet.prototype.walk = function () {
    const MAX_FITNESS = 10;
   if ( (this.fitness + 4) <= MAX_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAX_FITNESS;
    }
};

Pet.prototype.feed = function () {
    const MIN_HUNGER = 0;
    if ( (this.hunger - 3) >= MIN_HUNGER) {
        this.hunger -= 3; 
     } else {
        this.hunger = MIN_HUNGER;
     }
 };

 Pet.prototype.checkUp = function () {
     if (this.fitness <= 3 && this.hunger >= 5) {
         return 'I am hungry AND I need a walk';
     } else if (this.hunger >= 5) {
         return 'I am hungry';  
     } else if (this.fitness <= 3) {
         return 'I need a walk';
     } return 'I feel great!';
 };

module.exports = Pet;
