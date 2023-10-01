

// // simulador tienda Vintage
 
 class Tienda{
     constructor( categoria, carac, precio, imagen) {
        this.tipo = categoria;
        this.carac = carac;
        this.precio = precio;
        this.img =imagen
}
        mostrarProducto(){
            console.log(`· ${this.carac}, tiene un precio de $${this.precio}`)
        }
        calcuIva = () =>{
            const IVA = 0.21
           return  this.precio * IVA
            }
        precioMasIva = (resIva) =>{
           console.log(`El precio del producto ${this.carac}, con la suma del impuesto iva, que es del %${IVA}, da  la suma total de $` + (resIva + this.precio))
        }
 }


const producto1 = new Tienda( "Antiguedades", "Relog antiguo de plata ", 15000, "relojdeplata.jpg")

const producto2 = new Tienda("Coleccionables", "Maquina de escribir ", 6000, "maquina-escribir.jpg")

const producto3 = new Tienda("Antiguedades", "Estatua baiarines de porcelana", 20000, "porcelana.jpg")

const producto4 = new Tienda( "Joyas", "Broche colibri de plata ", 9000, "joya1.jpg")
 

let Productos = []
    if(localStorage.getItem("Productos")){
                    
        for(let produc of JSON.parse(localStorage.getItem("Productos"))){
              let producStorage = new Tienda (produc.tipo, produc.carac,produc.precio,produc.img )
           Productos.push(producStorage)
         }
                
     }else{
    
     Productos.push(producto1,producto2,producto3,producto4)
     localStorage.setItem("Productos", JSON.stringify(Productos))
  }

// CARACTERISTICAS DEL HEADER

function ordenarMayorMenor(array){
    let arrayMayorMenor = array.concat()
     arrayMayorMenor.sort(
        (produc1,produc2) => produc2.precio - produc1.precio
    )
    mostrarCatalogoDOM(arrayMayorMenor)
}
function ordenarMenorMayor(array){
    let arrMenor = array.concat()
    arrMenor.sort(
        (p1, p2) => p1.precio - p2.precio
    )
    mostrarCatalogoDOM(arrMenor)
}

let selectOrden = document.getElementById("selectOrden")
selectOrden.addEventListener("change", () => {
    switch(selectOrden.value){
        case "1":
            ordenarMayorMenor(Productos)
        break
        case "2":
            ordenarMenorMayor(Productos)
        break
        default:
            mostrarCatalogoDOM(Productos)
        break
    }
})

function buscarInfo(buscado,array){
    let coincidencias = array.filter(
        (producto) => {
           return producto.tipo.toLowerCase().includes(buscado.toLowerCase()) || producto.carac.toLowerCase().includes(buscado.toLowerCase())
        }
    )
    coincidencias.length > 0 ? (
    mostrarCatalogoDOM(coincidencias), coincidencias.innerHTML ="") : (mostrarCatalogoDOM(array), coincidencias.innerHTML = `<h3>No hay coincidencias con su búsqueda, este es nuestro catálogo completo</h3>`) 
}

buscador.addEventListener("input", () => {
    console.log(buscador.value)
    buscarInfo(buscador.value,Productos)
})




           // Carrito
               

                
            
let productosCarrito = []


function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach(
        (productoCarrito) => {
            modalBodyCarrito.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                 <img class="card-img-top" height="300px" src="assets/${productoCarrito.img}" alt="">
                 <div class="card-body">
                        <h4 class="card-title">${productoCarrito.tipo}</h4>
                        <p class="card-text">${productoCarrito.carac}</p>
                         <p class="card-text">$${productoCarrito.precio}</p> 
                         <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
            `
        }
    )
    calcularTotal(array)    
}
function calcularTotal(array){
    const totalReduce = array.reduce(
        
        (acumulador, producto)=>
        {return acumulador + producto.precio},
        0
    )
    totalReduce > 0 ? precioTotal.innerHTML = `<strong>El total de su compra es: ${totalReduce}</strong>` : precioTotal.innerHTML = `No hay productos en el carrito` 
    
}



        //   MAIN Y PRODUCTOS

let containerProductos = document.getElementById("productos")

function mostrarCatalogoDOM(array){
    containerProductos.innerHTML = ""
    for(let producto of array){
        let producNuevoDiv= document.createElement("div")
        producNuevoDiv.className = "col-12 col-md-6 col-lg-4 my-4"
        producNuevoDiv.innerHTML = `
            <div id="${producto.tipo}" class="card" style="width: 20rem;">
                    <img class="card-img-top img-fluid" style="height: 250px;"src="assets/${producto.img}" alt="${producto.tipo} ">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <p>${producto.tipo}</p>
                        <p>${producto.carac}</p>
                        <p class="">Precio: ${producto.precio}</p>
                    <button id="comprar${producto.tipo}" class="btn btn-outline-success">Agregar al carrito</button>
                    </div>
           </div>`
        containerProductos.append(producNuevoDiv)
        let comprarbtn = document.getElementById(`comprar${producto.tipo}`)
        comprarbtn.addEventListener("click",()=>{
            // Pongo la funcion agregarAlCarrito pero no me la Toma, ademas me aparecen juntos los elementos de array o y 2, no se porque 
            productosCarrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(productosCarrito))
        })
    }
}
//  function agregarAlCarrito(elemento){
//             productosCarrito.push(elemento),
//             localStorage.setItem("carrito", JSON.stringify(productosCarrito))
           
//  }

mostrarCatalogoDOM(Productos)


