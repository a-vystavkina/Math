import PowerfulCharacter from './PowerfulCharacter';

export default class Magician extends PowerfulCharacter {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
