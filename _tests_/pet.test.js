
const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
    it ('has initial age 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
   
  });

  describe ('growUp', () => {
  it('increase age by 1', () => {
    const pet = new Pet ('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
  it('increase hunger by 5', () => {
    const pet = new Pet ('Fido');

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  })
  it('increase fitness by 3', () => {
    const pet = new Pet ('Fido');

    pet.growUp();

    expect(pet.fitness).toEqual(13);
  })
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
    it('increase fitness by a mx of 10', () => {
      const pet = new Pet('fido');

      pet.fitness = 8
      pet.walk ();

      expect(pet.fitness).toEqual(10);
    })
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');

      pet.hunger = 5;
      pet.feed ();

      expect(pet.hunger).toEqual(2);
    });
    it('decreases hunger to min value of 0', () => {
      const pet = new Pet('fido');

      pet.hunger = 2;
      pet.feed();

      expect(pet.hunger).toEqual(0);
    })
  });
 
  describe('checkUp', () => {
    it('if fitness is 3 or less, return I need a walk', () => {
      const pet = new Pet('fido');
        pet.fitness = 1
        pet.checkUp()

        expect(pet.checkUp()).toBe('I need a walk');
    });
    it('if hunger is 5 or more, return I am hungry', () => {
      const pet = new Pet('joe');
      pet.hunger = 6;
      pet.checkUp()

      expect(pet.checkUp()).toBe('I am hungry');
    });
    it('if pet fitness 3 or less and hunger is 5 or more', () => {
      const pet = new Pet('alan');
      pet.fitness = 3
      pet.hunger = 6
      pet.checkUp()

      expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('if pet fitness not 3 or less and hunger is not 5 of more', () => {
      const pet = new Pet('sam');
      pet.hunger = 4
      pet.fitness = 5
      
      pet.checkUp()
      
      expect(pet.checkUp()).toBe('I feel great!');
    });
  });