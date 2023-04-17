import React from "react"

function ProductCard(props){
    return (
        <div className="wrapper">
            <div className="productCard">
                <img className="cardImg" src={props.img} alt="img"/>
                <h3 className="cardTitle">{props.title}</h3>
                <p className="cardDescription">{props.description}</p>
                <button className="cardButton">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard