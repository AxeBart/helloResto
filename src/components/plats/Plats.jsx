/**
 * code by Barth Lungele
 * March 2024
 */
// importation des images

import plat1 from "../../assets/img/chicken.jpg"
import plat2 from "../../assets/img/Brochettes.jpg"
import fruits from "../../assets/img/fruits.jpg"

import { useState } from "react"
import { InfoPanel } from "./InfoPanel"
import "./galerie.css"
import "./plats.css"
import { Galerie } from "./Galerie"

let a = "../../assets/img/wine2.jpg"


function CardInfo({ image, nom, description }) {
    const texttrim = description.split(" ").slice(0, 10)
    const final = texttrim.join(' ') + "..."

    return (

        <div className="cardInfo">
            <div className="" style={{ display: "flex", justifyContent: "center" }}>
                <div className="miniPlate" style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}></div>
            </div>
            <div className="left">

                <div className="cardP">
                    <h4>{nom}</h4>
                    <p>{final}</p>
                </div>

            </div>
        </div>
    )
}



function PlateTop() {
    return (
        <div className="center">
            <div className="col-4">
                <div className="card s1">
                    <CardInfo image={plat1} nom="Poulet roti" description="Plat de poulet roti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam."></CardInfo>
                </div>
            </div>
            <div className="col-4">
                <div className="card s2">
                    <CardInfo image={plat2} nom="Brochette de porc" description="Des brochette de porc au Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam."></CardInfo>
                </div>
            </div>
            <div className="col-4">
                <div className="card s3">
                    <CardInfo image={fruits} nom="Salade de fruit" description="Une belle salade de fruit pour votre Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam."></CardInfo>
                </div>
            </div>
        </div>

    )
}

export function Plate() {
    return (
        <div className="panel" id="plats">
            <div className="container">
                <div className="row" style={{ display: "flex", alignItems: "center" }}>
                    <div className="col-6">
                        <h3>A la une !</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <PlateTop></PlateTop>
                </div>
            </div>
        </div>
    )
}