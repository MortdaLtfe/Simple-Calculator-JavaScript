let input = document.querySelector("input")
let btn = document.querySelectorAll("button")
let clearBtn = document.querySelector("#dele")
let equal = document.querySelector("#equal")

function display(num){
  input.value += num
  input.placeholder = "0"
}
function Clear(){
  input.value= ""
}
function dele(){
  input.value = input.value.slice(0,-1)
}
function calc(){
  try {
    if (input.value != "") {
      input.value = eval(input.value)
    }
  } 
  catch (error) {
    input.placeholder = "Error"
    input.value = ""
  }
}