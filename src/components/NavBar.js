import CartWidget from "./CartWidget"
const NavBar=()=>{
return(
<header class="navbar bg-neutral text-neutral-content">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span class="ml-3 text-xl">Melomanía</span>
    </a>
    <CartWidget></CartWidget>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Ventas</a>
      <a class="mr-5 hover:text-gray-900">Bandas</a>
      <a class="mr-5 hover:text-gray-900">Informacion</a>
      <a class="mr-5 hover:text-gray-900">Contacto</a>
    </nav>
    
  </div>
</header>
)
}
export default NavBar

