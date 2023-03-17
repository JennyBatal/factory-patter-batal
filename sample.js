


function Positive(label) //function that has object that will be called later by factory class/super class
{
  this.label = label //has label of Positive
  this.type = "Positive" 
}

function Negative(label)//function that has object that will be called later by factory class/super class
{
  this.label = label //has label of Negative
  this.type = "Negative"
}
function Zero(label)//function that has object that will be called later by factory class/super class
{
  this.label = label //has label of Zero
  this.type = "Zero"
}

function CheckingFactory() //this is the super class that will call the other class or function to operate
{
  this.create = (label, type) => { //creating an object to call the label and type
    switch(type) //use switch to call the differene types of numbers
    {
      case 1: //for choice 1
        return new Positive(label) //to return a positive response
      case 2: //for choice 2
        return new Negative(label) //to return a negative response
      case 3: //for choice 3
        return new Zero(label) //to return a zero response
    }
  }
}

function say() //function to show a message in the user
{
  console.log("This number, " + this.label + ", it is " + this.type) //console log to see the result of the code. It is calling label and type plus messages
}

const checkingfac = new CheckingFactory() //calling the factory class/super class
const numbers = [] //an array to store/push data 

numbers.push(checkingfac.create("34", 1)) //pushing the numbers to the array and using the checkingFactory function to run through the responses(positive,negative,zero) with the number choices provided
numbers.push(checkingfac.create("-45", 2)) 
numbers.push(checkingfac.create("67", 1))
numbers.push(checkingfac.create("89", 1))
numbers.push(checkingfac.create("-109", 2))
numbers.push(checkingfac.create("0", 3))
numbers.push(checkingfac.create("-2", 2))
numbers.push(checkingfac.create("9", 1))
numbers.push(checkingfac.create("1", 1))
numbers.push(checkingfac.create("-17", 2))
numbers.push(checkingfac.create("0", 3))
numbers.push(checkingfac.create("93", 1))
numbers.push(checkingfac.create("-89", 2))

numbers.forEach( emp => { //for/for each loop
  say.call(emp) //calling the show message to put inside the for/for each loop
})