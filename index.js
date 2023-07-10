let year = ""
let meassage = ""
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const resEl = document.getElementById("res")

 inputBtn.addEventListener("click", function(){
 year = Number(inputEl.value)
if (year % 4 != 0){
message =  "not a leap year"
}else if (year % 4 === 0  &&  year % 100 != 0){
message =  " a leap year"
}else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
message =  "a leap year"
}else{
message =  "not a leap year"
}
resEl.style.display = ("block")
resEl.textContent = year +" is " + message
})

// inputBtn.addEventListener("click", function(){
//  year = Number(inputEl.value)
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         message = " a Leap year"
//       } else {
//         message = " not a Leap year"
//       }
// }
// }
//       resEl.style.display = ("block")
// resEl.textContent = year +" is " + message
// })




