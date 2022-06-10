let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let taskAreaCont=document.querySelector("textarea")
let mainCont=document.querySelector(".main-cont")
let priorityColor=document.querySelectorAll(".priority-color");
let removeBtn=document.querySelector(".remove-btn")
let deleteTicket=document.querySelectorAll(".ticket-cont")
let ticketcolor="black";
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
      createTicket(taskAreaCont.value,ticketcolor)
      modal.style.display="none";
      Modalflag=!Modalflag;
          taskAreaCont.value="";
        }
        
    })
    
let trashLight=true;
let colors=['pink','skyblue','green','black'];
function createTicket(task,color){
   
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute('class','ticket-cont')
    ticketCont.innerHTML=`<div class="ticket-color ${color}"></div>
    <div class="ticket-id">#dhjsk</div>
    <div class="ticket-task">${task}</div>`
  
    mainCont.appendChild(ticketCont);
    ticketCont.addEventListener("click",function(){
            if(!trashLight)
            ticketCont.remove();
        })
 // color handle
 let ticket_top=ticketCont.querySelector(".ticket-color") 
 let setcoloridx=-1;
    ticket_top.addEventListener("click",function(){
          let currcolor=ticket_top.classList[1];
        for(let i=0;i<color.length;i++){
            console.log(colors[i],"  ",currcolor);
            if(colors[i]==currcolor){
                  setcoloridx=i;
                  break;
            }
        }                 
           let nextColor=colors[(setcoloridx+1)%colors.length];
           ticket_top.classList.remove(currcolor);
           ticket_top.classList.add(nextColor);
      })
}
for(let i=0;i<priorityColor.length;i++){
   priorityColor[i].addEventListener("click",function(){
      for(let j=0;j<priorityColor.length;j++){
         priorityColor[j].classList.remove("active");
      }    
      priorityColor[i].classList.add("active");
      ticketcolor=priorityColor[i].classList[0];
})
}

removeBtn.addEventListener("click",function(){
      if(trashLight)
      removeBtn.style.color="red"
      else
      removeBtn.style.color="black"

      trashLight=!trashLight;
})

