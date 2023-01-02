function createIncrement() {
    let count = 0;
    function increment() {
      count++;
    }
  
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    return [increment, log];
  }
  
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log();
  
  //----RESULT--
  // count is 0
  
  //-----Observation------
  
  //Even though increment() is invoked 3 times it only changes the values of function enviroment of increment
  //When the increment() is invoked 1st time
  //count =1
  //It increases to count =3 as it invoked for 3 times
  //But it is upadating the value inside increment() environment
  //When ever a function is called new environment is created
  //So changing values in increment() doesnt effect the values of other child function
  
  //There is no access bewteen child ---- child ,both have there own enironment to store values
  
  //Both children functions can access their parent properties or values
  
  //That is why count inside log() funciton is still 0.
  