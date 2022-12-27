var queue = [];
var input = 0;
function calculateQueue(value){
    if (input !==0) {
    input = parseFloat(input);
        addToQueue(input);
                    }
                    
    var resultado = value[0];
    var dividedByZero = 0;
    for (  var i = 2; i < value.length; i= i+2) {
        switch (queue[i-1]) {
            case '+':
                resultado+= value[i];
                break;
            case '-':
                resultado-= value[i];
                break;
            case '/':    if (value[i] === 0)   dividedByZero = 1;
                    else      resultado = resultado / value[i];
                break;
            case'*': resultado = resultado * value[i];
                break;
        }
    }

    resultado = resultado.toFixed(10);
    resultado = parseFloat(resultado);
    if ( dividedByZero === 1) { clearAll();
        document.getElementById("resultado").innerHTML =  "ERROR";}
    else
    {document.getElementById("resultado").innerHTML =  resultado ;
        input = resultado;
    queue = [];}
}

function addToQueue(input){
    queue.push(input);
}

function clearAll() {
    queue = [];
    input = 0;
    document.getElementById("resultado").innerHTML = "0";
}

function numericButton(arg){
    if ( document.getElementById("resultado").innerHTML ===  "ERROR" || (document.getElementById("resultado").innerHTML == "0" && arg != "."))
      { document.getElementById("resultado").innerHTML = ""; }
    if (!(arg === ".") || !input.match(/[.]/)) {
    input += arg;
    document.getElementById("resultado").innerHTML += arg;}
}

function operatorButton(arg){
      if (input !== 0 && input !== "-") {
          input = parseFloat(input);
          addToQueue(input);
          addToQueue(arg);
          document.getElementById("resultado").innerHTML +=arg;
          input = 0;
      }
      if (arg == "-"  && isNaN(queue[0]) && input !== "-")
      {input ="-";
          document.getElementById("resultado").innerHTML = "-";
    }
}
 
