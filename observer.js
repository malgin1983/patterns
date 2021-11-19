const TYPE_CONSOLE = 'console'
const TYPE_WINDOW = 'window'

//Тип вывода и нформации от наблюдаемого у наблюдателя
class TypeShowEvent {
  showConsole(message) {
    console.log('Console Message ==', message)
  }
  showOnWindow(message) {
    console.log('Alert Message ==', message)
  }
}
// Наблюдатель
class Observer {
  constructor(typeEvent, event){
    this._typeEvent = typeEvent
    this._event = event
  }
  getMessage(message) {
    switch (this._typeEvent) {
      case TYPE_CONSOLE:
        this._event.showConsole(message)
        return 1
      case TYPE_WINDOW:
        this._event.showOnWindow(message)
        return 1
    }
  }
}
//Объект наблюдения
class Observable {
  observers = []
  addObserver(observer) {
    this.observers.push(observer)
  }
  sendMessage(message){
    this.observers.forEach(observer => observer.getMessage(message))
  } 
}
const observable  = new Observable()
// instance
const event = new TypeShowEvent()
const arrayObservers = [ new Observer(TYPE_CONSOLE, event),new Observer(TYPE_WINDOW, event),new Observer(TYPE_CONSOLE, event),new Observer(TYPE_WINDOW, event),]

//Add observers
arrayObservers.forEach(observer =>observable.addObserver(observer))
observable.sendMessage('Hello world')