import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img} alt="" />
            <strong>{props.title}</strong>
            <strong>{props.description}</strong>
            <button>View Menu</button>
        </div>
    )
}

export default Card;
