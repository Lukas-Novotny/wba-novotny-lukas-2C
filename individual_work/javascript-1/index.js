var txt = document.getElementById("text")
var notVisible = document.getElementsByClassName("visiblent")

// function toggle(){
//     if(notVisible.length>0){
//         txt.setAttribute("class","visible")
//     }
//     else{
//         txt.setAttribute("class","visiblent")
//     }
//     console.log(notVisible.length)
// }
 
function toggle() {
    var element = document.getElementById("text");
    element.classList.toggle("visiblent");
    element.classList.toggle("text");

  }
  
