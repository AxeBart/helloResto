import './footer.css'


function SocialDock() {
    return (
        <div className="social-network">
            <span className="follow icon insta">c</span>
            <span className="follow icon wtp">n</span>
            <span className="follow icon fb">f</span>
            <span className="follow icon youtube">y</span>
        </div>
    )

}

export function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <div className="footer-part">
                                <p>Hello Resto Inc</p>
                                <p>Tout os plats son fait pour vous assurer une belle experiences</p>
                                <SocialDock></SocialDock>
                                <p>Retrouvez nous sur touts les reseaux</p>
                            </div>
                    </div>
                    <div className="col-6">
                    <div className="footer-part">
                                <p>Laissez nous un message Ici, nous vous lirons avec joie</p>
                                <input className="formItems" type="text" placeholder="Ecrivez votre message ici" /><br />
                                <button className="btn btn-vide">Envoyer</button>
                                <br /><br />
                                <sub>Design by Barth Lungele for ElvinCode 2024</sub>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}