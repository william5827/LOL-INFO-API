import React, { useMemo } from "react";
import { useParams } from "react-router-dom"
import '../css/characterPage.css'
import { useLocation } from "react-router";
import data from '../../data/champions'
import Tabs from "../../components/tabs";


const useQuery = () => {
    const { search } = useLocation()
    return useMemo(() => new URLSearchParams(search), [search])
}

function characterPage() {

    let match = useParams();

    const query = useQuery()

    const champions = data[query.get('page')]

    const championsData = champions.find(champion => champion.id == match.id)

    return (
        <div className="character-page" style={{ backgroundImage: `url(${championsData.image.full})` }}>

            <div className="filter-character-page">
                <div className="info-character">
                    <Tabs
                        tabs={[
                            {
                                name: "HISTORÍA", content:
                                    <>
                                        <div className="image-character" style={{ backgroundImage: `url(${championsData.image.full})` }} />
                                        <div className="info-champions-text">
                                            <div className="teste-champions-character">
                                            <p className="subtitle-character-page">{championsData.title}</p>
                                            <p className="title-character-page">{championsData.name}</p>
                                            </div>
                                        </div>
                                    </>
                            },
                            { name: "HABILIDADES", content: "two content" },
                            { name: "SKINS", content: "teis content" }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default characterPage