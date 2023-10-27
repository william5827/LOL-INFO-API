import React from "react";
import champions from '../data/champions'
import '../pages/css/homepage.css'

export default function teste(){
    return(
        <div>
        {champions &&
            champions.map((item, index) => {
                return(
                    <div key={index} className="box-teste-z">
                        {item.name}
                    <img key={index} src={item.image.full} className="box-teste-x"/>
                        
                    
                    </div>
                )
            })
        }
        </div>
    )
}