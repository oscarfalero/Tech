import React from 'react';
import styles from "./Btn.module.css";

export default function Btn (props){
    const {btnText, handleBtnClick, primary} = props;
    
    const btnClass = primary ? styles.primary : styles.secondary;

    return(
        <button className={btnClass} onClick={handleBtnClick}>{btnText}</button>
    );
}