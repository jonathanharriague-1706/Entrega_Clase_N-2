// Simulador de steck para materiales

const material= "Bolsa de Cemento";
let stockCemento = 15;


while(stockCemento > 0) {

 let cantidadPedida = parseInt(prompt( " ¿Cuantas bolsas de cemento desea retirar? "));

 if(cantidadPedida > stockCemento){

    alert(" No contamos con el suficiente Stock para su pedido. Porfavor ingrese otro numero. Cantidad de Stock: " + stockCemento + " Bolsas de cemento");
 } else if(cantidadPedida > 0 && cantidadPedida <= stockCemento){
    stockCemento = stockCemento - cantidadPedida;
    alert( " Retiro exitoso. Stock actual: " + stockCemento + " Bolsas de Cemento");
 } else {
    alert (" Dato ingresado no valido. Intente de nuevo. ");
 }
 

}
alert(" Ya no contamos con mas Stock en nuestro deposito. muchas gracias");