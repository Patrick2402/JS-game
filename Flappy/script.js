
let littleBox = document.getElementById("object");
var lbStyle = window.getComputedStyle(littleBox);

document.addEventListener('keydown',(event) =>{

   
    switch (event.key) {
        case "ArrowRight":
            OutofXPosition("left",4);
            break;
        case "ArrowLeft":
            OutofXPosition("left",3);
            break;
        case "ArrowUp":
            OutofXPosition("top",1);
            break;
        case "ArrowDown":
            OutofXPosition("top",2);
            break;
        default:
            break;
    }

   
});
function OutofXPosition(topek,num){
    var topValue = lbStyle.getPropertyValue(topek).replace("px", "");
    if((Number(topValue) >= 700 && (num == 2 || num == 4)) 
    || (Number(topValue) <= 0 && (num == 1 || num == 3))){
 
    }else{
        switch (num){
            case 1:
                littleBox.style.top = (Number(topValue) - 20) + "px";
            break;
            case 2: 
                littleBox.style.top = (Number(topValue) + 20) + "px";
            break;
            case 3:
                littleBox.style.left = (Number(topValue) - 20) + "px";
            break;
            case 4:
                littleBox.style.left = (Number(topValue) + 20) + "px";
            break;
        }
    
    }
}
