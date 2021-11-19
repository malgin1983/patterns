class ObjectBuild {
    constructor(){
        this.walls  = 'wood'
        this.windows = 'wood'
        this.doors = 'stell'
    }
}

class Building {
    constructor(baseObject) {
        this.baseObject = baseObject
    }
    createWalls(type){
        this.baseObject.walls= type
        return this
    }
    createDoors(type){
        this.baseObject.doors = type
        return this
    }
    createWindows(type){
        this.baseObject.windows= type
        return this
    }
    addPool(type){
        this.baseObject.pool= type
        return this
    }
    addCord(type){
        this.baseObject.cord= type
        return this
    }
    build(){
        return this.baseObject
    }
}

class Director {
    static creatStandart(buildObject){
        return buildObject.createWalls('standart').createDoors('standart').build()
    }

    static createComfort(buildObject){
        return buildObject.createWalls('comfort').createDoors('comfort').addPool('medium pull').build()
    }

    static createLux(buildObject){
        return buildObject.createWalls('premium').createDoors('premium').addPool('premium pull').addCord('tennis').build()
    }
}

//Объект строительства
const baseObject = new ObjectBuild()

//Строитель - модифицирует объект строительства
const building = new Building(baseObject)

//Директор будет строить по типу зданий
console.log('Standart House', Director.creatStandart(building));
console.log('Comfort House', Director.createComfort(building));
console.log('Premium house', Director.createLux(building));