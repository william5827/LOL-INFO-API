import React from "react";
import {useParams} from "react-router-dom"
import '../css/characterPage.css'

function characterPage(props){

    let match = useParams();
    console.log(match)

    return(
        <>
        <div className="character-page">
            <div className="info-character">
                <div className="">sssssssssssss</div>
                <div className="">sssssssssssss</div>
                <div className="">sssssssssssss</div>
                <div className="">sssssssssssss</div>
                <div className="">sssssssssssss</div>
                <div className="info-champions-text"></div>
            </div>
        </div>
        </>
    )
}

export default characterPage