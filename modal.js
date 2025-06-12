

const modalContenedor = document.querySelector('.modal-container');
const abrirCarrito = document.getElementById('open');
const cerrarCarrito = document.getElementById('cerrar');
const modalCarrito = document.querySelector('.modal-carrito');
// const modalContinuar = document.getElementById('continuar');
const cancelarCompra = document.getElementById('cancelar')
const bodyBackground = document.querySelector('.main-container');




abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
    console.log('click');
    bodyBackground.classList.toggle('background-active')
    console.log(bodyBackground);
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active');
    bodyBackground.classList.remove('background-active');
})

// modalContenedor.addEventListener('click',() =>{
//     cerrarCarrito.click();
// })

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})

// modalContinuar.addEventListener('click', ()=>{
//     cerrarCarrito.click();
// })




