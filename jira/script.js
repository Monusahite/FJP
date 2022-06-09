let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let taskAreaCont=document.querySelector("textarea")
let mainCont=document.querySelector(".main-cont")
let Modalflag=true

addbtn.addEventListener("click",function(){
    if(Modalflag)
    modal.style.display="flex";
    
    else
    modal.style.display="none";
    
    Modalflag=!Modalflag;
})

let modalText=document.querySelector(".modal-cont");

modalText.addEventListener("keydown",function(e){
    let key = e.key;
    
    if(key=='Enter'){
       console.log("enter has been clicked");
      createTicket(taskAreaCont.value)
          modal.style.display="none";
          Modalflag=!Modalflag;
          taskAreaCont.value="";
      }
   
})

function createTicket(task){
   

    let ticketCont=document.createElement("div");
    ticketCont.setAttribute('class','ticket-cont')
    ticketCont.innerHTML=`<div class="ticket-color"></div>
    <div class="ticket-id">#dhjsk</div>
    <div class="ticket-task">${task}</div>`
  
    mainCont.appendChild(ticketCont);
}