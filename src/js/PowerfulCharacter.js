import Character from './Character';

export default class PowerfulCharacter extends Character {
  get stoned() {
    return this.stoned;
  }

  set stoned(value) {
    this.stoned = value;
  }

  get attack() {
    let percentAttack;
    switch (this.distanceAttack) {
      case 2:
        percentAttack = 0.9;
        break;
      case 3:
        percentAttack = 0.8;
        break;
      case 4:
        percentAttack = 0.7;
        break;
      case 5:
        percentAttack = 0.6;
        break;
      default:
        percentAttack = 1;
        break;
    }
    if (this.stoned) {
      return Math.ceil((this.attack * percentAttack) - Math.log2(this.distanceAttack) * 5);
    }
    return Math.ceil(this.attack * percentAttack);
  }

  set attack(value) {
    this.attack = value;
  }
}
