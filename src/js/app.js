import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Deamon from './Daemon';

const heroBowman = new Bowman('Bowman', 'Bowman');
const heroSwordsman = new Swordsman('Swordsman', 'Swordsman');
const heroMagician = new Magician('Magician', 'Magician');
const heroUndead = new Undead('Undead', 'Undead');
const heroZombie = new Zombie('Zombie', 'Zombie');
const heroDeamon = new Deamon('Deamon', 'Deamon');

console.log(heroBowman);
console.log(heroSwordsman);
console.log(heroMagician);
console.log(heroUndead);
console.log(heroZombie);
console.log(heroDeamon);
heroMagician.distanceAttack = 2;
heroMagician.stoned = true;
heroMagician.attack = 100;
console.log(heroMagician.attack);
