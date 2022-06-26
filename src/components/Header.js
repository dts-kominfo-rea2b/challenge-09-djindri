// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import style from "./header.css";

const Header = () => {
    return (
        <header className={style.header_box}>
            <div className={style.header_}>
                <h1 className={style.header_title}>Call a Friend</h1>
                <p className={style.header_desc}>your friendly contact app</p>
             </div>
        </header>
    );
};

export default Header;