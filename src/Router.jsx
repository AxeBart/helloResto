/**
 * code by Barth Lungele
 * March 2024
 * ElvinCode concour
 */

import { Nav } from "./components/navigation/Navigation"
import { Plate } from "./components/plats/Plats"
import { Reservation } from "./components/reservation/Reservation"
import { Home } from "./components/acceuil/Acceuil"
import { Map } from "./components/carte/Carte"
import { Footer } from "./components/footer/Footer"
import { Galerie } from "./components/plats/Galerie"
import "./index.css"

import { createBrowserRouter } from "react-router-dom"

function View({ view }) {
    return (
        <div className="">
            <Nav></Nav>
            {view}
            <Footer></Footer>
        </div>
    )
}


export const router = createBrowserRouter([
    {
        path:'/',
        element: <div className="">
            <Nav></Nav>
            <Home></Home>
            <Plate></Plate>
            <Reservation></Reservation>
            <Footer></Footer>
        </div>

    },
    {
        path:'/galerie',
        element: View(<Galerie />)
    },
    {
        path:'/localisation',
        element: <div className="">
                <Nav></Nav>
                <Map />
                <Footer></Footer>
            </div>
    },
    {
        path:'/plats',
        element: <div className="">
            <Nav />
            <Galerie />
            <Footer></Footer>
        </div>
    },
    {
        path:'/reservation',
        element: <div className="">
            <Nav />
            <Reservation />
            <Footer></Footer>
        </div>
    },
])