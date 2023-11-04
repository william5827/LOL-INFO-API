import { ReactNode, useState } from "react";
import "./styles.css";
import ChampionsIcon from '../../assets/icon-champions-page-white.png'
import WhitelogoLol from '../../assets/lol-image-white-icon.png'


const Tabs = ({ tabs }) => {
    const [currentTab, setCurrentTab] = useState(tabs[0]);

    return (
        <div className="container-character-page">
            <div className="header">
                <div className="div-button-back-champions">
                <a href="/champions">
                    <button className="back-champions-page">
                        <p className="champions-list-p-text">lista de campeões</p>
                        <img className="icon-back-button" src={ChampionsIcon} alt="Voltar pagina" />
                    </button>
                </a>    
                </div>
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className="tab-item"
                        onClick={() => setCurrentTab(tab)}
                    >
                        {tab.name}
                    </button>
                ))}
                <div className="icon-champions-back-homepage">
                    <img src={WhitelogoLol} alt="champions" />
                </div>
            </div>
            {currentTab && <div className="content-character-component">{currentTab.content}</div>}
        </div>
    );
};

export default Tabs;