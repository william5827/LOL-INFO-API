import { ReactNode, useEffect, useState } from "react";
import "./styles.css";


const Skills = ({ tabs }) => {
    const [currentTab, setCurrentTab] = useState(tabs[0]);

    useEffect(() => {
        console.log(currentTab)
    }, [currentTab])

    return (
        <div className="container-character-page-skills">
            <div className="header-skills">

                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className="tab-item-skills"
                        onClick={() => setCurrentTab(tab)}
                    >
                        {tab.name}
                    </button>
                ))}

            </div>
            {currentTab && <div className="content-character-component-skills">{currentTab.content}</div>}
        </div>
    );
};

export default Skills;