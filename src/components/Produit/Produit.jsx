import React from 'react';
import styles from './produit.module.css'

const Produit = (props) => {
    return (
        <div className={styles.produit}>
            <img src={props.product.images[0]} alt={props.product.title}/>
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <h3>{props.product.price}</h3>
            <button>Ajouter au panier</button>
        </div>
    );
}

export default Produit;
