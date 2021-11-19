//function composition
const transport = () => {
    return {
        race() {
            console.log(this.name + ' is going now!')
        }
    }
}

const animal = () => {
    return {
        say() {
            console.log(this.typeAnimal + ' is name - ' + this.name)
        }
    }
}

const transportAnimal = (name, typeAnimal) => {
    const transportAnimalName = {name}
    const transportAnimalType = {typeAnimal}
    return {
        ...transportAnimalName,
        ...transportAnimalType,
        ...transport(),
        ...animal()
    }
}

const horse = transportAnimal('Loshadka', 'Horse')
horse.race()
horse.say()

//class composition

class Transport {
    race() {
        console.log(this.name + ' is going now!')
    }
}

class Animal {
    say() {
        console.log(this.typeAnimal + ' is name - ' + this.name)
    }
}

class OldTransportAnimal {
    goGo() {
        console.log('Go go old method', this.name)
    }
}

class TransportAnimal extends OldTransportAnimal{
    constructor(name, typeAnimal) {
        super()
        this.name = name
        this.typeAnimal = typeAnimal
    }
}

// TransportAnimal.prototype.race = Transport.prototype.race
// TransportAnimal.prototype.say = Animal.prototype.say
Object.assign(TransportAnimal.prototype, {...TransportAnimal.prototype, race:  Transport.prototype.race,  say: Animal.prototype.say  })
const oslik = new TransportAnimal('Iaaa', "Oslik")
console.log(oslik.race());
console.log(oslik.say());
console.log(oslik.goGo());
