import React from "react";
import champions from '../data/champions'
import './css/cardChampions.css'

export default function cardChampions(){
    return(
        <div className="list-champions">
        {champions &&
            champions.map((item, index) => {
                return(
                    <div key={index} style={{backgroundImage: `url(${item.image.full})`}} className="box-teste-z">
                        <div className="texte-x">
                            <div className="title-champion-text">
                                <div className="main-title-text-champion">
                                <p>{item.name}</p>
                                <img className="img-icon-lane" src={item.image.lane} alt="top lane" />
                                </div>
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