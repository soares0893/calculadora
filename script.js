
var viewfinder = document.getElementsByTagName("div")[0];

function insert(num){    
    if(num == '+' || num == '-' || num == '*' || num == '/' || num == '.' || viewfinder.innerHTML == ""){
        if((viewfinder.innerHTML == "" && num == "*") || (viewfinder.innerHTML == "" && num == "/")){
            console.log("Não permitido!")
        } else {
            switch (viewfinder.innerHTML[viewfinder.innerHTML.length - 1]){
                case '+':
                    console.log("soma");
                    break;
                case '-':
                    console.log("subtração");
                    break;
                case '*':
                    console.log("multiplicação");
                    break;
                case '/':
                    console.log("divisão");
                    break;
                case '.':
                    console.log("ponto");
                    break;
                default:
                    viewfinder.innerHTML += num;    
            }
        }        
    } else {
        viewfinder.innerHTML += num; 
    }
}
function reset(){
    viewfinder.innerHTML = "";
}
function back(){
    viewfinder.innerHTML = viewfinder.innerHTML.substring(0, viewfinder.innerHTML.length -1);
}
function calc(){
    if(viewfinder.innerHTML){
        viewfinder.innerHTML = eval(viewfinder.innerHTML);
    }
}