
// For Hand Every Thing is Going To Do A Reaction On It
var sort = document.querySelector(".list-input");
var search = document.querySelector(".search-input");
var inputs = document.querySelectorAll(".input");
var buttonAdd = document.querySelector("#add");
var contactCounter = document.querySelector(".contactcounter");
var eyeSlash = document.querySelector(".eyeSlash");
var eye = document.querySelector(".eye");
var allDelete = document.querySelector(".allDelete");
var tableBody = document.getElementById("tableBody");
var empty = document.getElementById("box");
var x = document.querySelectorAll(".name");
if(localStorage.getItem("phoneBooks") == null){
   var phoneBook = [];
}
else{
  var phoneBook = JSON.parse(localStorage.getItem("phoneBooks"));  
}

// for ButtonAdd Click
buttonAdd.addEventListener("click", buttonPhoneBook);


// For AddPoneBook Click
function buttonPhoneBook() {
   
    var newObject = {Name:inputs[0].value, Phone:inputs[1].value, Address:inputs[2].value};
    phoneBook.push(newObject);

    
    // For Save It At LocalStorage
    localStorage.setItem("phoneBooks", JSON.stringify(phoneBook));
    
    addPhoneBook();
    
    tr = document.querySelectorAll(".tr");
    clear();
    calc();
    hide();
    
}
// For Add PoneBook To TableBody
function addPhoneBook() {
    
    var temp = "";
    var phoneBook = JSON.parse(localStorage.getItem("phoneBooks"));
    
// For Write PhoneBooks    
for(var i = 0; i < phoneBook.length; i++){
       
    
    
temp += '<tr class="tr">'+
       '<td class="name">'+phoneBook[i].Name+'</td>'+
       '<td class="phone">'+phoneBook[i].Phone+'</td>'+
       '<td>'+phoneBook[i].Address+'</td>'+   
       '<td>'+
       '<i class="fas fa-minus-circle allDelete i1 mr-3" onclick="removePhoneBook(\'' + phoneBook[i].Phone + '\')"></i>'+
       '<i class="fas fa-edit i2 mr-3"></i>'+
       '<i class="fas fa-phone-volume i3"></i>'+    
       '</td>'+   
       '</tr>'        
        
    }

    tableBody.innerHTML = temp;
    
        x = document.querySelectorAll(".name");

}

// For
addPhoneBook();

// For Clear Inputs
function clear() {
    
    for(var i = 0; i < inputs.length; i++){
        
      inputs[i].value = "";  
        
    }
}


function removePhoneBook(e) {
    

    for(var i = 0; i < phoneBook.length; i++){
        if(phoneBook[i].Phone == e){
            phoneBook.splice(i, 1);
        }
        localStorage.setItem("phoneBooks", JSON.stringify(phoneBook));
    }

    addPhoneBook();
    
   hide(); 
calc();
}


function hide() {
 
 if(phoneBook.length == 0){
     
     empty.classList.add("show");
     
 }   
else{
    empty.classList.remove("show");
}    
    
    
}


hide();





function removeAllPhoneBook() {

   
    
    phoneBook.splice(0,);    
        
     localStorage.setItem("phoneBooks", JSON.stringify(phoneBook));
    addPhoneBook();
    calc();
    hide();
}

function hideAllPhoneBook() {
    
       tableBody.classList.toggle("hide");
       eyeSlash.classList.toggle("show");
       eye.classList.toggle("hide");
           
  
       
     
}



function calc() {
    
        contactCounter.innerHTML = phoneBook.length ;
    
  /* for(var i = 0; i < phoneBook.length; i++){
     
   if(i == -1){
        
        contactCounter.innerHTML = 0 ;
   }    
      contactCounter.innerHTML = i + 1; 
            
   }  */   
}

calc();





search.addEventListener("keyup", searchPhone);

function searchPhone(e) {
    
 var term = e.target.value.toLowerCase();
 
    for(var i = 0; i < x.length; i++){
        
     if(x[i].innerHTML.toLowerCase().indexOf(term) != -1){
     
    tr[i].style.display = "table-row"     
 }  
else{
    tr[i].style.display = "none"     
}    
        
    }
    
    
   
}






    














