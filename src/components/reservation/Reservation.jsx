import { useState } from 'react'
import './reservation.css'
import table from "../../assets/img/eating.svg"

export function Reservation() {
    const [page, setPage] = useState({ a: 'block', b: 'none' })
    const changeP = function () {
        if (page.a == 'block') {
            setPage({ a: 'none', b: 'block' })
        } else {
            setPage({ a: 'block', b: 'none' })
        }
    }
    return (
        <div className="panel" id="reservation">
            <div className="container">
                <div className="row">
                    <div className="col ft4">
                        <img src={table} width={300} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 fb2">
                        <div className="formTitle">
                            <p style={{ fontSize: "30px" }}>Reservez votre table rapidement et simplement !</p>
                            <p>Le nombre des personnes maximal est limité à 8, les reservation son faite avec une avance sur les places afin de nous assurer que vous serez bien présent.</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form col-6" style={{ display: page.a }}>
                            <input className="formItems s1" type="text" maxLength="50" placeholder="Nom" /><br />
                            <input className="formItems s2" type="number" min="1" max="8" placeholder="Nombre des personnes" /><br />
                            <input className="formItems s3" type="email" maxLength="100" placeholder="votremail@boite.com" /><br />
                            <input className="formItems s4" type="tel" maxLength="11" placeholder="Téléphone" /><br />
                            <button className="btn fb4" onClick={changeP}>next</button>
                        </div>
                        <div className="form col-6" style={{ display: page.b }}>
                            <input className="formItems s1" type="text" maxLength="50" placeholder="Numero de carte bancaire" /><br />
                            <div className="dock">
                                <button className="btn fb4">Reserver</button><br />
                                <button className="btn btn-red fb4" onClick={changeP}>Retour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}