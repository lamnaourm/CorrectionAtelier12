import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h1>ISMO SHOP</h1>

            <div className={styles.panier}>
                Panier : Nombre articles : {props.count} - Montant total : {props.total} DH
            </div>
        </div>
    );
}

export default Header;
