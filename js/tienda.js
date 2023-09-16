

// simulador tienda de joyas


 let nombre = prompt("Ingrese su nombre")
 alert(`Bienvendo/a ${nombre} a nuestra tienda de joyas, esperamos puedas encontrar alguna joya de tu interés `)
 const IVA = 0.21

 class Tienda{
     constructor( tipoI, caracI, precioI) {
        this.tipo = tipoI;
        this.carac = caracI;
        this.precio = precioI;
}
        mostrarProducto(){
            console.log(`· ${this.tipo} ${this.carac}, tiene un precio de $${this.precio}`)
        }
        calcuIva = () =>{
           return  this.precio * IVA
            }
        precioMasIva = (resIva) =>{
           console.log(`El precio del producto ${this.tipo}, con la suma del impuesto iva, que es del %${IVA}, da  la suma total de $` + (resIva + this.precio))
        }
 }


const producto1 = new Tienda( "Collar", "de plata con piedra onix", 15000)

const producto2 = new Tienda("Aros", "de tipo argollas", 6000)

const producto3 = new Tienda("Anillo", "de plata con piedra rose", 20000)

const producto4 = new Tienda( "Pulsera", "de plata con marcasitas", 9000)


const catProductos = [producto1, producto2, producto3, producto4]



 function menu (){
    let salirMenu = false

 do{
    let opcionIngresada = parseInt(prompt(`Ingrese el Nº de la opcion que desée;
    1- mostrar catálogo de productos
    2- Eliminar un producto
    3- mostrar precios de los productos mas Iva
    0- Salir de la tienda`))
    switch(opcionIngresada){
        case 1:
            console.log(`Nuestro catálogo es; `) 
            producto1.mostrarProducto()
            producto2.mostrarProducto()
            producto3.mostrarProducto()
            producto4.mostrarProducto()  
              
            break
        case 2:
            let noElimMasProduc = false
            do{
                let eliminarP = parseInt(prompt(`Ingresa que producto deseas eliminar;
                1- Eliminar el último producto del catálogo 
                2- Eliminar el primer producto del catálogo
                3- Eliminar mas de un producto
                4- Mostrar catálogo original
                o- No quiero eliminar más productos de la tienda`
                ))
                switch(eliminarP){
                    case 1:
                         catProductos.shift()
                         console.log(catProductos)
                    break
                    case 2:
                        catProductos.pop()
                        console.log(catProductos)
                    break
                    case 3:
                        let cantElim = parseInt(prompt(`Entre los 4 productos de nuestro catálogo, ingresa en numeros del 1 al 4 de la cantidad que deseas eliminar`))
                        catProductos.splice(1,cantElim)
                        console.log(catProductos)
                        break
                    case 4: 
                    producto1.mostrarProducto()
                    producto2.mostrarProducto()
                    producto3.mostrarProducto()
                    producto4.mostrarProducto()  
                        
                        break
                    case 0:
                        noElimMasProduc = true
                    break
                    default:
                        console.log("Opción no válida")
                    break

                }
            }while(!noElimMasProduc)
            
             break
        case 3:
             producto1.precioMasIva(producto1.calcuIva()),
             producto2.precioMasIva(producto2.calcuIva())
             producto3.precioMasIva(producto3.calcuIva())
             producto4.precioMasIva(producto4.calcuIva()) 
            break
      
         case 0:
           console.log(`Saliste de la tienda, gracias ${nombre} por ver nuestro catálogo`)
           salirMenu = true
            break
        default:
            console.log("Opción no válida")
        break

    }

 }while(!salirMenu)
 }
 menu()





