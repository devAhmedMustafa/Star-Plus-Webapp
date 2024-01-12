"use client"

import "@styles/Buttons/TranslationBtn.css"

export default function Translations(){
    return (
        <div className="flex justify-center gap-10">
            <Btn navigation="Crew"/>
            <Btn navigation="Games"/>
        </div>
    )
}

function Btn(props){
    return (
        <a tabIndex="0" className="signInButton">
            <p className="signInButtonText">{props.navigation}</p>
        </a>
    )
}