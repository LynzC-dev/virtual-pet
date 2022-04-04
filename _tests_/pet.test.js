
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

    expect(pet.hunger).toEqual(10);
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
 