

let containerProductos = document.getElementById("productos")
let formCargarProducto = document.getElementById("formCargarProducto")
let guardarProductoBtn = document.getElementById("guardarProductoBtn")
let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")
let coincidenciasDiv = document.getElementById("coincidenciasDiv")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")
let botonFinalizarCompra = document.getElementById(`botonFinalizarCompra`)
let fechaDiv =document.getElementById("fecha")
let loaderTexto = document.getElementById("loaderTexto")
let loader = document.getElementById("loader")

// FUNCTIONS: 

// let productosCarrito = []

function mostrarCatalogoDOM(array){
    console.log(`Ver estanteria con la llamada asincrona`)
     console.log(array)
    
    containerProductos.innerHTML = ""
    for(let producto of array){
        let producNuevoDiv= document.createElement("div")
        producNuevoDiv.className = "col-12 col-md-6 col-lg-4 my-4"
        producNuevoDiv.innerHTML = `
            <div id="${producto.id}" class="card" style="width: 20rem;">
                    <img class="card-img-top img-fluid" style="height: 250px;"src="assets/${producto.img}" alt="${producto.tipo} ">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <p>Categoria:${producto.categoria}</p>
                        <p>Caracteristicas${producto.carac}</p>
                        <p class="">Precio: ${producto.precio}</p>
                    <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
                    </div>
           </div>`
        containerProductos.append(producNuevoDiv)
        let agregarBtn = document.getElementById(`agregarBtn${producto.id}`)
        console.log(agregarBtn)
        agregarBtn.addEventListener("click",()=>{
            agregarAlCarrito(producto)
         })
     }
     
} 
mostrarCatalogoDOM(Productos)

function agregarAlCarrito(elemento){
    let producAgregado = productosCarrito.find((producto) => producto.id == elemento.id)
    producAgregado == undefined ?  
            ( productosCarrito.push(elemento),
    
            localStorage.setItem("carrito", JSON.stringify(productosCarrito)),
            Toastify({
                text: `El producto ${elemento.carac} ha sido sumado al carrito`,
                duration: 3000,
                gravity: "bottom", 
                position: "right", 
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
              }).showToast()) :
              Toastify({
                text: `El producto ${elemento.carac} ya existe en el carrito`,
                duration: 2500,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                style: {
                  background: "linear-gradient(to right, red, orange)",
                  color: "black",
                  fontWeight: "bold"
                },
              }).showToast()
            
}



    

function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach(
        (productoCarrito) => {
            modalBodyCarrito.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                 <img class="card-img-top" height="300px" src="assets/${productoCarrito.img}" alt="">
                 <div class="card-body">
                        <h4 class="card-title">${productoCarrito.categoria}</h4>
                        <p class="card-text">${productoCarrito.carac}</p>
                         <p class="card-text">$${productoCarrito.precio}</p> 
                         <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
            `}
    )
    //segundo for each quiero adjuntar evento eliminar
    array.forEach(
        (productoCarrito) => {
            //similar let btnBorrar = document.getElementById(`botonEliminar${productoCarrito.id}`)
            //capturar nodo sin guardarlo en variable:
            document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () =>{
                //borrar del DOM
                let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
                cardProducto.remove()
                //borrar del array
                //obtener posición del elemento y lo borro
                let posicion = array.indexOf(productoCarrito)
                array.splice(posicion, 1)
                //borrar del storage
                localStorage.setItem("carrito", JSON.stringify(array))
                //actualizamos el total
                calcularTotal(array) 
            })
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
    return totalReduce
}

function agregarProducto(array){
    let carac = document.getElementById("caracInput")
    let categoria = document.getElementById("categoriaInput")
    let precio = document.getElementById("precioInput")
    //instanciarlo en un objeto:
    const nuevoProducto = new Tienda(array.length+1,carac.value, categoria.value, parseInt(precio.value), "relojdeplata.jpg")
    array.push(nuevoProducto)  
    carac.value =""
    categoria.value =""
    precio.value =""    
    //agregarle experiencia usuario con Swal: 
    Swal.fire({
        title: `Excelente, has agregado un producto :D`,
        text: `El producto ${nuevoProducto.carac} se ha sumado.`,
        imageUrl: `assets/${nuevoProducto.img}`,
        imageHeight: 350,
        imageAlt: `${nuevoProducto.categoria} de ${nuevoProducto.carac}`,
        showConfirmButton: false,
        timer: 2500
    })
    //SETEAR STORAGE 
    localStorage.setItem("Productos", JSON.stringify(Productos))
}


function finalizarCompra(array){
    let total = calcularTotal(array)
    Swal.fire({
        text: `Gracias por su compra, usted ha gastado ${total}`
    })
    productosCarrito = []
    localStorage.removeItem("carrito")
}


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


function buscarInfo(buscado,array){
    let coincidencias = array.filter(
        (producto) => {
           return producto.tipo.toLowerCase().includes(buscado.toLowerCase()) || producto.carac.toLowerCase().includes(buscado.toLowerCase())
        }
    )
    coincidencias.length > 0 ? (
    mostrarCatalogoDOM(coincidencias), coincidenciasDiv.innerHTML ="") : (mostrarCatalogoDOM(array), coincidenciasDiv.innerHTML = `<h3>No hay coincidencias con su búsqueda, este es nuestro catálogo completo</h3>`)
}




                //    EVENTOS


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



buscador.addEventListener("input", () => {
    console.log(buscador.value)
    buscarInfo(buscador.value,Productos)
})



//EVENTOS PROYECTO:

guardarProductoBtn.addEventListener("click", () =>{
    
    agregarProducto(Productos)
    mostrarCatalogoDOM(Productos)
} )


botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosCarrito)
})
botonFinalizarCompra.addEventListener("click", () =>{
    finalizarCompra(productosCarrito)
})

//CODIGO:

const DateTime = luxon.DateTime
setInterval(()=>{
    let fechaAhora = DateTime.now()
    fechaDiv.innerHTML = `${fechaAhora.toLocaleString(DateTime.TIME_WITH_SECONDS)}`
},1000)

// mostrarCatalogoDOM(Productos)