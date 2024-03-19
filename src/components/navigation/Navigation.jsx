import { CrossIcon, MenuIcon } from "evergreen-ui"
import { useState } from "react"
import "./nav.css"
import { Link, NavLink } from "react-router-dom"


export function Nav() {
    const [menu, setMenuVisible] = useState('mobile-menu-closed')
    const vueMenu = function (){
        menu === "mobile-menu-open" ? setMenuVisible('mobile-menu-closed') : setMenuVisible('mobile-menu-open')
    }

    return (
        <div className="navigation">
            <div className={menu}>
                <div className="" style={{padding: "0 20px"}}>
                    <div className="" style={{display : "flex", justifyContent : "space-between", alignItems : "center"}}>
                        <Link style={{textDecoration : "none", color : "whitesmoke"}}><h4 onClick={vueMenu}>Menu</h4></Link>
                        <CrossIcon onClick={vueMenu} size={30}></CrossIcon>
                    </div>
                    <div className="">
                        <Link className="navItems nav-items-mobile" to="/" onClick={vueMenu}>Home</Link><br />
                        <Link className="navItems nav-items-mobile" to="/plats" onClick={vueMenu}>Plats</Link><br />
                        <Link className="navItems nav-items-mobile" to="/localisation" onClick={vueMenu}>Localisation</Link><br />
                        <Link className="navItems nav-items-mobile" to="/reservation" onClick={vueMenu}>Reservation</Link><br />
                    </div>
                </div>
                
            </div>
            <div className="container">
                <div className="row" style={{ alignItems: "center", display: "flex", color: "white" }}>
                    <div className="col-6">
                        <Link style={{textDecoration : "none", color : "whitesmoke"}} to="/"><h3>Hello Resto</h3></Link>
                    </div>
                    <div className="col-6 right">
                        <div className="links">
                            <NavLink className="navItems" to="/">Home</NavLink>
                            <NavLink className="navItems" to="/plats">Plats</NavLink>
                            <NavLink className="navItems" to="/localisation">Localisation</NavLink>
                            <NavLink className="navItems" to="/reservation">Reservation</NavLink>
                        </div> 
                        
                        <div className="humberger">
                            <MenuIcon size={30} color="white" cursor="pointer" onClick={vueMenu}></MenuIcon>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}



// export function NavMobile() {
//     const [menu, setMenuVisible] = useState(true)
//     const vueMenu = function (){
//         menu ? setMenuVisible(false) : setMenuVisible(true) 
//     }
//     return (
//         <div className="navigation" style={{ paddingRight: "10px" }}>

//             <div className="mobile-menu apear" hidden={menu}>
//                 <div className="" style={{display : "flex", justifyContent : "space-between", alignItems : "center"}}>
//                 <h4>Menu</h4>
//                 <CrossIcon onClick={vueMenu}></CrossIcon>
//                 </div>
//             </div>
            
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <div className="" style={{ display: "flex", alignItems: "center", }}>
//                             <MenuIcon size={35} color="white" cursor="pointer" onClick={vueMenu}></MenuIcon>
//                             <h2 style={{ color: "white", marginLeft: "20px" }}>Hello Resto</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }