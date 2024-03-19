import plat1 from "../../assets/img/chicken.jpg";
import plat2 from "../../assets/img/Brochettes.jpg";
import fruits from "../../assets/img/fruits.jpg";
import wine from "../../assets/img/wine1.jpg";
// import glass from "../../assets/img/wine2.jpg";
// import wineglass from "../../assets/img/wine3.jpg";
import multiplats from "../../assets/img/multiplats.jpg";
import riz from "../../assets/img/rizoeuf.jpg";
import { StarIcon, majorScale } from "evergreen-ui";

import './galerie.css'
function ImageForGalerie({ url, nom }) {
    return (

        <li className="image" >
            <img title={nom} src={url} alt="" />
        </li>
    )
}

function GalerieCard({ className, nom, image, prix }) {
    return (
        <div className={"col-4 " + className}>
            <div className="galerie-card">
                <div className="galerieCard-image" style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white"
                }}>
                    <div className="darkness">
                        <p className="plat-title">{nom}</p>
                    </div>


                </div>
                <div className=" " ><br />
                    <div className="" style={{ display: "flex", alignItems: "center" }}>
                        <StarIcon color="#f68b00" size={majorScale(3)}></StarIcon>
                        <StarIcon color="#f68b00" size={majorScale(3)}></StarIcon>
                        <StarIcon color="#f68b00" size={majorScale(3)}></StarIcon>
                        <StarIcon size={majorScale(3)}></StarIcon>
                        <StarIcon size={majorScale(3)}></StarIcon>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, rerum?</p>
                    <p className="prix">{prix || "--"}</p>

                </div>
            </div>

        </div>
    )
}
export function Galerie() {
    return (
        <div className="" style={{
            marginTop: "10vh",
            display: "flex",
            position: "relative",
            height: "max-content"
        }}>
            <div className="container">
                <div className="row">
                    <span id="top"></span>
                    <GalerieCard className="ft1" nom="Salade de fruit" image={fruits} prix="20$"></GalerieCard>
                    <GalerieCard className="ft1" nom="Poulet Roti" image={plat1} prix="50$"></GalerieCard>
                    <GalerieCard className="ft1" nom="Brochette de porc" image={plat2} prix="25$"></GalerieCard>
                    <GalerieCard className="ft2" nom="Riz aux oeufs" image={riz} prix="40$"></GalerieCard>
                    <GalerieCard className="ft2" nom="Vin rouge" image={wine} prix="100$"></GalerieCard>
                    <GalerieCard className="ft2" nom="Plat Complet" image={multiplats} prix="100$"></GalerieCard>
                </div>
            </div>
        </div>
    )
}


