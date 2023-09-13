import React from 'react';
import productCard from "./ProductCard.jsx";


function Tile(props) {
    return (
        <section>
            <img src={props.footerImage}/>
            <h2>{props.footerTitle}</h2>
            <p>{props.footerParagraph1}</p>
            <p>{props.footerParagraph2}</p>
        </section>

)}


export default Tile;
