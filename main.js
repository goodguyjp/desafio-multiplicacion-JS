// Funcion con ES6
let generar = () => {

    var numero = prompt("Que numero quiere multiplicar y factorizar? eliga entre 1 y 20");

    if(numero > 20){
        alert("numero fuera de rango");
        return;

    }
    
    for (var i = 1; i <= numero; i++) {
        let resultado = i * numero;
        console.log(numero + " x " + i + " es igual a = " + resultado);

        
        
    }console.log("");

    //codigo para el factorial del numero ingresado 

        for (let i = 1; i <= numero; i++){
            let res = 1;
            for(let j = 1; j <= i; j++){
                res = res * j;
            }
            
            console.log("El factorial del numero " + i + "! es: " +res);
          }
      

} 
generar();
