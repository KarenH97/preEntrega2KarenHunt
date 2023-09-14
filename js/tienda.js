

// simulador tienda de joyas


 let nombre = prompt("Ingrese su nombre")
 alert(`Bienvendo/a ${nombre} a nuestra tienda de joyas, esperamos puedas encontrar alguna joya de tu interés `)
 const IVA = 0.21
 let total = 0

 class Tienda{
     constructor(idI, tipoI, caracI, precioI) {
        this.id = idI;
        this.tipo = tipoI;
        this.caracteristicas = caracI;
        this.precio = precioI;
}
        mostrarProducto(){
            console.log(`El producto ${this.tipo}, de ${this.caracteristicas}, tiene un precio de $${this.precio}`)
        }
        calcuIva = () =>{
           return  this.precio * IVA
            }
        precioMasIva = (resIva) =>{
           console.log(`El precio del producto ${this.tipo}, en total, con la suma del impuesto iva que es del %${IVA}, da $` + (resIva + this.precio))
        }
 }

const producto1 = new Tienda(1, "Collar", " plata con piedra onix", 15000)
console.log(producto1)
const producto2 = new Tienda(2,"Aros", "tipo argollas", 6000)
console.log(producto2)
const producto3 = new Tienda(3,"Anillo", " plata con piedra rose", 20000)
console.log(producto3)
const producto4 = new Tienda(4, "Pulsera", " plata con marcasitas", 9000)
console.log(producto4)

 console.log(producto1.calcuIva())
 producto1.precioMasIva(producto1.calcuIva())

producto1.mostrarProducto()
producto2.mostrarProducto()
producto3.mostrarProducto()
producto4.mostrarProducto()









// producto1.mostrarPreMasIva(mostrarProducto(),precioMasIva())
// console.log(producto1.mostrarPreMasIva())








//  function menu (){
//     let salirMenu = false

//  do{
//     let opcionIngresada = parseInt(prompt(`Ingrese el Nº del producto que desea comprar, si no quiere comprar en este momento, elija la opción 0
//     1- Collar de plata con perlas $ ${precioCollar},
//     2- Anillo de plata con piedra rose $ ${precioAnillo},
//     3- Argollas de plata $ ${precioAros},
//     4- Pulsera de plata con piedra onix $ ${precioPulsera}
//     0- No quiero comprar más este momento`))
//     switch(opcionIngresada){
//         case 1:
//             console.log(precioCollar)
//                 total += precioCollar
//             break
//         case 2:
//              console.log(precioAnillo)
//                 total += precioAnillo
//              break
//         case 3:
//             console.log(precioAros)
//             total += precioAros
//             break
//         case 4:
//             console.log(precioPulsera)
//             total += precioPulsera
//             break
//          case 0:
//            console.log("Salir de la compra")
//            salirMenu = true
//             break
//         default:
//             console.log("Opción no válida")
//         break

//     }

//  }while(!salirMenu)
//  }
//  menu()

//  alert(`el total de la compra es ${total}`)


// alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
// let seleccionarProductos = Number(prompt( "1-buzo $3000 2-remera $1500 3-jean $5000 4-Zapatillas $6000 "))
// let seleccionarCantidad;
// let total = 0;


// const cantidad = (cant, precio) => {
//   return cant * precio
// }


// while (seleccionarProductos != 0) {
//   switch (seleccionarProductos) {
//     case 1:
//       seleccionarCantidad= Number(prompt("el producto seleccionado es buzo, indique la cantidad"))
//             total += cantidad(seleccionarCantidad, 3000)
//       break;
//       case 2:
//         seleccionarCantidad = Number(prompt("el producto seleccionado es remera, indique la cantidad"))
//         total += cantidad(seleccionarCantidad, 1500)
//       break;
//     case 3:
//       seleccionarCantidad = Number(prompt("el producto seleccionado es jean, indique la cantidad"))
//       total += cantidad(seleccionarCantidad, 5000)
//     break;
//     case 4:
//       seleccionarCantidad = Number(prompt("el producto seleccionado es Zapatillas, indique la cantidad"))
//       total += cantidad(seleccionarCantidad, 6000)
//     break;

//     default:
//       break;
//   }
//   seleccionarProductos = Number(prompt( "1-buzo $3000 2-remera $1500 3-jean $5000 4-Zapatillas $6000 "))
// }

// alert("el total de la compra es de: " + total)


// const envio = () => {
//     if (total >= 10000) {
//       alert("El envio es gratuito")
//     }else{
//       total += 1000
//       alert("el costo de envio es de 1000, el total es: " + total)
//     }
// }

// // envio()

// const metodoDePago = () => {
//   let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
//   if (metodo == "tarjeta") {
//     total *= 1.1
//     console.log(total);
//   }else if ( metodo == "efectivo") {
//     total -= 1000
//     alert("tenes un descuento de 1000, el total es:" + total)
//   }


// }

// metodoDePago()

const btncart = document.querySelector(`.container-icon`)
const containercartproducts = document.querySelector(`.container-cart-products`)

btncart.addEventListener(`click`, () => (
    containercartproducts.classList.toggle(`hidden-cart`)
))



