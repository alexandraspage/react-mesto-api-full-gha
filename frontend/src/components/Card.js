import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";

function Card(props) {

    const user = React.useContext(CurrentUserContext);

    const isOwner = props.card.owner._id === user._id;

    const isLiked = props.card.likes.some(i => i._id === user._id);

    const cardLikeButtonClassName = (
        `elements__like-button ${isLiked && 'elements__like-button_active'}`

    )

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick(){
        props.onCardLike(props.card);
        
    }

    function handleCardDelete(){
        props.onCardDelete(props.card);
    }

    return (
        <div className="elements__group">
            <img className="elements__image" src={`${props.card.link}`} alt={`${props.card.name}`} onClick={handleClick} />
            <button className={`elements__trash-button ${isOwner ? 'elements__trash-button_active' : ''}`}  type="button" onClick={handleCardDelete}></button>
            <div className="elements__info">
                <h2 className="elements__caption">{props.card.name}</h2>
                <div className="elements__like-container">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <p className="elements__like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;