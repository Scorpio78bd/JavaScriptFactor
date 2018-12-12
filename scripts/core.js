// *** MASTER JAVASCRIPT FILE ***

"use strict;"

// GLOBAL VARIABLES

// needed to count number of factors and determine when we find the highest factor
let totalFactors = 1;

// MASTER FUNCTIONS

function calculate(){
// needed to store final output string
  let msg = "";
// grabs the number from the input field
  let num = document.getElementById('userInput').value;
// determines whether checkbox is checked
  let wantHighest = document.getElementById('onlyHighest').checked;
// stores the final returned result of all factors()
  let result = allFactors(num, wantHighest);
// checks to see if result is a string or number and sets our message accordingly
  if(typeof result === "string"){
// final message if result is a data type of string
    msg = `There are ${totalFactors} factors of ${num}, and they are: ${result}.`;
  }else{
// final message if result is a numerical data type or other
    msg = `The highest factor of ${num} is ${result}.`;
// js takes final message and puts it in our <p> element
  document.getElementById('jsOutlet').innerHTML = msg;
//resets back to one after a calculation has completed
  totalFactors = 1;
}

function reset(){
// js resets the <p> tag back to an empty string
  document.getElementById('jsOutlet').innerHTML = "";
// js resets the input field back to empty
  document.getElementById('userInput').value = "";
// resets totalFactors back to one
  totalFactors = 1;
}

// HELPER FUNCTIONS

// either returns all factors of the given number or just the highest factor of the given number
function allFactors(n, returnHighest) {
// creates the number to divide into the original number
  let factor = n - 1;
// creates a string that contains the starting number
  let str = n;
// cycles through all numbers less than the original number
  while(factor !== 0){
// finds if factor is actually a factor of the original number
    if(n % factor === 0){
// runs only if this is the first factor found
      if(totalFactors === 1 && returnHighest){
// if first factor, then only return that number
        return factor;
      }
// for each new factor found, add to the string
      str += `, ${factor}`;
// adds 1 to totalFactors each time a new factor is found
      totalFactors++;
  }
// provides the new number to be tested in the next cycle
    factor--;
  }
// returns the string containing all of the found factors that happened in the while loop
  return str;
}
