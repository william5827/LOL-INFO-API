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

    const championsData = champions.find(champion => champion.name == match.name)

    return (
        <div className="character-page" style={{ backgroundImage: `url(${championsData.image.full})` }}>

            <div className="filter-character-page">
                <div className="info-character">
                    <Tabs
                        tabs={[
                            {
                                name: "HISTORÍA", content:
                                    <>
                                        <div className="image-character" style={{ backgroundImage: `url(${championsData.image.full})` }}>
                                            <div className="filter-image-character" />
                                        </div>
                                        <div className="info-champions-text">
                                            <div className="champions-character-texts">
                                                <p className="subtitle-character-page">{championsData.title}</p>
                                                <p className="title-character-page">{championsData.name}</p>
                                            </div>
                                            <div className="content-characters-page-description">
                                                <div className="character-type-history">
                                                    <div className="character-page-description-type">
                                                        <div className="description-content-type">
                                                            <p className="title-description-role">
                                                                rota
                                                            </p>
                                                            <img src={championsData.image.lane} alt="rota" />
                                                        </div>
                                                        <div className="description-content-function">
                                                            <p className="type-description-character">
                                                                função
                                                            </p>
                                                            <p className="text-function-character">
                                                                {championsData.tags}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="character-page-history">
                                                        <p className="text-content-history">{championsData.blurb}</p>
                                                    </div>
                                                </div>
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