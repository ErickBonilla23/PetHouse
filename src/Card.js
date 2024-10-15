import React from "react";
import "./Card.css";
import Chucho from './chucho.jpg'

export function Card ({ image }){
    return(
        <div className="card">
            <img src={Chucho} alt="Pet" className="card-image" />
        </div>
    )
}

export default Card;