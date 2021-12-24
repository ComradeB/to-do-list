// class Player {
//   constructor(health = 100, name = 'Steve') {
//     this.health = health;
//     this.name = name;
//   }

//   attack(target, damage) {
//     if (target.health <= 0) return console.log(`Can't attack a felled enemy!`);
//     target.health -= damage
//     (target.health < 0)
//       ? target.die()
//       : console.log(`${target.name} has taken ${damage} damage. Player HP: ${target.health}`);
//   }
  
//   die() {
//   	console.log(`${this.name} has fallen`)
//   }
// }

// const hero = new Player(150,'Bijan')
// const enemy = new Player(50,'Random')

const PlayerFactory = function(name,weapon) {
 		
  let health = 100;
   const getName = () => name
  const getWeapon = () => weapon
  const getHealth = () => health
  
  const attack = (target,weapon) => {
    if (weapon === 'sword') {
    target.getHealth -= 100
    console.log(`${name} has inflicted 100 damage on ${target.getName()}. 
    ${target.getName()}'s HP: ${target.health}`)
    }
    if (target.getHealth <= 0) console.log(`${target.getName()} has fallen.`)
  }
  
  const die = target => {
    console.log(`${target.getName()} has fallen`)
  }
  
  return {attack, getWeapon, getName, getHealth}
}

const bijan = PlayerFactory('Bijan', 'sword')
const enemy = PlayerFactory('LinguaLand', 'sword')
