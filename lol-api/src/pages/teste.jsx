import React from "react";
import champions from '../data/champions'
import '../pages/css/homepage.css'

export default function teste(){
    return(
        <div className="list-champions">
        {champions &&
            champions.map((item, index) => {
                return(
                    <div key={index} style={{backgroundImage: `url(${item.image.full})`}} className="box-teste-z">
                        <div className="texte-x">
                            <div className="title-champion-text">
                                <p>{item.name}</p>
                            </div>
                            <div className="subtitle-champion-text">
                                <p>{item.title}</p>
                            </div>        
                         </div>
                    </div>
                )
            })
        }
        </div>
    )
}