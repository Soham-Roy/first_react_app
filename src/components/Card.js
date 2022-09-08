import React from "react";

export default function Card (props) {
    return (
        <div className="card">
            {props.item.adult === true && <div className="adult">18+</div>}
            <img 
                src={ require(`.././images${props.item.poster_path}`) } 
                id = "movie_thumbnail"
            />
            <div className="card_text">
                <h4>{props.item.original_title}</h4>
                <p>{`Popularity: ${props.item.popularity}`}</p>
            </div>
        </div>
    )
}