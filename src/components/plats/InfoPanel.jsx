/**
 * code by Barth Lungele
 * March 2024
 * ElvinCode concour
 */

import { useState } from 'react'
import './info.css'


export function InfoPanel({ nom, image, description, visibility }) {
    return (
        <div className="info-panel"  >
            <button>btn</button>
            <p>{nom}</p>
            <img src={image} alt="" />
            <p>{description}</p>
        </div>
    )
}