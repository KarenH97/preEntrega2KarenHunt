class Tienda{
    constructor( id, categoria, carac, precio, img) {
       this.id = id;
       this.categoria = categoria;
       this.carac = carac;
       this.precio = precio;
       this.img =img
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



const cargarProductos = async () =>{
    const resp = await fetch("/productos.json")
    const dataProducto = await resp.json()
    for(let produc of dataProducto){
        let producnuevo = new Tienda (produc.id, produc.categoria, produc.carac, produc.precio, produc.img )
        Productos.push(producnuevo)
    }
    localStorage.setItem("Productos", JSON.stringify(Productos))
}



let Productos = []
   if(localStorage.getItem("Productos")){

       for(let produc of JSON.parse(localStorage.getItem("Productos"))){
             let producStorage = new Tienda (produc.id, produc.categoria, produc.carac, produc.precio, produc.img )
          Productos.push(producStorage)
        }

    }else{
       cargarProductos()
    // Productos.push(producto1,producto2,producto3,producto4)
    // localStorage.setItem("Productos", JSON.stringify(Productos))
 }


// let productosCarrito = JSON.parse(localStorage.getItem("carrito")) ?? []
// console.log(productosCarrito)



