//FUNCTOR
// Object style
class Maybe {
    constructor(x){
      this.x = x;
    }
    map(fn){
      const res =  this.x && fn ? fn(this.x) : null
      return res instanceof Maybe ? res : new Maybe(res)
    }
    apply(funct){
      return this.map(a => funct.map(b => b(a)))
    }
  }
 // VS  
   /* Function style*/
   const maybe = x => f => !!x && !!f ? maybe(f(x)) : maybe(null)


  // In action Object style
  const ob = new Maybe(200)
  const f1 = new Maybe(x => x + 20)
  const f2 = new Maybe(x => x * 3)
  const f3 = new Maybe(x => x - 4)
  ob.apply(f1).apply(f2).apply(f3).map(console.log)


 //in action
  const fu1 = x => x + 20
  const fu2 = x => x * 3
  const fu3 = x => x - 4
  maybe(200)(fu1)(fu2)(fu3)(console.log)

  