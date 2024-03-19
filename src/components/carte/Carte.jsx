/**
 * code by Barth Lungele
 * March 2024
 * ElvinCode concour
 */

import { useEffect, useState } from "react"
import "./map.css"
import mapImage from "../../assets/img/localisation.svg"

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// const mark = [-4.3302537, 15.310324]

// function LeafletMaps() {
//     return (
//         <div className="maps">
//             <MapContainer center={mark} zoom={13} style={{ height: "50vh" }} className="">
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
//                 <Marker position={mark}>
//                     <Popup>
//                         Votre restaurant est ici
//                     </Popup>
//                 </Marker>
//             </MapContainer>
//         </div>
//     )
// }


function LeafletMapsInDev() {
    return (
        <div className="" style={{
            display : "flex", justifyContent: "center", alignItems : "center", height : "100vh", width : "100%"
        }} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="center">
                        <img className="ft2" src={mapImage} width={300} alt="" />
                        </div>
                      
                        
                        <h2 className="s2">La carte sera biento disponble...</h2>
                        <p className="sr2">nous nous excusion pour Lorem ipsum dolor sit.</p>
                        <p className="fb2" style={{
                            border : "solid black 1px", padding : "10px"
                        }}>
                            Retrouvez nous à l'adresse qui suit <br />
                            C. Mont-nafula, Q. Mama mobutu, Av. Sapin N°4b
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export function Map() {
    return (
        <div className="" id="localisation">
            <LeafletMapsInDev></LeafletMapsInDev>
        </div>
    )


}