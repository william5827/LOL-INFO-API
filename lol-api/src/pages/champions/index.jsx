import React, { useEffect } from "react";
import './style.css'
import iconChampion from '../../assets/icon-champions-page-white.png'

export default function cardChampions({ champions }) {

    return (
        <div className="list-champions">
            {champions &&
                champions.map((item, index) => {
                    return (
                    <div key={index} className="listagem-campeoes">
                        <div className="container-listagem">
                        <div style={{ backgroundImage: `url(${item.image.full})` }} className="box-teste-z">
                            <div className="more-content-button">
                                
                                <a href={`/character/${item.name}`}>
                                <button  className="informations-champion-button">
                                    <div className="filter-inset-champion">
                                    <img className="icon-inset-button" src={iconChampion} />
                                    </div>
                                </button>
                                </a>

                            </div>
                            <div className="texte-x">
                                <div className="title-champion-text">
                                    <div className="main-title-text-champion">
                                        <p>{item.name}</p>
                                        <img className="img-icon-lane" src={item.image.lane} alt="Posição" />
                                    </div>
                                </div>
                                <div className="subtitle-champion-text">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
    )
}