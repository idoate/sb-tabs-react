import React, { useState } from "react";
import { Tab } from "../Tab/Tab";

interface Tabcontent {
    name: string;
    text: string;
}

interface Homeprops {
    tabs: Tabcontent[];
}

export function Home(props: Homeprops) {
    const [currentTabText, setCurrentTabText] = useState<string>('Pressione um botão para començar')

    return(
        <div>
            <div>
                {props.tabs.map((tab:Tabcontent, index:number) =>
                    <Tab key={index} tabName={tab.name}  tabText={tab.text} setThisTab={setCurrentTabText}/>  )
                }
            </div>
            <p> {currentTabText}</p>
        </div>
    );
}
