/**
 * code by Barth Lungele
 * March 2024
 * ElvinCode concour
 */

import { Link } from "react-router-dom"
import backImage from "../../assets/img/steack.jpg"
import "./acceuil.css"

export function Home() {

    return (
        <div className="">
            <div className="" style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: "url(" + backImage + ")",

            }}>
                <div className="panel" id="home" style={{
                    display: "flex",
                    backgroundColor: "rgb(0, 0, 0, 0.5)",
                    width: "100%",
                    alignItems: "center"
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12" style={{ color: "white" }}>
                                <div className="title-container">
                                    <h1 className="bigTitle ft3">La Chaleur Des Fourneaux</h1>
                                    <p className="s2">Bienvenu au plus grand restaurant de kinshasa Lorem ipsum sumenda ullam facere, vel labore corrupti, deserunt alias esse iusto officiis. Soluta laboriosam adipisci voluptatem illum consectetur.</p>
                                    <br />
                                    <span className="fb3">
                                        <Link to="/plats" className="btn btn-lighting" style={{ textDecoration: "none" }}>Voir Nos plats</Link>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}