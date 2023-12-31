// selector 

const app=document.querySelector("#app");
const textInput=app.querySelector("#textInput")
const addBtn=app.querySelector("#addBtn")
const listGroup=app.querySelector(".listGroup")
const doneCount=app.querySelector(".doneCount")
const totalCount=app.querySelector(".totalCount")


// function 

 
const createList = (text) => {
    const list=document.createElement("div")
    list.classList.add("list");
    list.innerHTML=`
    <div class="flex  justify-between items-center overflow-hidden group animate__animated animate__fadeInUp border border-neutral-700 p-5 mb-3">
    <div class="content flex items-center gap-3">
      <input
        type="checkbox"
        class="list-check w-5 h-5 accent-neutral-700"
        
      />
      <div class="listText text-lg" >
      ${text}
      </div
      >
    </div>
    <div class="control group-hover:translate-x-0 translate-x-[150%] duration-1000 flex text-neutral-800 gap-1">
      <button class="editBtn disabled:opacity-30 active:scale-75 duration-300 border-2 p-1 border-neutral-700 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 stroke-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
      </button>
      <button class="list-del active:scale-75 duration-300 border-2 p-1 border-neutral-700 ">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 stroke-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
      </button>
    </div>
    
  </div>
  
    `
    const DelListHandler = () => {
        if(confirm("Are you sure to delete?")){
          list.classList.add("animate__animated","animate__fadeOutRight");
          list.addEventListener("animationend",() => {
               list.remove();
               listCounter();
          })
            

        }
    };
    const listDel=list.querySelector(".list-del");
    listDel.addEventListener("click",DelListHandler);

    const editBtn=list.querySelector(".editBtn");
    const editListHandler = () => {
        const listText=list.querySelector(".listText");
        const currentText=listText.innerText;
        // console.log(currentText);


        const input=document.createElement("input");
        input.classList.add("border","border-neutral-700","p-1","px-2","focus-visible:outline-none");
        // console.log(input);
        listText.innerText=null;
        listText.append(input);
        input.focus()
        input.value=currentText;

        input.addEventListener("blur",() => {
            listText.innerText=input.value;
        });

        
    };

    const listCheck=list.querySelector(".list-check");
    listCheck.addEventListener("click",() => {
        const listText=list.querySelector(".listText");
        listText.classList.toggle("line-through");
        editBtn.toggleAttribute("disabled")
        listCounter();
        
    })


    editBtn.addEventListener("click",editListHandler);


    return list;

}

const listCounter=() => {
    const listTotal=app.querySelectorAll(".list").length;
    const listDoneTotal=app.querySelectorAll(".list-check:checked").length;
    // console.log(listTotal,listDoneTotal);
    doneCount.innerText=listDoneTotal;
    totalCount.innerText=listTotal;
}

//handler
const addBtnHandler = () => {
    listGroup.append(createList(textInput.value))
    textInput.value=null;
    listCounter();
    
}


// listener 
addBtn.addEventListener("click",addBtnHandler)
textInput.addEventListener("keyup",(event) => {
  if(event.key==="Enter"){
    listGroup.append(createList(textInput.value) )
    textInput.value=null;
    listCounter();
  }
  
})