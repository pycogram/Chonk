import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar( props ){

    const justImg = props.logo1;

    let [ isMenuActive, setMenuActive ] = useState(false);
    const [menuButton, setMenuButton] = useState("menuBtn");
    const [menuOption, setMenuOption] = useState("menuOptionInactive");

    const MenuActive = () => {
        if(!isMenuActive){
            setMenuButton("menuBtn menuBtnActive");
            setMenuOption("nav menuOptionActive")
        } else {
            setMenuButton("menuBtn");
            setMenuOption("menuOptionInactive")
        }
        setMenuActive(!isMenuActive);
    }
    const closeOption = () => {
        if(!isMenuActive){
            setMenuButton("menuBtn menuBtnActive");
            setMenuOption("nav menuOptionActive")
        } else {
            setMenuButton("menuBtn");
            setMenuOption("menuOptionInactive")
        }
        setMenuActive(!isMenuActive);
    }
    return(
        <div className="homePage">
            <nav>
                <img src={justImg} alt="Sok Logo"></img>
                <ul className={menuOption}> 
                </ul>
                <button><a href="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R" target="_blank">Buy $Sok</a></button>
                <span className={menuButton}  onClick={() => MenuActive()}></span>
            </nav>
        </div>
    )
}