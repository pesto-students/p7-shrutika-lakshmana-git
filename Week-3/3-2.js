  const person = {
    Name: "Lakshmana",
    Role: "Developer",
    greet: function () {
      return `Welcome ` + this.Name + `,We pleased to have you as ` + this.Role;
    }
  };
  //---------About bind----------
  // Use1:when ever a method refernce is assigned to variable,It only refers function but not its object.
  // for example
  const example1 = person.greet;
  // Here the method refernce is given to example1
  // If we console.log(example1())
  //It gets error because this keyword is not refering to object.
  //To make this bind to object even when we pass reference of method
  //Bind function is used
  
  const example2 = person.greet.bind(person);
  console.log(example2());
  //Now this refers to object(person) and we can have acces to read the properties
  
  //use2:bind use to borrow function from one object to other object
  const person1 = {
    Name: "Rao",
    Role: "Manager"
  };
  //As we can see person1 doesnt have function but have same properties same as person object
  //so we can borrow function from person object to person1
  const example3 = person.greet.bind(person1);
  console.log(example3());
  //we can observe example3 is a function which contain method from person object and properties from person1 object
  
  //use3--we can also fix the parameters with values with bind
  
  function add(a, b) {
    return a + b;
  }
  //above function have 2 parameters ,with bind we can  fix the values of parameters
  const example4 = add.bind(null, 10);
  //fitst paraemter in bind refers to value of this.
  console.log(example4(30));
  //one parameter a is fixed with 10 ,we can other parameters
  
  //---------Call-------------------
  //call also works same as bind
  //the only differece is
  //with call the method is direclty invoked without creating a copy
  const example5 = person.greet.call(person1);
  console.log(example5);
  //we observe example5 is not a function anymore
  //but if we done same with bind example5 will a copy of that method
  
  //---callvsapply-----
  
  //we can only pass postional argumnts with call
  //but with apply we can pass an array of arguments .Js internally conver the array of arguments to positional arguments
  
  const print = Math.max.call(null, 2, 3, 4, 5);
  console.log(print);
  const print1 = Math.max.apply(null, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(print1);
  