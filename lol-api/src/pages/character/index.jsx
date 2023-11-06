import React, { useMemo } from "react";
import { useParams } from "react-router-dom"
import '../css/characterPage.css'
import { useLocation } from "react-router";
import data from '../../data/champions'
import Tabs from "../../components/tabs";
import Skills from "../../components/skills/index"


const useQuery = () => {
    const { search } = useLocation()
    return useMemo(() => new URLSearchParams(search), [search])
}

function characterPage() {

    let match = useParams();

    const query = useQuery();

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
                            {
                                name: "HABILIDADES", content:
                                    <>
                                        <div className="content-video-skills-champions">
                                            <Skills
                                                tabs={[
                                                    {
                                                        name: <div className="img-button-tabs" style={{ backgroundImage: `url(${championsData.skills[0].image})` }}></div>, content:
                                                            <>
                                                                <div className="video-skill">
                                                                    <div className="title-skills-champion">
                                                                        <p>{championsData.skills[0].type}</p>
                                                                    </div>
                                                                    <div className="video-skill-champion">
                                                                        <video key={championsData.skills[0].video} className="video-info-skill" autoPlay muted loop >
                                                                            <source src={championsData.skills[0].video} type="video/mp4" />
                                                                        </video>
                                                                        <div className="border-video-skill"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="description-skill-champions">
                                                                    <div className="main-text-description-skill">
                                                                        <p className="type-text-skill">{championsData.skills[0].type}</p>
                                                                        <p className="traco">-</p>
                                                                        <p className="type-text-skill-name">{championsData.skills[0].name}</p>
                                                                    </div>
                                                                    <div className="description-text-skill">
                                                                        <p>{championsData.skills[0].description}</p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                    }, {
                                                        name: <div className="img-button-tabs" style={{ backgroundImage: `url(${championsData.skills[1].image})` }}></div>, content:
                                                            <>
                                                                <div className="video-skill">
                                                                    <div className="title-skills-champion-q-w">
                                                                        <p>{championsData.skills[1].type}</p>
                                                                    </div>
                                                                    <div className="video-skill-champion">
                                                                        <video key={championsData.skills[1].video} className="video-info-skill" autoPlay muted loop >
                                                                            <source src={championsData.skills[1].video} type="video/mp4" />
                                                                        </video>
                                                                        <div className="border-video-skill"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="description-skill-champions">
                                                                    <div className="main-text-description-skill">
                                                                        <p className="type-text-skill">{championsData.skills[1].type}</p>
                                                                        <p className="traco">-</p>
                                                                        <p className="type-text-skill-name">{championsData.skills[1].name}</p>
                                                                    </div>
                                                                    <div className="description-text-skill">
                                                                        <p>{championsData.skills[1].description}</p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                    }, {
                                                        name: <div className="img-button-tabs" style={{ backgroundImage: `url(${championsData.skills[2].image})` }}></div>, content:
                                                            <>
                                                                <div className="video-skill">
                                                                    <div className="title-skills-champion-q-w">
                                                                        <p>{championsData.skills[2].type}</p>
                                                                    </div>
                                                                    <div className="video-skill-champion">
                                                                        <video key={championsData.skills[2].video} className="video-info-skill" autoPlay muted loop >
                                                                            <source src={championsData.skills[2].video} type="video/mp4" />
                                                                        </video>
                                                                        <div className="border-video-skill"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="description-skill-champions">
                                                                    <div className="main-text-description-skill">
                                                                        <p className="type-text-skill">{championsData.skills[2].type}</p>
                                                                        <p className="traco">-</p>
                                                                        <p className="type-text-skill-name">{championsData.skills[2].name}</p>
                                                                    </div>
                                                                    <div className="description-text-skill">
                                                                        <p>{championsData.skills[2].description}</p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                    }, {
                                                        name: <div className="img-button-tabs" style={{ backgroundImage: `url(${championsData.skills[3].image})` }}></div>, content:
                                                            <>
                                                                <div className="video-skill">
                                                                    <div className="title-skills-champion-q-w">
                                                                        <p>{championsData.skills[3].type}</p>
                                                                    </div>
                                                                    <div className="video-skill-champion">
                                                                        <video key={championsData.skills[3].video} className="video-info-skill" autoPlay muted loop >
                                                                            <source src={championsData.skills[3].video} type="video/mp4" />
                                                                        </video>
                                                                        <div className="border-video-skill"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="description-skill-champions">
                                                                    <div className="main-text-description-skill">
                                                                        <p className="type-text-skill">{championsData.skills[3].type}</p>
                                                                        <p className="traco">-</p>
                                                                        <p className="type-text-skill-name">{championsData.skills[3].name}</p>
                                                                    </div>
                                                                    <div className="description-text-skill">
                                                                        <p>{championsData.skills[3].description}</p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                    }, {
                                                        name: <div className="img-button-tabs" style={{ backgroundImage: `url(${championsData.skills[4].image})` }}></div>, content:
                                                            <>
                                                                <div className="video-skill">
                                                                    <div className="title-skills-champion">
                                                                        <p>{championsData.skills[4].type}</p>
                                                                    </div>
                                                                    <div className="video-skill-champion">
                                                                        <video key={championsData.skills[4].video} className="video-info-skill" autoPlay muted loop >
                                                                            <source src={championsData.skills[4].video} type="video/mp4" />
                                                                        </video>
                                                                        <div className="border-video-skill"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="description-skill-champions">
                                                                    <div className="main-text-description-skill">
                                                                        <p className="type-text-skill">{championsData.skills[4].type}</p>
                                                                        <p className="traco">-</p>
                                                                        <p className="type-text-skill-name">{championsData.skills[4].name}</p>
                                                                    </div>
                                                                    <div className="description-text-skill">
                                                                        <p>{championsData.skills[4].description}</p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                    }

                                                ]}
                                            />

                                        </div>
                                    </>
                            },
                            { name: "SKINS", content: "teis content" }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default characterPage