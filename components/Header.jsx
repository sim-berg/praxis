import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'



function Header() {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div> 
    <Head>
    <meta charSet="UTF-8" />
     <link rel="icon" type="image" href="../favicon.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Praxis Alexandra Matheis</title>
   </Head>
  <div className="Spacer"></div>
   <div className="Nav">
   
   <nav>
        <div className="logos">
          <Link href="/"><img className="logopic" src="/logobackground.jpeg" alt="Logo Image" width="36px" height="36px "/></Link> <Link href="/"><div className='logotext'><h1 className='logo'>Praxis Alexandra Matheis</h1><div className='logounterschrift'>Veränderung durch Heilenergie</div></div></Link>
      </div>
        
       
        <ul className={showDropdown ? "nav-links open":"nav-links"}>
            
            <li className= {showDropdown ? "fade":""} onClick={(showDropdown) =>setShowDropdown(!showDropdown)}><Link  href="/#start" >Praxis</Link></li>
            <li className= {showDropdown ? "fade":""} onClick={(showDropdown) =>setShowDropdown(!showDropdown)}><Link href="/vita">Vita</Link></li>
            <li className= {showDropdown ? "fade":""} onClick={(showDropdown) =>setShowDropdown(!showDropdown)}><Link href="/connect" >Kontakt</Link></li>
           
        </ul>
        <div onClick={() =>setShowDropdown(!showDropdown)}   className= {showDropdown ? "hamburger toggle":"hamburger"}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
    </div>
   </div>
  )
}

export default Header