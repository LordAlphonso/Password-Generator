const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let outputField1 = document.getElementById("output-field-1")
let outputField2 = document.getElementById("output-field-2")
let generatedPassword1 = ""
let generatedPassword2 = ""

function newPassword(){
    generatedPassword1 = ""
    generatedPassword2 =""
    for (let i=0; i<15; i++){
       let password = Math.floor(Math.random() * characters.length);
        generatedPassword1 += characters[password];
        outputField1.textContent = generatedPassword1

   
  } 
  for (let i=0; i<15; i++){
       let password = Math.floor(Math.random() * characters.length);
        generatedPassword2 += characters[password];
        outputField2.textContent = generatedPassword2

   
  } 
    }