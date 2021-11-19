class Programmer {

    public refactorTask(task: number): void{
      console.log('Programmer refactored task -', task);
    }
    public createTask(task: number): void {
      console.log('Created a new task - ', task);
    }
  
}

class Tester {

    public testOldTask(task: number): void{
        console.log('Testing old task -', task);
      }

      public cteatTest(task: number): void {
        console.log('Created a new tests - ', task);
      }
}
  
  
  class CreatedTask {
    public startTask(task: number, test: number): void {
        new Programmer().createTask(task)
        new Tester().testOldTask(test)
    }  
      
  }

  class RefactoredTask {
    public refactorTask(task: number, test: number): void {
        new Programmer().refactorTask(task)
        new Tester().cteatTest(test)
      
    } 
}

// Fasad  - 
class Sprint {
    public createTask(task:number, test: number){
        new CreatedTask().startTask(task, test)
    }

    public refactorBug(task:number, test: number) {
        new RefactoredTask().refactorTask(task, test)
    }

}

const sprint = new Sprint()

sprint.createTask(2222, 3333);
sprint.refactorBug(1111, 44444);