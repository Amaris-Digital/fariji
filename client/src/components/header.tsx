/**
 * Sample Component (Replace if you find its usage anywhere in the project)
 * */
import React from "react";
import {type HeaderType} from "../utils/types";

const Header = ({id, name}: HeaderType): JSX.Element => {
    return (
        <div className="header" key={id}>
            <h1>{name}</h1>
        </div>
    )
}

export default Header;