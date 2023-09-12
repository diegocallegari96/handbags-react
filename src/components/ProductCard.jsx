import React from 'react';
function Product(props) {
    return (
        <article>
            <span>{props.productAlert}</span>
            <img src={props.productImage}/>
            <p>{props.nameBag}</p>
            <h4>€{props.priceBag},-</h4>
        </article>
    );
}

export default Product