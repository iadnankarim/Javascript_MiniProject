let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item =  document.createElement("li");
    item.innerText =inp.value;


    //create delete element
    let delBtn = document.createElement("button");
    delBtn.innerText ="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn)


    ul.appendChild(item);
    // console.log(inp.value)
    inp.value = "";
})

ul.addEventListener("click", function(event){
   if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("delete");
   }
})


//this method only delete exiting list not new list
// let delBtns = document.querySelectorAll(".delete")
// for(delbtn of delBtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();
//     })
// }