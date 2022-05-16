<<<<<<< HEAD

function bachaFunction(){
    var div = document.getElementById('idk')
    var bacha = document.createElement("div");
    bacha.setAttribute('class', 'bacha');
    console.log(div.hasChildNodes())
if(div.hasChildNodes() == false){

div.appendChild(bacha);

}
}
=======
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
 
// function toggle() {
//     var element = document.getElementById("text");
//     element.classList.toggle("visiblent");
//     element.classList.toggle("text");

//   }
  $(document).ready(function(){
    $("button").click(function(){
      $("div#text").toggleClass("visiblent");
      $("div#text").toggleClass("text");

    });
  });
  
>>>>>>> 5204a3375f1a689566bb6a1e78684e94d2d90c73
