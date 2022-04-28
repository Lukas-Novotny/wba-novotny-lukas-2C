
function bachaFunction(){
    var div = document.getElementById('idk')
    var bacha = document.createElement("div");
    bacha.setAttribute('class', 'bacha');
    console.log(div.hasChildNodes())
if(div.hasChildNodes() == false){

div.appendChild(bacha);

}
}