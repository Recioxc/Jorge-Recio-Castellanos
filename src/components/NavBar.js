import CartWidget from "./CartWidget"

import { Link } from "react-router-dom"

const NavBar=({  })=>{
return(
<header class="navbar bg-neutral text-neutral-content">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span class="ml-3 text-xl">Melomanía</span>
    
      </Link>
    
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to ='/vinyls' class="mr-5 hover:text-gray-900">Discos</Link>
      <Link to ='/genere/Psychedelic rock' class="mr-5 hover:text-gray-900">Rock</Link>
      <Link to ='/genere/Grunge' class="mr-5 hover:text-gray-900">Grunge</Link>
      
    </nav>
    <CartWidget/>
  </div>
 
</header>
)
}
export default NavBar

